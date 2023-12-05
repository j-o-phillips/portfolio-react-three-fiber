import {
  useGLTF,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";
import { projects } from "../content/projects";
import { useFrame } from "@react-three/fiber";

export default function Display({ projectNumber }) {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );

  return (
    <>
      <Environment preset="city" />
      <color args={["#120d14"]} attach="background" />
      {/* <PresentationControls
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      > */}
      <Float rotationIntensity={0.4}>
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#ffffff"}
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />
        <primitive object={computer.scene} position-y={-1.2}>
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
          >
            <iframe src={projects[projectNumber].website} />
          </Html>
        </primitive>
        <Text
          fontSize={0.3}
          position={[2, 0.75, 0.75]}
          rotation-y={-1.25}
          maxWidth={2}
          textAlign="center"
        >
          {projects[projectNumber].name}
        </Text>
        <Text
          fontSize={0.2}
          position={[2, 0.1, 0.75]}
          rotation-y={-1.25}
          maxWidth={2}
          textAlign="center"
        >
          {`${projects[projectNumber].timeFrame}, ${projects[projectNumber].team}`}
        </Text>
        <Text
          fontSize={0.2}
          position={[2, -0.3, 0.75]}
          rotation-y={-1.25}
          maxWidth={2}
          textAlign="center"
        >
          Tech: {projects[projectNumber].tech}
        </Text>
      </Float>
      {/* </PresentationControls> */}
      <ContactShadows position-y={-1.4} opacity={0.6} scale={5} blur={2.4} />
    </>
  );
}
