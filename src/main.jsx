import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import ErrorPage from "./components/Errorpage/ErrorPage.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("../public/jobs.json"),
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
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
      {
        path: "/jobdetails/:jobdetailsId",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`../public/jobs.jscon/${params.jobdetailsId}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
