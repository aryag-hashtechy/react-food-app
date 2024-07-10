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
import Cart from "./pages/MobileView/Cart";
// import FoodPage from "./pages/MobileView/FoodPage";
import DetailPage from "./pages/MobileView/DetailPage";
import SeeMore from "./pages/MobileView/SeeMore";
import ProtectedRoutes from "./lib/ProtectedRoutes";

const Routers = () => {
  return (
    <>
      <Routes>
        
        {/* unprotected routes */}
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail-page/:id" element={<DetailPage />} />
        <Route path="/category/:cat" element={<SeeMore />} />

        {/* protected routes */}
        <Route element = {<ProtectedRoutes redirectTo= {"/auth/login"} />} >
          <Route path="/address-page" element={<AddressPage />} />
          <Route path="/address" element={<Address />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
