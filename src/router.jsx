import { createBrowserRouter } from "react-router";
import Home from "./pages/clinet/home";
import RootLayout from "./layout/rootLayout";
import Login from "./pages/clinet/login";
import PaymentGateway from "./pages/clinet/paymentGateway";
import Singup from "./pages/clinet/singup";
import VideoPage from "./pages/clinet/videoPage";
import LoginLayout from "./layout/loginLaout";
import AdminDashborde from "./pages/admin/adminDashborde";
import UserDashbord from "./pages/user/userDashbord";

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
      path: "/singup",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Singup />,
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
      path: "/video",
      element: <LoginLayout />,
      children: [
        {
          index: true,
          element: <VideoPage />,
        },
      ],
    },
    {
      path: "/userdash",
      children: [
        {
          index: true,
          element: <AdminDashborde />,
        },
      ],
    },
    {
      path: "/admindash",
      children: [
        {
          index: true,
          element: <UserDashbord />,
        },
      ],
    },
])