"use client";
import React from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Chip from "./shared/Chip";

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 }); // 30% visible triggers animation

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="p-6 bg-white rounded"
    >
      <div id="skills">
        <h1 className="text-center text-3xl font-bold pt-10 text-[#93376f]">
          Skills
        </h1>
        <p className="text-xl font-bold pt-20 text-[#93376f]">
          Languages and Styling
        </p>
        <div className="flex pt-5 flex-wrap gap-4 sm:gap-6 md:gap-10">
          <Chip>Javascript</Chip>
          <Chip>React.js</Chip>
          <Chip>HTML5</Chip>
          <Chip>CSS</Chip>
          <Chip>SCSS</Chip>
          <Chip>Material UI</Chip>
          <Chip>TailwindCSS</Chip>
          <Chip>Bootstrap</Chip>
          <Chip>Styled Components</Chip>
        </div>
        <p className="text-xl font-bold pt-10 text-[#93376f]">
          State Management
        </p>
        <div className="flex  flex-wrap pt-5 gap-4 sm:gap-6 md:gap-10">
          <Chip>Redux</Chip>
          <Chip>Context API</Chip>
        </div>
        <p className="text-xl font-bold pt-10 text-[#93376f]">
          API Integration
        </p>
        <div className="flex  flex-wrap pt-5 gap-4 sm:gap-6 md:gap-10">
          <Chip>Restful API</Chip>
          <Chip>Axios</Chip>
          <Chip>Postman</Chip>
          <Chip>Swagger</Chip>
        </div>
        <p className="text-xl font-bold pt-10 text-[#93376f]">Databases</p>
        <div className="flex  flex-wrap gap-10 pt-5">
          <Chip>MySQL</Chip>
          <Chip>Postgres MySQL</Chip>
        </div>
        <p className="text-xl font-bold pt-10  text-[#93376f]">
          Tools & Technologies
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 pt-5">
          <Chip>Bitbucket</Chip>
          <Chip>Github</Chip>
          <Chip>Jira</Chip>
          <Chip>Figma</Chip>
          <Chip>Miro</Chip>
          <Chip>VS Code</Chip>
          <Chip>NPM</Chip>
          <Chip>Yarn</Chip>
          <Chip>Webpack</Chip>
          <Chip>Stripe Integration</Chip>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
