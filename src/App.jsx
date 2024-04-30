import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import JobCategory from "./components/JobCategory/JobCategory";

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <JobCategory />
      <Outlet />
    </div>
  );
};

export default App;
