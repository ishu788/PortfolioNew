
// Techstack.js

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiJava,
  DiSqllite,
} from "react-icons/di";
import {
  SiFirebase,
  SiGnubash,
  SiPowershell,
  SiUnity,
  SiAndroidstudio,
  SiTryhackme,
  SiSplunk,
  SiKalilinux
} from "react-icons/si";

// Import the CSS file to define styles

const iconsData = [
  { icon: <DiJava />, name: "Java" },
  { icon: <SiKalilinux />, name: "Kali Linux" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiGit />, name: "Git" },
  { icon: <DiSqllite />, name: "SQL" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiGnubash />, name: "Bash" },
  { icon: <SiPowershell />, name: "Powershell" },
  { icon: <SiUnity />, name: "Unity" },
  { icon: <SiAndroidstudio />, name: "Python" },
  { icon: <SiTryhackme />, name: "Tryhackme" },
  { icon: <SiSplunk />, name: "Splunk" },
  // Add more entries for other icons
];

function Techstack() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {iconsData.map((iconInfo, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          onMouseEnter={() => handleIconHover(iconInfo.name)}
          onMouseLeave={handleIconLeave}
        >
          {iconInfo.icon}
          {hoveredIcon === iconInfo.name && <span className="icon-name">{iconInfo.name}</span>}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

