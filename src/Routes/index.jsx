import React from "react";
import { createBrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import AuthLayout from "../Common/AuthLayout";
import CheckEmailPhone from "../Components/CheckEmailPhone";
import CheckPassword from "../Components/CheckPassword";
import Dashboard from "../Components/Dashboard";
import Courses from "../Components/Courses";
import Instructor from "../Components/Instructor";
import Assign from "../Components/Assign";
import HomePage from "../Components/HomePage";

// Wrapper component to protect routes
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const adminLoggedIn = localStorage.getItem("Admin");

  return adminLoggedIn ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/Email" replace state={{ from: rest.path }} />
  );
};

const router = createBrowserRouter(
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="Email" element={<CheckEmailPhone />} />
      <Route path="Password" element={<CheckPassword />} />
      <Route element={<AuthLayout />}>
        <Route path="/" element={<HomePage />} />
        <ProtectedRoute path="Dashboard" element={<Dashboard />} />
        <ProtectedRoute path="Courses" element={<Courses />} />
        <ProtectedRoute path="Instructor" element={<Instructor />} />
        <ProtectedRoute path="Assign" element={<Assign />} />
      </Route>
    </Route>
  </Routes>
);

export default router;
