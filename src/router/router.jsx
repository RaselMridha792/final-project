import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Homepage from "../pages/homepage/Homepage";
import Errorpage from "../pages/Errorpage";

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
    ],
  },
]);
