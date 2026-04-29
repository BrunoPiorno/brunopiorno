# Alora CRM - Formulario Embebible

## Formulario inline
Se inserta directamente en el HTML donde pongas el script.

```html
<script src="https://alora-crm.vercel.app/embed.js" data-form-id="default"></script>
```

## Widget flotante
Muestra un botón flotante en la esquina inferior derecha, como Intercom.

```html
<script
  src="https://alora-crm.vercel.app/embed.js"
  data-form-id="default"
  data-mode="widget"
  data-color="#2d6167">
</script>
```

## API programática
Controlá el widget desde JavaScript:

```javascript
// Abrir / cerrar / toggle
window.AloraLeadForm.open()
window.AloraLeadForm.close()
window.AloraLeadForm.toggle()

// Disparar desde un botón
<button onclick="window.AloraLeadForm.open()">Contactar</button>
```

## Endpoint webhook
Integraciones externas (Zapier, Make, n8n):

```
POST https://alora-crm.vercel.app/api/webhooks/lead
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "email": "juan@empresa.com",
  "telefono": "+54 11 0000-0000",
  "website": "https://empresa.com",
  "pais": "Argentina",
  "mensaje": "Consulta sobre proyecto",
  "privacidad": true,
  "formId": "default",
  "source": "https://sitio-externo.com",
  "timestamp": "2026-04-28T21:00:00.000Z"
}
```

## Atributos del script

| Atributo | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `data-form-id` | ID único del formulario | `default` |
| `data-mode` | Modo de visualización (`inline` o `widget`) | `inline` |
| `data-color` | Color principal del formulario (hex) | `#2d6167` |
| `data-position` | Posición del widget (`bottom-right`, `bottom-left`) | `bottom-right` |

## Demo local
Para probar localmente, abrir:
```
http://localhost:3000/embed-demo.html
```

## Archivos del sistema
- `/public/embed.js` - Script embebible
- `/api/webhooks/lead.js` - Endpoint API
- `/public/embed-demo.html` - Página de demostración
