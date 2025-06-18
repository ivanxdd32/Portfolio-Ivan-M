
<div align="center">
  <a href="https://portfolio-ivan-m.onrender.com/" tarjet="_blank">
    <img src="https://img.shields.io/badge/Portfolio-Iván-blueviolet?style=for-the-badge&logo=react" alt="Portfolio Ivan" />
  </a>
  <h1>🌐 Portafolio Web Personal</h1>
  <p>Explora mis proyectos, habilidades y cómo me puedes contactar. Un sitio moderno y funcional hecho con ❤️</p>
</div>

---

## 🚀 Tecnologías Utilizadas

### 🎨 Frontend
- **React** ⚛️ – Biblioteca para crear interfaces de usuario dinámicas.
- **Vite** ⚡ – Compilador ultrarrápido para desarrollo moderno.
- **TailwindCSS** 💨 – Framework CSS para diseño rápido y responsive.
- **Framer Motion** 🎬 – Librería de animaciones para React.
- **Animate.css** ✨ – Animaciones listas para usar.

### 🔧 Backend
- **Node.js** 🟢 – Entorno de ejecución de JavaScript para el backend.
- **Express** 🚂 – Framework minimalista para servidores.
- **Nodemailer** 📬 – Envío de correos electrónicos.
- **dotenv** 🔐 – Manejo seguro de variables de entorno.
- **CORS** 🌐 – Permite comunicación entre dominios.

### ☁️ Hosting
- **Render** – Despliegue del backend y frontend con facilidad.

---

## 📁 Estructura del Proyecto

```
📦 Portfolio-Ivan-M
├── 📂 public # Archivos estáticos públicos
├── 📂 src
│ ├── 📂 assets # Recursos gráficos y multimedia
│ ├── 📂 backend # API en Express con Nodemailer
│ ├── 📂 components # Componentes reutilizables de React
│ ├── 📂 context # Contextos globales de React
│ ├── 📂 router # Ruteo de vistas con React Router
│ ├── 📂 views # Vistas principales del sitio
│ ├── app.jsx # Componente raíz
│ ├── main.jsx # Punto de entrada de la app
│ ├── main.css / main.css # Estilos generales
├── vite.config.js
├── index.html
└── README.md
```

- **Frontend**: App SPA con secciones de inicio, proyectos, contacto, animaciones suaves y diseño responsivo.
- **Backend**: API para envío de correos con protección contra spam y límites por tiempo.

---

## 🛠️ Instalación Local

1. Clonar repositorio:

```bash
git clone https://github.com/ivanxdd32/Portfolio-Ivan-M.git
```

2. Instalar y correr el **Frontend**:

```bash
cd Portfolio-Ivan-M
npm install
npm run dev
```

> Accede a la URL local que aparece en la consola, usualmente algo como `http://localhost:5173/`

Crea un archivo `.env` y asegúrate de que esté listado en `.gitignore`:

```env
EMAIL_USER=tu_correo@ejemplo.com
EMAIL_PASS=una_contraseña_segura_generada_por_app
```

> ⚠️ **Importante**: Nunca subas el archivo `.env` a GitHub.

Inicia el servidor:

```bash
npm start
```

> El backend estará corriendo en `http://localhost:5000` y cuenta con protección contra abuso mediante limitaciones por IP o tiempo.

---

## 🌍 Despliegue

- **Frontend Render**: [Render](https://portfolio-ivan-m.onrender.com)
- **Backend Render**: [Render](https://portfolio-ivan-m-bc.onrender.com)

---

## 📌 Mejoras Futuras

- 🌈 Rediseño con animaciones más creativas.
- ✍️ Sección de blog para artículos técnicos.
- 🛠️ Panel para gestión de proyectos dinámicamente.

---

## 📬 Contacto

¿Te interesa trabajar conmigo? Ve a la sección de **Contacto** en el sitio o mándame un mensaje directamente desde el portafolio.

---

## ⚖️ Licencia

Distribuido bajo la licencia MIT. Ver [LICENSE](LICENSE) para más información.
