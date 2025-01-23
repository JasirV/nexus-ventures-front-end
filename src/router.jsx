import { createBrowserRouter } from "react-router";
import Home from "./pages/clinet/home";
import RootLayout from "./layout/rootLayout";
import Login from "./pages/clinet/login";
import PaymentGateway from "./pages/clinet/paymentGateway";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
    {
      path: "/payment",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <PaymentGateway />,
        },
      ],
    },
])