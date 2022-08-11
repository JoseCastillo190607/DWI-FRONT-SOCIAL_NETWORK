import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './config/localization/i18n';

// Context
import { GlobalProvider } from "./context/global-context";

// Componentes:
import App from "./App";
import Posts from "./components/Posts/Posts";
import Login from "./components/Login/Login";
import Register from "./components/register/register";
import Navbar from "./components/Navbar/navbar"
import ChangePassword from "./components/ChangePassword/ChangePassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <header className="App-header">
      <GlobalProvider>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/cambiarPass" element={<ChangePassword />} />
            <Route path="/notfound" element={<App />} />
            <Route path="*" element={<Navigate replace to="/notfound" />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
      </GlobalProvider>
    </header>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
