import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const profile = useSelector((state) => state.profile);

  // ✅ Define completion condition
  const isProfileComplete =
    profile?.name &&
    profile?.age &&
    profile?.height &&
    profile?.weight &&
    profile?.goal;

  // 🚨 Redirect if not complete
  if (!isProfileComplete) {
    return <Navigate to="/settings" replace />;
  }

  return children;
};

export default ProtectedRoute;