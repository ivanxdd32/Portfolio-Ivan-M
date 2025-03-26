import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function Contacto() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null); // Estado para mensaje de éxito o error

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    const formData = {
      name: formRef.current.user_name.value,
      email: formRef.current.user_email.value,
      message: formRef.current.message.value,
    };

    try {
      const response = await fetch("https://portfolio-ivan-m-bc.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessageStatus({ type: "success", text: "Mensaje enviado con éxito ✅" });
        formRef.current.reset();
      } else {
        setMessageStatus({ type: "error", text: "Error al enviar el mensaje ❌" });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessageStatus({ type: "error", text: "Error en la conexión con el servidor ❌" });
    } finally {
      setLoading(false);

      // Ocultar el mensaje después de 4 segundos
      setTimeout(() => setMessageStatus(null), 4000);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white py-20 px-4 overflow-hidden">
      <motion.h2
        className="text-3xl font-bold text-center pt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Contáctame
      </motion.h2>
      <motion.p
        className="text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Envíame un mensaje y te responderé lo antes posible.
      </motion.p>

      {/* Formulario de contacto */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="mb-4">
          <label className="block text-left text-gray-400 font-bold pb-2">Nombre</label>
          <input
            type="text"
            name="user_name"
            placeholder="Tu Nombre"
            required
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-400 font-bold pb-2">Correo</label>
          <input
            type="email"
            name="user_email"
            placeholder="Tu Correo"
            required
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-400 font-bold pb-2">Mensaje</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
            required
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Mensaje de éxito o error */}
        {messageStatus && (
          <motion.div
            className={`mb-3 p-2 text-sm font-semibold rounded-lg ${
              messageStatus.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {messageStatus.text}
          </motion.div>
        )}

        {/* Botón de enviar */}
        <motion.button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Enviando..." : "Enviar"}
          <FaPaperPlane />
        </motion.button>
      </motion.form>

      {/* Botón de LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/ivan-andres-martinez-rios-7b9140266"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition animate__animated animate__backInUp"
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaLinkedin className="text-xl" /> Visita mi LinkedIn
      </motion.a>
      
      {/* Botón de GitHub */}
      <motion.a
        href="https://github.com/ivanxdd32"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-2 bg-gray-800 px-5.5 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition animate__animated animate__backInUp"
        transition={{ duration: 1, delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGithub className="text-xl" /> Visita mi GitHub
      </motion.a>
    </section>
  );
}
