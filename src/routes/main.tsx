import { Navigate, useRoutes } from "react-router-dom";

import Error404Page from "../pages/error/404";

import MainPage from "../pages/main";

import AboutMe from "../pages/about-me/main";
import Credit from "../pages/credit/main";

const Routes = () => {
  return useRoutes([
    { index: true, element: <Navigate to="main" replace /> },
    {
      path: "main",
      element: <MainPage />,
      children: [
        {
          path: "about_me",
          element: <AboutMe />,
        },
        {
          path: "credit",
          element: <Credit />,
        },
        {
          path: "*",
          element: <Navigate to="about_me" />,
        },
        {
          index: true,
          element: <Navigate to="about_me" />,
        },
      ],
    },
    { path: "*", element: <Error404Page /> },
  ]);
};

export default Routes;
