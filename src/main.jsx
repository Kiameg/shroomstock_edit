import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./components/Index.jsx";
import Program from "./components/Program.jsx";
import Booking from "./components/Booking.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./css/style.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/program",
    element: <Program />,
  },
  {
    path: "/booking",    
    element: <Booking />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);
