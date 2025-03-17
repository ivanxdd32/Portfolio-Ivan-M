import { useGSAP } from '@gsap/react';
import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const boxRef = useRef(null); // Referencia al div que se va a animar

  useGSAP(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 40%",
        end: "top 20%",
        scrub: true,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });
  });

  return (
    <div>
      <h1 className="text-gray-500 dark:text-gray-400">Hello world!</h1>
      <div className="h-screen"></div> {/* Espaciador para hacer scroll */}
      <div ref={boxRef} className="box w-32 h-32 bg-blue-500 opacity-0 transform translate-y-20"></div>
      <div className="h-screen"></div> {/* Más espacio para scroll */}
    </div>
  );
}

export default App;
