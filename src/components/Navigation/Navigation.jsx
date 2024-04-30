import React from "react";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-light">
        <Container>
          <Col xs={{ order: "first" }}>
            <h1>
              <Link to="/" className="nav-link">
                CareerHub
              </Link>
            </h1>
          </Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Col xs={{ order: "first" }}>
              <Nav className="me-auto">
                <Link to="/statistics" className="nav-link">
                  Statistics
                </Link>
                <Link to="/appliedjobs" className="nav-link">
                  Applied Jobs
                </Link>
                <Link to="/blogs" className="nav-link">
                  Blogs
                </Link>
              </Nav>
            </Col>
            <Col xs={{ order: "Last" }}>
              <Button
                style={{ backgroundColor: "#9873FF", border: "1px solid"}}
              >
                Start Applying
              </Button>
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Navigation;
