import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>This is job details page</h1>
    </div>
  );
};

export default JobDetails;
