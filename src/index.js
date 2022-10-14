import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './routes/Login';
import Panel from './routes/Panel';
import EditarPerfil from './routes/EditarPerfil';
import TiendaPublica from './routes/TiendaPublica';
import NombrarTienda from './routes/NombrarTienda';
import CerrarSesion from './routes/CerrarSesion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="iniciar" element={<Login/>} />
        <Route path="panel" element={<Panel/>} />
        <Route path="panel/perfil" element={<EditarPerfil/>} />
        <Route path="tienda/:tienda" element={<TiendaPublica/>} />
        <Route path="nombra-tu-tienda" element={<NombrarTienda/>} />
        <Route path="cerrar-sesion" element={<CerrarSesion/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
