// 1. React
import React, { useContext } from "react";

// 2. Librerías externas
import { Routes, Route } from "react-router-dom";

// 3. Contextos
import { TransitionProvider } from "../Context/TransitionContext";

// 4. Componentes del proyecto
import TransitionComponent from "../Components/TransitionComponent";

// 5. Vistas / páginas
import Inicio from "../Views/Inicio";
import Proyectos from "../Views/Proyectos";
import Contacto from "../Views/Contacto";

const AppRouter = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          index
          element={
            <TransitionComponent>
              <Inicio />
            </TransitionComponent>
          }
        />
        <Route
          path="/proyectos"
          element={
            <TransitionComponent>
              <Proyectos />
            </TransitionComponent>
          }
        />
        <Route
          path="/contacto"
          element={
            <TransitionComponent>
              <Contacto />
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  );
};

export default AppRouter;
