import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useLoaderData } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import JobCategory from "./components/JobCategory/JobCategory";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  const data = useLoaderData();
  return (
    <div>
      <Navigation />
      <Header />
      <JobCategory />
      <div>
        <div className="d-flex justify-content-center">
          <h1>Featured Jobs</h1>
        </div>
        <p className="d-flex justify-content-center" style={{ opacity: "0.5" }}>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {data.map((data) => (
          <FeaturedJobs key={data.id} data={data} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default App;
