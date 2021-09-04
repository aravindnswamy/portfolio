import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
// import LinkedIn from "./components/LinkedIn";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testmonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    {/* <LinkedIn /> */}
    <Projects />
    <Skills />
    <Testimonials />
    <Contact />
  </main>
);
}
