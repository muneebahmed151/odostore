import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, user }) => {
  return user ? children : <Navigate to="/signup" />;
};

export default PrivateRoute;
