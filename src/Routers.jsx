import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SplashScreen from "./pages/auth/SplashScreen";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./component/MobileView/MyProfile";


const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/splashscreen" element={<SplashScreen />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-profile" element={<MyProfile/>} />
      </Routes>
    </>
  );
};

export default Routers;
