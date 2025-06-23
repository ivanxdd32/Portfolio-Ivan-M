// 1. React y hooks
import { useRef, useState } from "react";

// 2. Librerías externas
import { motion } from "framer-motion";
import gsap from "gsap";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// 3. Componentes del proyecto
import Meta from "../Components/Meta";

export default function Contacto() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const { t } = useTranslation();
  gsap.registerPlugin(Physics2DPlugin);

  //Guarda el valor anterior del scroll para la animacion de confetti (evita desbordamiento por spam(improbable))
  const prevOverflow = document.body.style.overflow;

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
          text: t("contact.success"),
        });
        formRef.current.reset();

        document.body.style.overflow = "hidden";

        //Lanzar Confetti
        const rect = e.target.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        launchConfetti(x, y);

        setTimeout(() => {
          document.body.style.overflow = prevOverflow;
        }, 3000);
      } else {
        setMessageStatus({
          type: "error",
          text: t("contact.error"),
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessageStatus({
        type: "error",
        text: t("contact.serverError"),
      });
    } finally {
      setLoading(false);
      setTimeout(() => setMessageStatus(null), 4000);
    }
  };

  //Confetti
  const launchConfetti = (x, y) => {
    const dotCount = gsap.utils.random(300, 30, 1);
    const colors = ["#0ae448", "#abff84", "#fffce1"];

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.classList.add("confetti-dot");

      document.body.appendChild(dot);

      gsap.set(dot, {
        backgroundColor: gsap.utils.random(colors),
        top: y,
        left: x,
        position: "absolute",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        scale: 0,
      });

      gsap
        .timeline({
          onComplete: () => dot.remove(),
        })
        .to(dot, {
          scale: gsap.utils.random(0.5, 1),
          duration: 0.3,
          ease: "power3.out",
        })
        .to(
          dot,
          {
            duration: 2,
            physics2D: {
              velocity: gsap.utils.random(300, 800),
              angle: gsap.utils.random(0, 360),
              gravity: 1200,
            },
            autoAlpha: 0,
            ease: "none",
          },
          "<"
        );
    }
  };

  return (
    <>
      <Meta
        title={t("meta.contacto.title")}
        description={t("meta.contacto.description")}
      />
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12">
          {/* Izquierda: texto + icono */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-center text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-3xl font-bold flex items-center gap-2 pt-10 mt-6 lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FaPaperPlane className="text-blue-400 text-3xl" />
              {t("contact.title")}
            </motion.h2>
            <p className="text-gray-400 mb-4 mt-4 max-w-md">
              {t("contact.description")}
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
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-blue-900/50"
            >
              <div className="mb-4">
                <label className="block text-left text-gray-300 font-bold pb-2">
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder={t("contact.placeholderName")}
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left text-gray-300 font-bold pb-2">
                  {t("contact.emailLabel")}
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder={t("contact.placeholderEmail")}
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left text-gray-300 font-bold pb-2">
                  {t("contact.messageLabel")}
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder={t("contact.placeholderMessage")}
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
                    {t("contact.sending")}
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
                    {t("contact.send")}
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
                  <FaLinkedin className="text-xl" /> {t("contact.linkedin")}
                </a>
                <a
                  href="https://github.com/ivanxdd32"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub className="text-xl" /> {t("contact.github")}
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
