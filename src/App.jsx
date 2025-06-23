// 1. React
import React from "react";

// 2. Librerías externas
import { BrowserRouter as Router } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// 3. Estilos globales
import "./App.css";
import "animate.css";

// 4. Componentes del proyecto
import Header from "./Components/Header";
import AppRouter from "./Router/AppRouter";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function App() {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
}

export default App;
