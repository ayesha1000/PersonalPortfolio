"use client";
import React from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
      <div id="education" className="flex flex-col">
        <h1 className="text-center text-3xl font-bold pt-20 text-[#93376f]">
          Education
        </h1>
        <div className="space-y-6  pt-10">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-[#93376f]">
              Bachelors of Science in Computer Science
            </h3>
            <p className="text-gray-700">
              National University of Science and Technology (Pakistan)
            </p>
            <p className="text-sm text-gray-500">2017 – 2021</p>
            <p className="text-sm text-gray-500">GPA 3.9/4.0</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
