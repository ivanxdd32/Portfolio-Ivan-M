import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import ExplosionParticles from "../Components/ExplosionParticles";

export default function Contacto() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const [showParticles, setShowParticles] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: formRef.current.user_name.value,
      email: formRef.current.user_email.value,
      message: formRef.current.message.value,
    };

    try {
      const response = await fetch(
        "https://portfolio-ivan-m-bc.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessageStatus({
          type: "success",
          text: "Mensaje enviado con éxito ✅",
        });
        formRef.current.reset();
      } else {
        setMessageStatus({
          type: "error",
          text: "Error al enviar el mensaje ❌",
        });
      }

      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 1200); // Dura 1.2 segundos
    } catch (error) {
      console.error("Error:", error);
      setMessageStatus({
        type: "error",
        text: "Error en la conexión con el servidor ❌",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setMessageStatus(null), 4000);
    }
  };

  return (
    <>
      {showParticles && <ExplosionParticles />}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12">
          {/* Izquierda: texto + icono */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-center text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-3xl font-bold flex items-center gap-2 pt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FaPaperPlane className="text-blue-400 text-3xl" />
              Contáctame
            </motion.h2>
            <p className="text-gray-400 mb-4 mt-4 max-w-md">
              Envíame un mensaje y te responderé lo antes posible.
            </p>
          </motion.div>

          {/* Derecha: formulario */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-blue-500/30"
            >
              <div className="mb-4">
                <label className="block text-left text-gray-300 font-bold pb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Tu Nombre"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left text-gray-300 font-bold pb-2">
                  Correo
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Tu Correo"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left text-gray-300 font-bold pb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              {/* Estado del mensaje */}
              {messageStatus && (
                <motion.div
                  className={`mb-3 p-2 text-sm font-semibold rounded-lg text-white ${
                    messageStatus.type === "success"
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {messageStatus.text}
                </motion.div>
              )}
              <motion.button
                type="submit"
                disabled={loading}
                className="relative overflow-hidden w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-bold transition-all duration-300 ease-in-out
             bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:shadow-2xl focus:outline-none
             hover:from-indigo-500 hover:to-blue-700"
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Efecto de luz que pasa por encima */}
                <span className="absolute inset-0 bg-white opacity-10 blur-sm transform -translate-x-full hover:translate-x-full transition-transform duration-700" />

                {loading ? (
                  <span className="flex items-center gap-2">
                    Enviando...
                    <motion.span
                      className="animate-spin"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                    >
                      <FaPaperPlane />
                    </motion.span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Enviar
                    <motion.span
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaPaperPlane />
                    </motion.span>
                  </span>
                )}
              </motion.button>

              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/ivan-andres-martinez-rios-7b9140266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <FaLinkedin className="text-xl" /> LinkedIn
                </a>
                <a
                  href="https://github.com/ivanxdd32"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub className="text-xl" /> GitHub
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
