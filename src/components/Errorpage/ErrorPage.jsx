import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import "./ErrorPage.css"; 

const ErrorPage = () => {
  return (
    <Row className="justify-content-center align-items-center full-height">
      <Col xs="auto">
        <div className="centered-content">
          <Image
            src="../../../assets/images/error.gif"
            alt="Error"
            className="img-fluid"
          />
          <p className="error-text">Page Not Found</p>
        </div>
      </Col>
    </Row>
  );
};

export default ErrorPage;
