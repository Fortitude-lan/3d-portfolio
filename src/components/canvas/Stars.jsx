import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, useGLTF } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
const Bb8 = ({ isRotating }) => {
  const { nodes, materials } = useGLTF("/bb8S.glb");
  const bb8 = useRef();
  const head = useRef();
  const body = useRef();
  useFrame((state, delta) => {
    bb8.current.rotation.y += Math.sin(delta / 15);
    if (isRotating) {
      head.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.8;
      body.current.rotation.y = -Math.sin(state.clock.elapsedTime) * 2;
      console.log(head.current.rotation.x);
    }
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <group
        ref={bb8}
        // {...props}
        dispose={null}
        // scale={0.0008}
        scale={isMobile ? 0.003 : 0.005}
        position={isMobile ? [0.01, 0.52, 0] : [0.15, 0.37, 0]}
      >
        {/* <group rotation={[-Math.PI / 2,Math.PI / 15, 0]}>
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["05_-_Default"]}
            position={[0, 0, 49.876]}
          />
        </group> */}
        <group
          // {...props}
          dispose={null}
          rotation={[Math.PI / 8, -Math.PI / 4, 0]}
        >
          <mesh
            ref={body}
            geometry={nodes.body.geometry}
            material={materials["05_-_Default"]}
          />
          <mesh
            ref={head}
            geometry={nodes.head.geometry}
            material={materials["05_-_Default"]}
          />
          <mesh
            geometry={nodes.Object_6002.geometry}
            material={materials["05_-_Default"]}
          />
        </group>
      </group>
    </>
  );
};
const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(20000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    // if (props.isRotating) {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    // }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.0008}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ isRotating }) => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars isRotating={isRotating} />
          <Bb8 isRotating={isRotating} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
