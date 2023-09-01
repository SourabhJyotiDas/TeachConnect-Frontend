import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ isAuthenticated, isAdmin, children }) {
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  if (!isAdmin) {
    return <Navigate to={"/profile"} />;
  }
  return <Outlet />;
}
