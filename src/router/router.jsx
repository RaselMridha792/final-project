import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Homepage from "../pages/homepage/Homepage";
import Errorpage from "../pages/Errorpage";
import Menu from "../pages/menu/Menu";

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
      }
    ],
  },
]);
