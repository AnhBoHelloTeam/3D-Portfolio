import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/organisms/Navbar";
import Hero from "./components/organisms/Hero";

const About = lazy(() => import("./components/organisms/About"));
const Experience = lazy(() => import("./components/organisms/Experience"));
const Tech = lazy(() => import("./components/organisms/Tech"));
const Works = lazy(() => import("./components/organisms/Works"));
const AutomationProjects = lazy(() => import("./components/organisms/AutomationProjects"));
const ClientProjects = lazy(() => import("./components/organisms/ClientProjects"));
const Feedbacks = lazy(() => import("./components/organisms/Feedbacks"));
const Contact = lazy(() => import("./components/organisms/Contact"));
const StarsCanvas = lazy(() => import("./components/atoms/Stars"));
const CvOnline = lazy(() => import("./pages/CvOnline"));
const AutomationDetail = lazy(() => import("./pages/AutomationDetail"));

const MainPortfolio = () => (
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
      <ClientProjects />
    </Suspense>
    <Suspense fallback={null}>
      <AutomationProjects />
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
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cv" element={
          <Suspense fallback={null}>
            <CvOnline />
          </Suspense>
        } />
        <Route path="/automation/:id" element={
          <Suspense fallback={null}>
            <AutomationDetail />
          </Suspense>
        } />
        <Route path="*" element={<MainPortfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
