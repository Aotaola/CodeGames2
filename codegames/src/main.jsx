import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Home";
import Footer from "./footer";
import NavBar from "./NavBar";
import ScoreCard from "./ScoreCard";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/game",
    element: <App />,
  },
  {
    path: "/scores",
    element: <ScoreCard />,
  },
  {
    path: "*",
    element: <div>404 NOT FOUND</div>,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

