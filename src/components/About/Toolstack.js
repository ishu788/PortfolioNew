
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWireshark
} from "react-icons/si";







const iconsData = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postmane" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiWireshark />, name: "Wireshark" }
];



function Toolstack() {
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

export default Toolstack;
