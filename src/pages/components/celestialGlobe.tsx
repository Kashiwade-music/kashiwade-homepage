import { Core } from "./r3fCore";
import { Frame } from "./r3fFrame";
import { Globe } from "./r3fGlobe";
import { GlobeOuter } from "./r3fGlobeOuter";
import { Obi } from "./r3fObi";
import {
  OrbitControls,
  useTexture,
  useEnvironment,
  Environment,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { FC, VFC, useRef } from "react";
import { DoubleSide } from "three";

const CelestialGlobe: React.FC = () => {
  return (
    <Canvas
      camera={{ fov: 50, position: [0, -10, -20] }}
      style={{ mixBlendMode: "normal", position: "fixed" }}
    >
      <Contents />
    </Canvas>
  );
};

const Contents: FC = () => {
  const envMap = useEnvironment({
    files: "/assets/bg.hdr",
  });

  return (
    <>
      {/* control */}
      <OrbitControls />

      {/* light */}
      <directionalLight position={[5, 5, 5]} />

      <Environment map={envMap} />
      {/* <Environment preset="warehouse" background /> */}

      <Core position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
      <Frame position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
      <Obi position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
      <Globe position={[0, 0, 0]} scale={[0.75, 0.75, 0.75]} />
      <GlobeOuter position={[0, 0, 0]} scale={[0.6, 0.6, 0.6]} />
    </>
  );
};

export default CelestialGlobe;
