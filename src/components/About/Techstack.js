
// Techstack.js

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiJava,
  DiSqllite,
  DiVim
  
} from "react-icons/di";
import {
  SiFirebase,
  SiGnubash,
  SiPowershell,
  SiUnity,
  SiAndroidstudio,
  SiTryhackme,
  SiSplunk,
  SiKalilinux,
  SiGooglecloud
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
  { icon: <SiGooglecloud />, name: "Google Cloud" },
  { icon: <DiVim />, name: "Vim" },
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
          {/* {hoveredIcon === iconInfo.name && <span className="icon-name">{iconInfo.name}</span>} */}
          <h6>{iconInfo.name}</h6>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

