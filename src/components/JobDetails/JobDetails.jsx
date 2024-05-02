// import React from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';

// const JobDetails = () => {
//   const jobs = useLoaderData();
//   const job = useParams();
//   console.log(job)
//   console.log(jobs)
//   return (
//     <div>

//     </div>
//   );
// };

// export default JobDetails;

import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { jobId } = useParams();

  // Find the job with the matching jobId
  const job = jobs.find((job) => job.id === parseInt(jobId));
  console.log(job);

  return (
    <div>
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "rgba(152, 115, 255, 0.2)" }}
      >
        <h1 className="mt-5 pt-5 mb-5 pb-5">Job Details</h1>
      </div>

      <div>
        <Container>
          <Row className="m-5">
            <Col>
              <p>
                <b>Job Description: </b>
                {job.job_description}
              </p>
              <p>
                <b>Job Responsibility: </b>
                {job.job_responsibility}
              </p>
              <p>
                <b>Educational Requirement: </b>
                <br />
                <br />
                {job.educational_requirements}
              </p>
              <p>
                <b>Expeience: </b>
                <br />
                <br />
                {job.experiences}
              </p>
            </Col>
            <Col>
              <div
                className="ms-5 p-3"
                style={{
                  backgroundColor: "rgba(152, 115, 255, 0.2)",
                  borderRadius: "5px",
                }}
              >
                <p>
                  <b>Job Details</b>
                </p>
                <hr />
                <div className="d-flex align-items-center">
                  <Image src="../../../assets/icons/money.png" />
                  <p className="ps-2 mt-3">
                    <b>Salary:</b>{" "}
                    <span style={{ opacity: "0.8" }}>
                      {job.salary} (Per Month)
                    </span>
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <Image src="../../../assets/icons/calendar.png" />
                  <p className="ps-2 mt-3">
                    <b>Job Title</b>e: {job.job_title}
                  </p>
                </div>
                <div>
                  <p className="mt-3">
                    <b>Contact Information</b>
                  </p>
                  <hr />
                  <div className="d-flex align-items-center">
                    <Image src="../../../assets/icons/phone.png" />
                    <p className="ps-2 mt-3">
                      <b>Phone:</b> {job.contact_information.phone}
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <Image src="../../../assets/icons/email.png" />
                    <p className="ps-2 mt-3">
                      <b>Email:</b> {job.contact_information.email}
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <Image src="../../../assets/icons/location2.png" />
                    <p className="ps-2 mt-3">
                      <b>Address:</b> {job.contact_information.address}
                    </p>
                  </div>
                </div>
              </div>
              <Button
                className="ms-5 p-3 mt-3"
                style={{ backgroundColor: "#9873FF", border: "1px solid" }}
              >
                ApplyNow
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default JobDetails;
