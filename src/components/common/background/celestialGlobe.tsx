import { Clock } from "./r3fClock";
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
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Glitch,
  Noise,
  Outline,
  Vignette,
} from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { BlendFunction } from "postprocessing";
import React, { FC, VFC, useEffect, useRef } from "react";
import { Vector2 } from "three";

const CelestialGlobe: React.FC = () => {
  useEffect(() => {
    console.log(`\u001b[32m[CelestialGlobe.tsx] Rendered\u001b[0m`);
  }, []);
  return (
    // @ts-ignore
    <Canvas
      camera={{ fov: 50, position: [0, -10, -20] }}
      style={{ mixBlendMode: "normal", position: "fixed", zIndex: -70 }}
    >
      <fog attach="fog" color={"#1e5fd0"} near={1} far={50} />
      <EffectComposer>
        {/* @ts-ignore */}
        <ChromaticAberration offset={[0.0004, 0]} />
        <Glitch
          chromaticAberrationOffset={new Vector2(1, 0.001)}
          delay={new Vector2(5, 20)} // min and max glitch delay
          duration={new Vector2(0.2, 0.5)} // min and max glitch duration
          strength={new Vector2(0.05, 0.2)} // min and max glitch strength
          dtSize={1}
          mode={GlitchMode.SPORADIC}
          ratio={0.1}
        />
      </EffectComposer>
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
      <Clock position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
    </>
  );
};

export default CelestialGlobe;
