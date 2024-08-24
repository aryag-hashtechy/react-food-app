import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from "./pages/MobileView/MyProfile";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/MobileView/SearchPage";
import AddressPage from "./pages/AddressPage";
import Address from "./pages/Address";
import Cart from "./pages/MobileView/Cart";
import DetailPage from "./pages/MobileView/DetailPage";
import SeeMore from "./pages/MobileView/SeeMore";
import ProtectedRoutes from "./lib/ProtectedRoutes";
import OrderPage from "./pages/MobileView/OrderPage";
import Wishlist from "./pages/MobileView/Wishlist";
import ManageleWishlist from "./lib/ManageWishlist";

const Routers = () => {
  return (
    <Routes>
      <Route element={ <ManageleWishlist /> }>
        {/* unprotected routes */}
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/detail-page/:id" element={<DetailPage />} />
        <Route path="/category/:cat" element={<SeeMore />} />

        {/* protected routes */}
        <Route element={<ProtectedRoutes redirectTo={"/auth/login"} />}>
          <Route path="/address-page" element={<AddressPage />} />
          <Route path="/address" element={<Address />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Route>

    </Routes>
  );
};

export default Routers;
