import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Threat Analyst",
          "DFIR",
          "Virtual Reality Developer",
          "MERN Stack Developer",
          "Security analyst",
          "Android Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
