import { useState } from "react";
import { DATA } from "../Data/Resume";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import WorkExperience from "../Components/WorkExperience";
import Projects from "../Components/Projects";
import Education from "../Components/Education";
import Contact from "../Components/Contact";

export default function Main() {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <Education />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}
