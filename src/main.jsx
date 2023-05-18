import React from "react";
import ReactDOM from "react-dom/client";
import 'react-tooltip/dist/react-tooltip.css'
import "./index.css";
import {RouterProvider} from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={Routes} />
    </AuthContext>
  </React.StrictMode>
);
