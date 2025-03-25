import React from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "animate.css";

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