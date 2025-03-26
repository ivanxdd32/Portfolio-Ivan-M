# Portfolio de Ivan

Este es el portafolio personal de **Ivan**, donde se presentan mis proyectos y habilidades en desarrollo web. El proyecto está construido con **React** en el frontend y un **backend en Node.js** para el manejo de formularios de contacto y otras funcionalidades.

## Tecnologías utilizadas

### Frontend:
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción y desarrollo rápido para proyectos de React.
- **TailwindCSS**: Framework de CSS para el diseño rápido y responsivo.
- **JSX/HTML**: Lenguajes utilizados para estructurar el contenido de la página.

### Backend:
- **Node.js**: Plataforma de JavaScript para el backend.
- **Express**: Framework de Node.js para crear la API REST.
- **Nodemailer**: Librería para el envío de correos electrónicos desde el servidor.
- **CORS**: Middleware para permitir peticiones entre diferentes dominios.
- **dotenv**: Para manejar variables de entorno de manera segura.

### Otros:
- **Render**: Plataforma para desplegar el backend y el frontend de manera sencilla.

## Estructura de la aplicación

El proyecto está dividido en dos partes:

### 1. **Frontend**:
   - El frontend está desarrollado en **React** y se sirve como una aplicación estática a través de **Render**.
   - Rutas importantes:
     - **/ (Raíz)**: Página principal que muestra una bienvenida y enlaces a los proyectos y habilidades.
     - **/contacto**: Página con un formulario de contacto para enviar correos electrónicos directamente desde el sitio.
     - **/proyectos**: Página que muestra mis proyectos personales, con animaciones al cargar los elementos.

### 2. **Backend**:
   - El backend está construido con **Node.js** y **Express** y se encarga de manejar las solicitudes de contacto y enviar correos electrónicos.
   - Rutas importantes:
     - **/send-email (POST)**: Ruta para manejar los envíos de correo electrónico desde el formulario de contacto.
     - **/**: Ruta base para verificar que el servidor está en funcionamiento.

## Instrucciones para la instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/tu_repo.git
