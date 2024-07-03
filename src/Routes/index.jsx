import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayout from "../Common/AuthLayout";
import CheckEmailPhone from "../Components/CheckEmailPhone";
import CheckPassword from "../Components/CheckPassword";
import Dashboard from "../Components/Dashboard";
import Courses from "../Components/Courses";
import Instructor from "../Components/Instructor";
import Assign from "../Components/Assign";
import HomePage from "../Components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Email",
        element: <CheckEmailPhone />,
      },
      {
        path: "Password",
        element: <CheckPassword />,
      },
      {
        path: "/",
        element: <AuthLayout><HomePage /></AuthLayout>,
        children: [
          {
            path: "/Dashboard",
            element: (
                <Dashboard />
            ),
          },
          {
            path: "/Courses",
            element: <Courses />,
          },
          {
            path: "/Instructor",
            element: <Instructor />,
          },
          {
            path: "/Assign",
            element: <Assign />,
          },
        ],
      },
    ],
  },
]);

export default router;
