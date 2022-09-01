import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "welcome to mahan's portfolio",
          "Python programmer",
          "Front-end developer ",
          "Open Source Contributor",
          ""
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
