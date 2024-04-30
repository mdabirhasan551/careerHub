import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/",
    element: <Navigation />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
