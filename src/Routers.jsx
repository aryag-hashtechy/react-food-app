import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from "./pages/MobileView/MyProfile";
import SplashScreen from "./pages/auth/SplashScreen";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/MobileView/SearchPage";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/splashscreen" element={<SplashScreen />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/search-page" element={<SearchPage />} /> 
      </Routes>
    </>
  );
};

export default Routers;
