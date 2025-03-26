# Mi portafolio web

Este es mi **portafolio web personal**, donde se presentan mis proyectos y habilidades en desarrollo web. El proyecto está construido con **React** en el frontend y un **backend en Node.js** para el manejo de formularios de contacto y otras funcionalidades.

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
     - **/inicio (Raíz)**: Página principal que muestra una bienvenida y mis habilidades.
     - **/proyectos**: Página que muestra mis proyectos personales, con animaciones al cargar los elementos.
     - **/contacto**: Página con un formulario de contacto para enviar correos electrónicos directamente desde el sitio.

### 2. **Backend**:
   - El backend está construido con **Node.js** y **Express** y se encarga de manejar las solicitudes de contacto y enviar correos electrónicos.
   - Rutas importantes:
     - **/send-email (POST)**: Ruta para manejar los envíos de correo electrónico desde el formulario de contacto.
     - **/**: Ruta base para verificar que el servidor está en funcionamiento.

## Instrucciones para la instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ivanxdd32/Portfolio-Ivan-M.git

2. **Frontend**:

   - Navega a la carpeta del frontend:

     ```bash
     cd frontend
     ```

   - Instala las dependencias:

     ```bash
     npm install
     ```

   - Ejecuta el servidor de desarrollo:

     ```bash
     npm run dev
     ```

   - El frontend debería estar corriendo en `http://localhost:3000`.

3. **Backend**:

   - Navega a la carpeta del backend:

     ```bash
     cd backend
     ```

   - Instala las dependencias:

     ```bash
     npm install
     ```

   - Crea un archivo `.env` y agrega tus credenciales para el correo electrónico:

     ```env
     EMAIL_USER=tu_email@gmail.com
     EMAIL_PASS=tu_contraseña_de_email
     ```

   - Ejecuta el servidor de backend:

     ```bash
     npm start
     ```

   - El backend estará corriendo en `http://localhost:5000`.

4. Para desplegar ambos, puedes usar **Render**. El frontend es un **Static Site**, mientras que el backend es una **API** de **Node.js**.

## Despliegue

1. **Frontend**: El frontend está desplegado en [Render](https://portfolio-ivan-m.onrender.com), donde se sirve como una aplicación estática.

2. **Backend**: El backend está desplegado en [Render](https://portfolio-ivan-m-bc.onrender.com), y maneja las solicitudes de contacto enviadas desde el frontend.

## Mejoras futuras

- Agregar más interactividad a los proyectos.
- Incluir un sistema de autenticación y autorización.
- Mejorar la interfaz de usuario con animaciones y transiciones más complejas.
- Agregar un blog o sección de publicaciones.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
