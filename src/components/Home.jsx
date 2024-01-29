import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap"; // Import Bootstrap components
import image from "../assets/IMG_0691.jpg";

function Home() {
  return (
    <Container id="homePage">
      {" "}
      {/* Use a Bootstrap Container */}
      <Row>
        <Col xs={12} md={6}>
          {" "}
          {/* Use Bootstrap Grid System to control columns */}
          <Image
            id="myPicture"
            src={image}
            alt="Picture with me"
            fluid // Use "fluid" for responsive images
            style={{ maxWidth: "500px", maxHeight: "300px" }} // Example max sizes
          />
        </Col>
        <Col xs={12} md={6}>
          <h1>Zarzu Miriam Cristina</h1>
          <h2>Passionate Tech Enthusiast Ready for IT Adventures!</h2>
          <p>
            I'm a Junior Developer with a knack for Manual Software Testing and
            an appetite for learning. I've recently completed an apprenticeship
            in Software Testing and I'm currently immersed in an apprenticeship
            to master the art of front-end web development tools.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
