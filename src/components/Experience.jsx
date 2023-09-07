import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./overlay";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <Environment preset="forest" />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
      <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};
