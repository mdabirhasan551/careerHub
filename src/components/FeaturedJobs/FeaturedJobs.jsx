import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FeaturedJobs = ({ data }) => {
  console.log(data);
  return (
    <div>
      <p>{data.id}</p>
    </div>
  );
};

export default FeaturedJobs;
