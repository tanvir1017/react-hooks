import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import { Debug } from "./components/debug/Debug";
import { AxiosData } from "./components/useAxios/AxiosData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/debug",
    element: <Debug />,
  },
  {
    path: "contacts/:contactID",
    element: <Contact />,
  },
  {
    path: "data",
    element: <AxiosData />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
