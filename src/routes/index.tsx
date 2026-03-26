// installed modules import
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages import

import Register from "../forms/register";
import Login from "../forms/login";

import Dashboard from "../dashboard/index";
import Bookings from "../dashboard/bookings";
import Profile from "../dashboard/profile";
import Booking from "../dashboard/bookings";
import Users from "../dashboard/users";

import ResetAuth from "../forms/reset";
import Items from "../dashboard/items";
import Areas from "../dashboard/areas";
import Admins from "../dashboard/admin";

const Routes = (): JSX.Element => {
  type routeProps = Array<{
    path: string;
    element: JSX.Element;
  }>;

  const pageRoutes: routeProps = [
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
      path: "/",
      element: <Dashboard />,
    },
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
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "items",
          element: <Items />,
        },
        {
          path: "areas",
          element: <Areas />,
        },
        {
          path: "admins",
          element: <Admins />,
        },
        {
          path: "users",
          element: <Users />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...pageRoutes, ...DashboardRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
