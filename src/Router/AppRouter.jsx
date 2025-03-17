import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { TransitionProvider } from '../Context/TransitionContext';
import TransitionComponent from '../Components/TransitionComponent';
import Inicio from '../views/Inicio';
import Proyectos from '../views/Proyectos';
import Contacto from '../views/Contacto';

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
