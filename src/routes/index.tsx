// installed modules import
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages import
import HomePage from "../pages";
import Blog from "../pages/portfolio";
import Contact from "../pages/contact";
import About from "../pages/about";
import Register from "../forms/register";
import Login from "../forms/login";

import Dashboard from "../dashboard/index";
import Profile from "../dashboard/profile";
import Booking from "../dashboard/bookings";

import ResetAuth from "../forms/reset";

const Routes = (): JSX.Element => {
  type routeProps = Array<{
    path: string;
    element: JSX.Element;
  }>;

  const pageRoutes: routeProps = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/reset",
      element: <ResetAuth />,
    },
  ];

  const DashboardRoutes = [
    {
      path: "/dashboard",
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "bookings",
          element: <Booking />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...pageRoutes, ...DashboardRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
