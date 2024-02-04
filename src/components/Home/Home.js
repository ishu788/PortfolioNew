import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/blue.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Ishwinder Singh</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <img
  src={homeLogo}
  alt="home pic"
  className="img-fluid"
  style={{
    maxHeight: "350px",
    marginLeft: "70px", // Adjust the value to move it to the right
    // borderRadius: "10px", // Adjust the value to control the border radius
    // boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)", // Add a box shadow for depth
  }}
/>


            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
