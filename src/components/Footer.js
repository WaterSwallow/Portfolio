import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import {
  FaLinkedinIn, 
  FaTelegramPlane,
  FaSkype
} from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Roman Korduban</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/roman-korduban-3646b4304/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/PachecoCole"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://join.skype.com/invite/oJkdh7g1sWzr"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaSkype />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/water_swallow"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaTelegramPlane />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
