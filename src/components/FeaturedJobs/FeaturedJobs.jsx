import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const FeaturedJobs = ({ data }) => {
  return (
    <div>
      
      <Card style={{ width: "30rem", height: "35rem" }}>
        <Card.Img
          className="p-5"
          style={{ height: "300px", width: "400px" }}
          variant="top"
          src={data.logo}
        />
        <Card.Body>
          <Card.Title>{data.job_title}</Card.Title>
          <Card.Text style={{ opacity: "0.7" }}>{data.company_name}</Card.Text>
          <div className="d-flex gap-5 mb-5">
            <Button variant="outline-primary" disabled>
              {data.remote_or_onsite}
            </Button>
            <Button variant="outline-primary" disabled>
              {data.job_type}
            </Button>
          </div>
          <Link to={`/jobdetails/${data.id}`}>
            <Button
              style={{ backgroundColor: "#9873FF", border: "1px solid" }}
            >
              View Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeaturedJobs;
