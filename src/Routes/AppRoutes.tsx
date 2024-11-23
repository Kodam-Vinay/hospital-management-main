import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Body from "../components/Body";
import { ALL_NAVIGATION_LINKS } from "../utils/ReactConstants";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotExistPage from "../pages/NotExistPage";

const AppRoutes = () => {
  // Define routes for BrowserRouter
  const browserRoutes = createBrowserRouter([
    {
      path: ALL_NAVIGATION_LINKS.home.path,
      element: <Body />,
      errorElement: <NotExistPage />,
      children: [],
    },
  ]);

  const hashRoutes = createHashRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <NotExistPage />,
      children: [
        {
          path: ALL_NAVIGATION_LINKS.home.path,
          element: <Home />,
        },
        {
          path: ALL_NAVIGATION_LINKS.about.path,
          element: <About />,
        },
        {
          path: ALL_NAVIGATION_LINKS.contact.path,
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={hashRoutes} />
    </>
  );
};

export default AppRoutes;
