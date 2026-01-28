#!/bin/bash

echo "🔄 Intercambiando código por Refresh Token..."
echo ""

# Código de autorización obtenido
CODE="4/0ASc3gC3zbZhRIPaELJVI2galtl3Yfz1XvbUZ4aVdQEqMwHWJh7hD9cSh4Yc0AjcXUHvhfw"

# Datos de la aplicación
CLIENT_ID="593444311192-7af4l5qv7d765lbr5a3sdesh30efnsd8.apps.googleusercontent.com"
CLIENT_SECRET="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"
REDIRECT_URI="https://localhost:3001/auth/google/callback"

echo "📤 Enviando solicitud a Google..."
echo ""

curl -X POST https://oauth2.googleapis.com/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "code=$CODE&client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&redirect_uri=$REDIRECT_URI&grant_type=authorization_code"

echo ""
echo ""
echo "✅ Si la respuesta es exitosa, busca 'refresh_token' en la respuesta"
echo "📋 Copia el refresh_token y guárdalo en tu archivo .env"
