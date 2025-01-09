import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Mainpage from "./pages/Mainpage.jsx";
import { router } from "./router/router.jsx";
import AuthContext from "./context/authContext.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <Mainpage></Mainpage>
        </RouterProvider>
      </QueryClientProvider>
    </AuthContext>
  </StrictMode>
);
