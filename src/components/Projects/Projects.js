// Projects.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carResale from "../../Assets/Projects/carResale.png";
import sudoku from "../../Assets/Projects/sudoku.png";
import webcraper from "../../Assets/Projects/webscraper.png";
import HotelOnTap from "../../Assets/Projects/hotelOnTap.png";
import bankProduct from "../../Assets/Projects/bankProduct.png";
import mazeVr from "../../Assets/Projects/MazeVR.png";


const projectsData = [
  {
    imgPath: HotelOnTap,
    title: "HotelOnTap",
    description: "Android Application Created using Java and AirBnb public api to provide a seamless exprience of booking cheapest hotels for specific location",
    ghLink: "https://github.com/soumyajit4419/Chatify",
  },
  {
    imgPath: mazeVr,
    title: "Maze VR",
    description: "Virtual Reality capstone project developed using Unity 3d, Maya, C#. User has to walkthrough maze and find the hidden keys to clear the level.",
    ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de"
  },
  {
    imgPath: webcraper,
    title: "Web Scraper",
    description: "Website scraper build using python, beautiful soap. which can further exported to html to take a look at specified data. Consists of 2 module files imported to extract useful data",
    ghLink: "https://github.com/soumyajit4419/Editor.io",
  },
  {
    imgPath: carResale,
    title: "Car Resale Predictor",
    description: "Worked on information of several thousands cars’ resale value that were obtained from UK’s craiglist. Implemented several linear regression techniques to predict the resale value of those car.",
    ghLink: "https://github.com/soumyajit4419/Plant_AI",
  },
  {
    imgPath: bankProduct,
    title:"Predicting bank Product subscription",
    description: "Worked on bank marketing dataset containing information of several thousands of direct phone marketing, performed by a banking institution in Portugal to offer their new bank term deposit product. The original data has more than 45000 with 20 features.",
    ghLink: "https://github.com/soumyajit4419/AI_For_Social_Good"
  },
  {
    imgPath: sudoku,
    title: "Sudoku Generator",
    description: "Implemented random sudoku solver using JAVA gui functions. User has the option to Generate random sudoku game every time. User also has an option to solve game in one click",
    ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection"
  }
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
