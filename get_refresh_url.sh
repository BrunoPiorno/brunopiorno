#!/bin/bash

echo "🔗 URL para obtener Refresh Token:"
echo ""
echo "https://accounts.google.com/o/oauth2/v2/auth?client_id=593444311192-7af4l5qv7d765lbr5a3sdesh30efnsd8.apps.googleusercontent.com&redirect_uri=http://localhost:3001/auth/google/callback&scope=https://www.googleapis.com/auth/calendar&response_type=code&access_type=offline&prompt=consent"
echo ""
echo "📋 Pasos:"
echo "1. Copia y pega esta URL en tu navegador"
echo "2. Inicia sesión con tu cuenta de Google"
echo "3. Permite el acceso a Google Calendar"
echo "4. Serás redirigido a: http://localhost:3001/auth/google/callback?code=XXXXX"
echo "5. Copia el código (XXXXX)"
echo "6. Pégalo aquí para obtener el Refresh Token"
