import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
};

export default Routers;
