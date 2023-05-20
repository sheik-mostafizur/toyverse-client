import React from "react";
import ReactDOM from "react-dom/client";
import 'react-tooltip/dist/react-tooltip.css'
import "@smastrom/react-rating/style.css";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={Routes} />
      <Toaster position="top-right" reverseOrder={false} />
    </AuthContext>
  </React.StrictMode>
);
