// 1. React y hooks
import { useEffect, useRef, useState } from "react";

// 2. Librerías externas
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// 3. Estilos globales
import "../App.css";

// 4. Componentes del proyecto
import Meta from "../Components/Meta";
import SkillCard from "../Components/SkillCard";

// 5. Iconos
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaChevronDown,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiVite,
  SiFramer,
  SiGreensock,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Inicio() {
  const sectionRef = useRef(null);
  const nextSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // SECCIÓN 1
      gsap.to(sectionRef.current, {
        opacity: 0.5,
        scale: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 49%",
          scrub: 0.5,
          snap: {
            snapTo: "labels",
            duration: 0.8,
            ease: "power1.inOut",
          },
        },
      });

      // SECCIÓN 2
      gsap.fromTo(
        nextSectionRef.current,
        { y: "0vh" },
        {
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: nextSectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 0.3,
            snap: 1,
          },
        }
      );

      // SECCIÓN 3
      gsap.fromTo(
        thirdSectionRef.current,
        { y: 100, scale: 0.7, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: thirdSectionRef.current,
            start: "-42% bottom",
            end: "-42% top",
            scrub: true,
            snap: true,
            // markers: true,
          },
        }
      );
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Retrasa la aparición de la flecha 0.5s
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Meta
        title={t("meta.inicio.title")}
        description={t("meta.inicio.description")}
      />
      <div>
        <section
          ref={sectionRef}
          className="min-h-screen flex flex-col lg:flex-row items-center justify-center text-white bg-gray-900 lg:bg-gray-300 px-6 py-32"
        >
          {/* Contenedor de texto alineado a la izquierda */}
          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center lg:shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Columna izquierda - Texto */}
            <div className="lg:p-10 text-center lg:text-left space-y-4 lg:space-y-6 w-full h-full flex flex-col justify-center lg:relative lg:bg-white lg:text-gray-800 rounded-l-lg">
              <motion.h1
                className="text-xl font-bold sm:text-3xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {t("home.greeting")}{" "}
                <span className="text-blue-400 lg:text-blue-600">
                  Ivan Martinez!
                </span>
              </motion.h1>

              <motion.p
                className="mt-4 text-md text-white sm:text-xl lg:text-gray-800 lg:pl-1"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {t("home.description")}
              </motion.p>

              {/* Fondo negro en la esquina inferior derecha */}
              <div
                className="absolute bottom-0 right-0 w-32 h-16 lg:bg-[#003140] lg:w-48 lg:h-20"
                style={{
                  clipPath: "polygon(0% 100%, 105% 48%, 100% 105%, 0% 105%)",
                }}
              ></div>
            </div>

            {/* Columna derecha - GIF */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="Coding Gif"
                className="w-72 rounded-lg lg:rounded-none lg:rounded-r-lg lg:w-full lg:h-full"
              />
            </motion.div>
          </motion.div>

          {/* 🔽 Flecha animada indicando que hay más contenido */}
          {showArrow && (
            <div className="absolute bottom-10 flex flex-col items-center">
              <motion.div
                className="flex flex-col items-center text-blue-600"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                onClick={() =>
                  nextSectionRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <FaChevronDown className="text-3xl" />
              </motion.div>
            </div>
          )}
        </section>

        <section
          ref={nextSectionRef}
          className="min-h-screen py-24 pt-28 md:pt-24 px-6 md:px-12 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
        >
          <motion.h2
            className="text-4xl font-extrabold text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("home.techTitle")}
          </motion.h2>

          <div className="grid gap-6 md:gap-8 lg:gap-10 lg:grid-cols-3 max-w-6xl mx-auto h-[calc(100%-7rem)] items-center">
            {/* Lenguajes */}
            <SectionCard title={t("home.languages")} color="text-yellow-400">
              <div className="grid grid-cols-2 place-items-center gap-4">
                <SkillCard
                  icon={<SiJavascript />}
                  label="JavaScript"
                  color="text-yellow-400"
                  url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                />
                <SkillCard
                  icon={<SiMysql />}
                  label="MySQL"
                  color="text-blue-500"
                  url="https://dev.mysql.com/doc/"
                />
                <SkillCard
                  icon={<SiHtml5 />}
                  label="HTML"
                  color="text-red-500"
                  url="https://developer.mozilla.org/en-US/docs/Web/HTML"
                />
                <SkillCard
                  icon={<SiCss3 />}
                  label="CSS"
                  color="text-blue-400"
                  url="https://developer.mozilla.org/en-US/docs/Web/CSS"
                />
              </div>
            </SectionCard>

            {/* Frameworks */}
            <SectionCard title={t("home.frameworks")} color="text-blue-400">
              <div className="grid grid-cols-3 place-items-center gap-3 scale-90">
                <SkillCard
                  icon={<FaReact />}
                  label="React"
                  color="text-blue-400"
                  url="https://react.dev/"
                />
                <SkillCard
                  icon={<SiVite />}
                  label="Vite"
                  color="text-purple-400"
                  url="https://vitejs.dev/"
                />
                <SkillCard
                  icon={<SiTailwindcss />}
                  label="TailwindCSS"
                  color="text-teal-400"
                  url="https://tailwindcss.com/docs"
                />
                <SkillCard
                  icon={<SiFramer />}
                  label="Framer M."
                  color="text-pink-400"
                  url="https://www.framer.com/motion/"
                />
                <SkillCard
                  icon={<SiGreensock />}
                  label="GSAP"
                  color="text-green-500"
                  url="https://greensock.com/gsap/"
                />
                <SkillCard
                  icon={<FaNodeJs />}
                  label="Node.js"
                  color="text-green-500"
                  url="https://nodejs.org/en/docs/"
                />
                <div className="col-span-3 flex justify-center">
                  <SkillCard
                    icon={<SiExpress />}
                    label="Express.js"
                    color="text-gray-300"
                    url="https://expressjs.com/"
                  />
                </div>
              </div>
            </SectionCard>

            {/* Herramientas */}
            <SectionCard title={t("home.tools")} color="text-green-400">
              <div className="grid grid-cols-2 place-items-center gap-4">
                <div className="col-span-3 flex justify-center gap-4">
                  <SkillCard
                    icon={<FaGitAlt />}
                    label="Git"
                    color="text-red-500"
                    url="https://git-scm.com/doc"
                    className="p-2 px-4"
                  />
                  <SkillCard
                    icon={<FaGithub />}
                    label="GitHub"
                    color="text-gray-400"
                    url="https://docs.github.com/en"
                    className="p-2 px-4"
                  />
                </div>
                <div className="col-span-3 flex justify-center">
                  <SkillCard
                    icon={<SiPostman />}
                    label="Postman"
                    color="text-orange-500"
                    url="https://learning.postman.com/docs/getting-started/introduction/"
                  />
                </div>
              </div>
            </SectionCard>
          </div>
        </section>

        <section
          ref={thirdSectionRef}
          className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#0A0B0A] text-white px-10 pt-28 md:pt-0"
        >
          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Texto - Sobre mí */}
            <div className="space-y-6 text-center lg:text-left">
              <motion.h2
                className="text-4xl font-bold text-blue-400 hover:text-blue-300 transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t("home.aboutMeTitle")}
              </motion.h2>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed transition-all duration-300 hover:text-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("home.aboutMe")}
              </motion.p>

              <motion.p
                className="text-sm text-gray-400 italic border-l-4 border-gray-600 pl-4 mt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                ☕ {t("home.aboutMeNote")}
              </motion.p>
            </div>

            {/* GIF animada */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <img
                src="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif"
                alt="About me"
                className="w-72 lg:w-full max-w-sm rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_30px_#2B266A]"
              />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

// Componente de Sección
const SectionCard = ({ title, children, color }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-8 w-full max-w-4xl"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h3 className={`text-2xl font-semibold mb-4 ${color}`}>{title}</h3>
    <div className="flex flex-wrap justify-center gap-8">{children}</div>
  </motion.div>
);
