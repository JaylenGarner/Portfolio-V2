"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import Navigation from "./Navigation";

import ContactForm from "./ContactForm";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Project from "./Project";

const Home = () => {
  const [content, setContent] = useState("");
  const [currentProject, setCurrentProject] = useState({});

  return (
    <>
      {/* Reveal */}
      <motion.div
        id="revealDiv"
        className="absolute z-50 w-screen h-[100dvh] flex justify-center items-center bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      ></motion.div>

      {/* Tint */}
      <div className="absolute z-30 w-screen h-screen bg-black bg-blend-darken opacity-50" />

      {/* Content */}
      <div className="absolute z-50 w-screen h-[100dvh] flex justify-center items-center">
        {!content && <h1 className="text-xl font-bold">Jaylen Garner</h1>}
        {content === "Contact" && <ContactForm />}
        {content === "Experience" && <Experience />}
        {content === "Certifications" && <Certifications />}
        {content === "Projects" && (
          <Projects
            setContent={setContent}
            setCurrentProject={setCurrentProject}
          />
        )}
        {content === "Project" && <Project project={currentProject} />}
        <Navigation setContent={setContent} />
      </div>
    </>
  );
};

export default Home;
