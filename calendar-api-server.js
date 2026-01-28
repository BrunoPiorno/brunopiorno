const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const { format, addMinutes, parseISO } = require('date-fns');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración OAuth2 de Google
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Configurar credenciales del service account o refresh token
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// Endpoint para buscar automáticamente el próximo horario disponible
app.post('/api/calendar/find-next-slot', async (req, res) => {
  try {
    const { duration, searchDays, businessHours } = req.body;
    const now = new Date();
    
    // Buscar en los próximos días
    for (let dayOffset = 0; dayOffset < searchDays; dayOffset++) {
      const currentDate = new Date(now);
      currentDate.setDate(now.getDate() + dayOffset);
      currentDate.setHours(0, 0, 0, 0);
      
      // Saltar fines de semana
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) continue; // 0=domingo, 6=sábado
      
      // Revisar horarios comerciales (9am - 6pm)
      for (let hour = businessHours.start; hour <= businessHours.end - 1; hour++) {
        const slotStart = new Date(currentDate);
        slotStart.setHours(hour, 0, 0, 0);
        
        const slotEnd = addMinutes(slotStart, duration);
        
        // Verificar si el slot está disponible
        const response = await calendar.freebusy.query({
          requestBody: {
            timeMin: slotStart.toISOString(),
            timeMax: slotEnd.toISOString(),
            items: [{ id: 'primary' }]
          }
        });
        
        const isAvailable = !response.data.calendars.primary.busy.length;
        
        if (isAvailable && slotStart > now) {
          return res.json({
            success: true,
            availableSlot: slotStart.toISOString()
          });
        }
      }
    }
    
    res.json({
      success: false,
      message: 'No available slots found'
    });
    
  } catch (error) {
    console.error('Error finding next slot:', error);
    res.status(500).json({ error: 'Error finding next slot' });
  }
});

// Endpoint para verificar disponibilidad
app.post('/api/calendar/check-availability', async (req, res) => {
  try {
    const { startTime, duration } = req.body;
    const start = new Date(startTime);
    const end = addMinutes(start, duration);

    // Verificar disponibilidad
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: start.toISOString(),
        timeMax: end.toISOString(),
        items: [{ id: 'primary' }]
      }
    });

    const isAvailable = !response.data.calendars.primary.busy.length;

    // Si no está disponible, generar alternativas
    let alternatives = [];
    if (!isAvailable) {
      alternatives = generateAlternatives(start, duration);
    }

    res.json({
      available: isAvailable,
      alternatives: alternatives.map(alt => alt.toISOString())
    });

  } catch (error) {
    console.error('Error checking availability:', error);
    res.status(500).json({ error: 'Error checking availability' });
  }
});

// Endpoint para crear reunión
app.post('/api/calendar/create-meeting', async (req, res) => {
  try {
    const { summary, description, startTime, duration, attendeeEmail, meetingType } = req.body;
    const start = new Date(startTime);
    const end = addMinutes(start, duration);

    let eventData = {
      summary,
      description,
      start: {
        dateTime: start.toISOString(),
        timeZone: 'America/Argentina/Buenos_Aires'
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: 'America/Argentina/Buenos_Aires'
      },
      attendees: [
        { email: attendeeEmail },
        { email: 'contacto@alora.com' } // Email del asesor
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 60 },
          { method: 'popup', minutes: 10 }
        ]
      }
    };

    // Agregar conferencia si es videollamada
    if (meetingType === 'video') {
      eventData.conferenceData = {
        createRequest: {
          requestId: `alora-meeting-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' }
        }
      };
    }

    const event = await calendar.events.insert({
      calendarId: 'primary',
      resource: eventData,
      conferenceDataVersion: meetingType === 'video' ? 1 : 0
    });

    // Enviar notificación por EmailJS (opcional)
    await sendMeetingNotification({
      attendeeEmail,
      summary,
      start,
      end,
      meetingType,
      meetLink: event.data.hangoutLink
    });

    res.json({
      success: true,
      eventId: event.data.id,
      meetingLink: event.data.hangoutLink || null
    });

  } catch (error) {
    console.error('Error creating meeting:', error);
    res.status(500).json({ error: 'Error creating meeting' });
  }
});

// Función para generar alternativas de horario
function generateAlternatives(requestedTime, duration) {
  const alternatives = [];
  const now = new Date();
  
  // Próximos 3 días
  for (let day = 0; day < 3; day++) {
    const date = addMinutes(now, day * 24 * 60);
    
    // Horarios comerciales (9am a 6pm)
    for (let hour = 9; hour <= 18; hour++) {
      const candidate = new Date(date);
      candidate.setHours(hour, 0, 0, 0);
      
      if (candidate > requestedTime && candidate.getHours() >= 9 && candidate.getHours() <= 17) {
        alternatives.push(candidate);
        if (alternatives.length >= 5) break;
      }
    }
    
    if (alternatives.length >= 5) break;
  }
  
  return alternatives;
}

// Función para enviar notificación (opcional)
async function sendMeetingNotification({ attendeeEmail, summary, start, end, meetingType, meetLink }) {
  // Aquí puedes integrar con EmailJS o otro servicio de notificación
  console.log(`Meeting notification sent to ${attendeeEmail}`);
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Calendar API server running on port ${PORT}`);
});
