import React, { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={null}>
          <About />
        </Suspense>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Suspense fallback={null}>
          <Tech />
        </Suspense>
        <Suspense fallback={null}>
          <Works />
        </Suspense>
        <Suspense fallback={null}>
          <Feedbacks />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default App;
