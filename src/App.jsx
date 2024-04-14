import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  ComputersCanvas,
} from "./components";
import { useState, useRef, Suspense } from "react";

const App = () => {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <div
      className="relative z-0 bg-primary"
      onPointerDown={() => {
        setIsRotating(true);
      }}
      onPointerUp={() => {
        setIsRotating(false);
      }}
    >
      <div className="bg-cover bg-no-repeat bg-center">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <Navbar />
        <Hero isRotating={isRotating} />
      </div>
      <About />
      <Experience />
      <Tech />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
      <StarsCanvas isRotating={isRotating} />
    </div>
  );
};

export default App;
