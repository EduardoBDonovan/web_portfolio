import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "../styles/Pipnav.css";

const Pipnav = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg">
      <Row className="row">
        <Col className={activeLink === "#experience" ? "col active" : "col"}>
          <Nav.Link
            href="#experience"
            onClick={() => handleSetActive("#experience")}
            className={activeLink === "#experience" ? "active" : ""}
          >
            Experience
          </Nav.Link>
        </Col>
        <Col className={activeLink === "#education" ? "col active" : "col"}>
          <Nav.Link
            href="#education"
            onClick={() => handleSetActive("#education")}
            className={activeLink === "#education" ? "active" : ""}
          >
            Education
          </Nav.Link>
        </Col>
        <Col className={activeLink === "#projects" ? "col active" : "col"}>
          <Nav.Link
            href="#projects"
            onClick={() => handleSetActive("#projects")}
            className={activeLink === "#projects" ? "active" : ""}
          >
            Projects
          </Nav.Link>
        </Col>
      </Row>
    </Navbar>
  );
};

export default Pipnav;
