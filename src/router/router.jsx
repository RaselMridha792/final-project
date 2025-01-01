import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Homepage from "../pages/homepage/Homepage";
import Errorpage from "../pages/Errorpage";
import Menu from "../pages/menu/Menu";
import OurShop from "../pages/our shop/OurShop";
import SignUp from "../pages/Authentication/SignUp";
import Login from "../pages/Authentication/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/our-shop',
        element:<OurShop></OurShop>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ],
  },
]);
