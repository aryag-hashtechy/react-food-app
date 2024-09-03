import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { parseCookies } from "nookies";

const ProtectedRoutes = ({ redirectTo }) => {
  const cookies = parseCookies();
  const token = cookies.accessToken;

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoutes;
