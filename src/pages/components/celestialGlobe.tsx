import { Globe1 } from "./Globe1";
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
      camera={{ fov: 50, position: [0, 3, 10] }}
      style={{ zIndex: 100, position: "fixed" }}
    >
      <Contents />
    </Canvas>
  );
};

const Contents: FC = () => {
  const boxRef = useRef<any>(null);
  const boxRef2 = useRef<any>(null);
  const boxRef3 = useRef<any>(null);
  const envMap = useEnvironment({
    files: "/assets/the_sky_is_on_fire_4k.hdr",
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    boxRef.current.rotation.x = a * 1;
    boxRef.current.rotation.y = a * 0;
    boxRef.current.rotation.z = a * 1;
    boxRef2.current.rotation.x = a * -1;
    boxRef2.current.rotation.y = a * 0;
    boxRef2.current.rotation.z = a * 0.5;
    boxRef3.current.rotation.x = a * 0;
    boxRef3.current.rotation.y = a * 1;
    boxRef3.current.rotation.z = a * -1;
  });
  return (
    <>
      {/* control */}
      <OrbitControls />

      {/* light */}
      <directionalLight position={[5, 5, 5]} />

      <Environment map={envMap} />
      {/* <Environment preset="forest" /> */}

      <Globe1 ref={boxRef} position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
      <Globe1 ref={boxRef2} position={[0, 0, 0]} scale={[0.4, 0.4, 0.4]} />
      <Globe1 ref={boxRef3} position={[0, 0, 0]} scale={[0.25, 0.25, 0.25]} />
      {/* box 1 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default CelestialGlobe;
