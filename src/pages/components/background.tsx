import * as vanilla from "./background.css";
import CelestialGlobe from "./celestialGlobe";
import { p5bglines } from "./p5bglines";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Background: React.FC = () => {
  return (
    <div className={vanilla.BackgroundWrapper}>
      <CelestialGlobe />
      <StaticImage
        src="../../../resources/common/bg.png"
        alt="hero"
        className={vanilla.BackgroundImage}
        quality={95}
      />

      <div
        style={{
          mixBlendMode: "overlay",
          zIndex: -90,
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 85%)",
        }}
      >
        <ReactP5Wrapper sketch={p5bglines} />
      </div>

      <div className={vanilla.BackgroundBaseColor}>d</div>
    </div>
  );
};

export default Background;
