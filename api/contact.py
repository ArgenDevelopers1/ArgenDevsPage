import resend
import os
from http.server import BaseHTTPRequestHandler
import json

# Configura tu API Key desde variables de entorno
resend.api_key = os.environ.get("RESEND_API_KEY")

class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        """Maneja CORS preflight requests"""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        # Leer el Content-Length del header
        content_length = int(self.headers.get('Content-Length', 0))
        
        try:
            # Leer y parsear los datos del body
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))

            name = data.get('name', '').strip()
            email = data.get('email', '').strip()
            phone = data.get('phone', '').strip()
            service = data.get('service', '').strip()
            message = data.get('message', '').strip()

            # Validar que los campos requeridos existan
            if not all([name, email, phone, service, message]):
                self.send_response(400)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Todos los campos son requeridos"}).encode())
                return

            # Validar API key
            if not resend.api_key:
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"error": "RESEND_API_KEY no está configurada"}).encode())
                return

            # Construir el HTML del email
            email_html = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f7; padding: 40px 20px;">
                    <tr>
                        <td align="center">
                            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                <!-- Header -->
                                <tr>
                                    <td style="background: linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%); padding: 40px 30px; text-align: center;">
                                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                                            💬 Nuevo Mensaje de Contacto
                                        </h1>
                                        <p style="margin: 10px 0 0 0; color: #e0b3ff; font-size: 14px;">
                                            Has recibido un nuevo mensaje desde tu sitio web
                                        </p>
                                    </td>
                                </tr>

                                <!-- Content -->
                                <tr>
                                    <td style="padding: 40px 30px;">
                                        <!-- Información del contacto -->
                                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                                            <tr>
                                                <td style="padding: 18px 20px; background-color: #f8f9fa; border-left: 4px solid #7b2cbf; border-radius: 8px; margin-bottom: 12px;">
                                                    <p style="margin: 0 0 8px 0; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        👤 Nombre
                                                    </p>
                                                    <p style="margin: 0; color: #212529; font-size: 16px; font-weight: 500;">
                                                        {name}
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>

                                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                                            <tr>
                                                <td style="padding: 18px 20px; background-color: #f8f9fa; border-left: 4px solid #7b2cbf; border-radius: 8px;">
                                                    <p style="margin: 0 0 8px 0; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        ✉️ Email
                                                    </p>
                                                    <p style="margin: 0;">
                                                        <a href="mailto:{email}" style="color: #7b2cbf; text-decoration: none; font-size: 16px; font-weight: 500;">
                                                            {email}
                                                        </a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>

                                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                                            <tr>
                                                <td style="padding: 18px 20px; background-color: #f8f9fa; border-left: 4px solid #7b2cbf; border-radius: 8px;">
                                                    <p style="margin: 0 0 8px 0; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        📱 Teléfono
                                                    </p>
                                                    <p style="margin: 0;">
                                                        <a href="tel:{phone}" style="color: #7b2cbf; text-decoration: none; font-size: 16px; font-weight: 500;">
                                                            {phone}
                                                        </a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>

                                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                                            <tr>
                                                <td style="padding: 18px 20px; background-color: #f8f9fa; border-left: 4px solid #7b2cbf; border-radius: 8px;">
                                                    <p style="margin: 0 0 8px 0; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        🎯 Servicio de Interés
                                                    </p>
                                                    <p style="margin: 0; color: #212529; font-size: 16px; font-weight: 500;">
                                                        {service}
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Mensaje -->
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 8px; border: 1px solid #dee2e6;">
                                                    <p style="margin: 0 0 12px 0; color: #6c757d; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        💭 Mensaje
                                                    </p>
                                                    <div style="margin: 0; color: #495057; font-size: 15px; line-height: 1.8; word-wrap: break-word; overflow-wrap: break-word;">
                                                        {message}
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Footer -->
                                <tr>
                                    <td style="padding: 25px 30px; background-color: #f8f9fa; border-top: 1px solid #dee2e6; text-align: center;">
                                        <p style="margin: 0; color: #6c757d; font-size: 13px; line-height: 1.5;">
                                            📧 Este mensaje fue enviado desde el formulario de contacto<br>
                                            Puedes responder directamente haciendo reply a este email
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
            """

            # Enviar el email a través de Resend
            params = {
                "from": "Contacto FastSolutions <onboarding@resend.dev>",
                "to": [os.environ.get("CONTACT_EMAIL", "contacto@ejemplo.com")],
                "subject": f"Nuevo mensaje de {name} - {service}",
                "html": email_html,
                "reply_to": email,  # Permite responder directamente al cliente
            }
            
            resend.Emails.send(params)

            # Respuesta exitosa
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "success", "message": "Mensaje enviado correctamente"}).encode())

        except json.JSONDecodeError:
            self.send_response(400)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"error": "JSON inválido"}).encode())

        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode())
