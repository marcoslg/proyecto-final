import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import routes from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = Router(routes);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
