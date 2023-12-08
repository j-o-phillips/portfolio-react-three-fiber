import { ContactShadows, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import vertexShader from "../shaders/blob/vertex.glsl";
import fragmentShader from "../shaders/blob/fragment.glsl";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { useThemeContext } from "../context/ThemeContext";

const Blob = () => {
  const { colorData } = useThemeContext();
  const blobMat = useRef();

  const colors = {
    depthColor: { r: 0.0, g: 0.0, b: 0.0 },
    surfaceColor: colorData.vector,
    colorOffset: 0.6,
    colorMult: 1.55,
  };

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0.0 },
      uDepthColor: { value: colors.depthColor },
      uSurfaceColor: { value: colors.surfaceColor },
      uColorOffset: { value: colors.colorOffset },
      uColorMultiplier: { value: colors.colorMult },
    }),
    []
  );

  useFrame((state, delta) => {
    blobMat.current.uniforms.uTime.value += delta;

    blobMat.current.uniforms.uSurfaceColor.value = colorData.vector;
  });
  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 30, 30]} />
        <shaderMaterial
          ref={blobMat}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};

export default Blob;
