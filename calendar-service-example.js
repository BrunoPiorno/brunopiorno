// Estructura para el servicio de Google Calendar
const { google } = require('googleapis');
const { OAuth2 } = google.auth;

// Configuración OAuth2
const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Configurar token de acceso
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// Verificar disponibilidad
const checkAvailability = async (startTime, endTime) => {
  try {
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: startTime.toISOString(),
        timeMax: endTime.toISOString(),
        items: [{ id: 'primary' }]
      }
    });
    
    return !response.data.calendars.primary.busy.length;
  } catch (error) {
    console.error('Error checking availability:', error);
    return false;
  }
};

// Crear evento
const createMeeting = async (summary, description, startTime, attendeeEmail) => {
  try {
    const event = {
      summary,
      description,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'America/Argentina/Buenos_Aires'
      },
      end: {
        dateTime: new Date(startTime.getTime() + 20 * 60000).toISOString(),
        timeZone: 'America/Argentina/Buenos_Aires'
      },
      attendees: [{ email: attendeeEmail }],
      conferenceData: {
        createRequest: {
          requestId: Math.random().toString(36).substring(7)
        }
      }
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1
    });

    return response.data;
  } catch (error) {
    console.error('Error creating meeting:', error);
    throw error;
  }
};

module.exports = { checkAvailability, createMeeting };
