import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahan Abedini </span>
            from <span className="purple"> Tehran . Iran .</span>
            <br />I am a junior front-end developer i guess not too junior tho :) 
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> going to muayThai gym 
            </li>
            <li className="about-activity">
              <ImPointRight /> watching Netflix 
            </li>
            <li className="about-activity">
              <ImPointRight /> study and trying to improve my self every goddamn day !
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">mahan abedini </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
