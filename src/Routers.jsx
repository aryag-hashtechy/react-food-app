import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SplashScreen from "./pages/auth/SplashScreen";
import Login from "./pages/auth/Login";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/splashscreen" element={<SplashScreen />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routers;
