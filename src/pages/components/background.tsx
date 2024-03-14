import * as vanilla from "./background.css";
import CelestialGlobe from "./celestialGlobe";
import { p5bglines } from "./p5bglines";
import { p5bgTriangles } from "./p5bgtriangles";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Background: React.FC = () => {
  return (
    <div className={vanilla.BackgroundWrapper}>
      <div className={vanilla.BackgroundBaseColor} />

      <StaticImage
        src="../../../resources/common/bg.png"
        alt="hero"
        className={vanilla.BackgroundImage}
        quality={95}
      />

      <div
        style={{
          height: "100%",
          width: "100%",
          top: "0",
          position: "fixed",

          mixBlendMode: "overlay",
          zIndex: -90,
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 85%)",
        }}
      >
        <ReactP5Wrapper sketch={p5bglines} />
      </div>

      <CelestialGlobe />
      <StaticImage
        src="../../../resources/common/perlin_noise.png"
        alt="hero"
        className={vanilla.PerlinNoise}
        quality={95}
      />
      <div
        style={{
          height: "100%",
          width: "100%",
          top: "0",
          position: "fixed",
          mixBlendMode: "overlay",
          zIndex: -5,
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,1) 100%)",
        }}
      >
        <ReactP5Wrapper sketch={p5bgTriangles} />
      </div>
    </div>
  );
};

export default Background;
