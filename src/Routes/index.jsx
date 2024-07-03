import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

  console.log("Admin logged in:", adminLoggedIn);

  return adminLoggedIn ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/Email" replace state={{ from: rest.path }} />
  );
};

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Email" element={<CheckEmailPhone />} />
        <Route path="Password" element={<CheckPassword />} />
        <Route element={<AuthLayout />}>
          <Route index element={<HomePage />} />
          <ProtectedRoute path="Dashboard" element={<Dashboard />} />
          <ProtectedRoute path="Courses" element={<Courses />} />
          <ProtectedRoute path="Instructor" element={<Instructor />} />
          <ProtectedRoute path="Assign" element={<Assign />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
