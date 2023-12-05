import { ContactShadows, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import vertexShader from "../shaders/blob/vertex.glsl";
import fragmentShader from "../shaders/blob/fragment.glsl";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Blob = () => {
  const blobMat = useRef();

  const colors = {
    depthColor: { r: 0.0, g: 0, b: 0.0 },
    surfaceColor: { r: 1.0, g: 0.5, b: 0.0 },
    colorOffset: 0.6,
    colorMult: 1.55,
  };

  useFrame((state, delta) => {
    blobMat.current.uniforms.uTime.value += delta;
  });
  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 100, 100]} />
        <shaderMaterial
          ref={blobMat}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: { value: 0.0 },
            uDepthColor: { value: colors.depthColor },
            uSurfaceColor: { value: colors.surfaceColor },
            uColorOffset: { value: colors.colorOffset },
            uColorMultiplier: { value: colors.colorMult },
          }}
        />
      </mesh>
    </>
  );
};

export default Blob;
