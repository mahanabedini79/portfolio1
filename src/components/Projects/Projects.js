import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/python.jpg";
import chatify from "../../Assets/Projects/computer.jpg";
import bitsOfCode from "../../Assets/Projects/certificate.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the certifications 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Harvard course of computer scinces"
              description="I earn my certificate from harvard university in computer scince . 
               this course was presented by David j malan."
              ghLink="https://certificates.cs50.io/c5fed74a-a6cc-4aba-bd22-aa5f2025c24a.pdf?size=letter"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Digital marketing certificate from Google  (score : 100%)"
              description="i earn digital marketing certificate from google in sep 2022 with no expiretion date . you can check my licence validity by entering this id to verify page (ID : A7P BYE S3E) "
              ghLink="https://pdfhost.io/v/y2LrTp563_Digital_Garage_Certificate"
              demoLink="https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Harvard course of Python  (score : 100%)"
              description="it was a wonderfull exprience for remembering good old basics and learn some new ones i earned this certificate in sep 2022 with no expiretion date and  this course was presented by David j malan"
              ghLink="https://cs50.harvard.edu/certificates/c5fed74a-a6cc-4aba-bd22-aa5f2025c24a"
                      
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
