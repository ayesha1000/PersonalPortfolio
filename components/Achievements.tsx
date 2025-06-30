"use client";
import React from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Achievements = () => {
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
      <div id="achievements" className="flex flex-col mb-20">
        <h1 className="text-center text-3xl font-bold pt-20 text-[#072a38]">
          Achievements
        </h1>
        <div className="grid gap-4 md:grid-cols-2  pt-10">
          <div className="bg-gradient-to-r from-[#072a38] to-[#116a83] text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">President’s Gold Medalist</h3>
            <p className="text-sm mt-1">
              Awarded for securing <strong>1st position</strong> across the
              entire board in Intermediate Annual Examinations. Recognized for
              exceptional academic performance, consistency, and commitment to
              excellence.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#072a38] to-[#116a83] text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Rector’s Gold Medal</h3>
            <p className="text-sm mt-1">
              Honored for presenting the{" "}
              <strong>Best Final Year Project</strong> – an open-source medical
              image annotation tool. This project aimed to assist radiologists
              and researchers by enabling accurate, collaborative, and efficient
              image labeling for medical datasets.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;
