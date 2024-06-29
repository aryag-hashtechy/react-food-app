import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from "./pages/MobileView/MyProfile";
import SplashScreen from "./pages/auth/SplashScreen";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/MobileView/SearchPage";
import AddressPage from "./pages/AddressPage";
import Address from "./pages/Address";
import Cart from "./pages/mobileView/Cart";
import DetailPage from "./pages/mobileView/DetailPage";

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
        <Route path="/address-page/:id" element={<AddressPage />} />
        <Route path="/address" element={<Address />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail-page" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default Routers;
