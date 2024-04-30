import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>
              One Step Closer To Your{" "}
              <span style={{ color: "#9873FF" }}>Dream Job</span>
            </h1>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <Button style={{ backgroundColor: "#9873FF" }}>Get Started</Button>
          </Col>

          <Col>
            <Image src="../../../assets/images/user.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
