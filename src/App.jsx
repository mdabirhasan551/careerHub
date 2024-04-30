import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useLoaderData } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import JobCategory from "./components/JobCategory/JobCategory";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import "./App.css";
import { Button } from "react-bootstrap";

const App = () => {
  const data = useLoaderData();
  const [visibleJobs, setVisibleJobs] = useState(2); // State to manage visible jobs
  const [showMore, setShowMore] = useState(true); // State to track if "See More" or "See Less" is shown

  // Function to handle "See More" or "See Less" button click
  const toggleVisibility = () => {
    if (showMore) {
      setVisibleJobs(data.length); // Show all jobs when "See More" is clicked
    } else {
      setVisibleJobs(2); // Show only two jobs when "See Less" is clicked
    }
    setShowMore(!showMore); // Toggle the state between "See More" and "See Less"
  };

  return (
    <div>
      <Navigation />
      <Header />
      <JobCategory />
      <div>
        <div className="d-flex justify-content-center mt-5">
          <h1>Featured Jobs</h1>
        </div>
        <p className="d-flex justify-content-center" style={{ opacity: "0.5" }}>
          Explore thousands of job opportunities with all the information you
          need. It's your future.
        </p>
      </div>
      <div className="grid-container mb-5">
        <div className="fetchedData">
          {data.slice(0, visibleJobs).map((data) => (
            <FeaturedJobs key={data.id} data={data} />
          ))}
        </div>
      </div>
      {data.length > 2 && ( // Only show the button if there are more than 2 items
        <div className="d-flex justify-content-center mb-5">
          <Button
            style={{ backgroundColor: "#9873FF", border: "1px solid" }}
            onClick={toggleVisibility}
          >
            {showMore ? "See More" : "See Less"}
          </Button>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default App;
