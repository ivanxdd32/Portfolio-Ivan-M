import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import validator from "validator";

// Cargar variables de entorno
dotenv.config();

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: "https://portfolio-ivan-m.onrender.com",
  methods: ["POST"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Límite de solicitudes
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Máximo 5 solicitudes por IP
  message: {
    success: false,
    message: "Demasiadas solicitudes. Inténtalo más tarde.",
  },
});

// Ruta segura para enviar correos
app.post("/send-email", emailLimiter, async (req, res) => {
  let { name, email, message } = req.body;

  // Validación de informacion
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !validator.isEmail(email) ||
    name.length > 100 ||
    message.length > 1000
  ) {
    return res.status(400).json({
      success: false,
      message: "Datos inválidos. Verifica el formulario.",
    });
  }

  // Sanitización
  name = validator.escape(name.trim());
  email = validator.normalizeEmail(email.trim());
  message = validator.escape(message.trim());

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Mensaje de ${name}`,
      text: `Correo: ${email}\n\nMensaje:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Error al enviar el correo" });
  }
});

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("El servidor está funcionando correctamente 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
