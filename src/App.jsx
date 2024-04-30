import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import JobCategory from "./components/JobCategory/JobCategory";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <JobCategory />
      <FeaturedJobs />
      <Outlet />
    </div>
  );
};

export default App;
