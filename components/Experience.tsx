"use client";
import React from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

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
      <div id="experience" className="flex flex-col ">
        <h1 className="text-center text-3xl font-bold pt-20 text-[#93376f]">
          Experience
        </h1>
        <div className=" text-l font-bold text-[#93376f] pb-5 mt-10">
          <h3 className="font-semibold">
            Senior Software Engineer — NorthBay Solutions{" "}
            <span className="text-l italic text-gray-600">
              (Canada HQ, Pakistan Office)
            </span>
          </h3>
          <p className="text-l italic text-gray-600 mb-2">2021 - present</p>
        </div>
        <div className="p-10 text-l bg-[#faedf5] border border-[#93376f] rounded-md text-black shadow-xl">
          <div className="mb-8">
            <h3 className="text-l font-bold">INTELLIGIZE</h3>
            <p className="italic text-md mb-2 mt-2">
              A leading web platform trusted by{" "}
              <span className="font-semibold">
                thousands of legal and business professionals daily
              </span>
              , with adoption across over{" "}
              <span className="font-semibold">
                50% of Fortune 500 companies
              </span>
              , <span className="font-semibold">89% of AmLaw 100 firms</span>,
              and{" "}
              <span className="font-semibold">
                all Big Four accounting firms
              </span>
              .
            </p>

            <ul className="list-disc list-inside ml-7 text-gray-800 space-y-2">
              <li>
                Designed and maintained key UI features including an{" "}
                <strong>interactive chatbot</strong>,{" "}
                <strong>advanced search</strong> capabilities,{" "}
                <strong>AI-powered document summarization</strong>,{" "}
                <strong>in-document question answering</strong>, and{" "}
                <strong>document comparison</strong> tools, improving user
                engagement and efficiency.
              </li>
              <li>
                Migrated legacy JavaScript components to modern{" "}
                <strong>React functional components</strong> with hooks,
                enhancing code maintainability and performance.
              </li>
              <li>
                Converted Figma wireframes into fully responsive user
                interfaces, ensuring a seamless experience for over 500 daily
                active users.
              </li>
              <li>
                Integrated REST APIs to enable efficient and reliable
                communication between frontend and backend systems.
              </li>
              <li>
                Boosted platform performance by approximately{" "}
                <strong>30%</strong> through implementing{" "}
                <strong>lazy loading</strong>, <strong>code splitting</strong>,{" "}
                <strong>virtualized lists</strong>, and optimizing{" "}
                <strong>Redux selectors</strong>.
              </li>
              <li>
                Led thorough <strong>code reviews</strong> and streamlined the
                build and deployment process by implementing CI/CD pipelines
                using <strong>Jenkins</strong> and <strong>Bitbucket</strong>.
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 relative aspect-video">
              <Image
                src="/intelligize2.png"
                alt="Logo1"
                fill
                className="object-cover rounded shadow-xl"
              />
            </div>
            <div className="flex-1 relative aspect-video">
              <Image
                src="/intelligize3.png"
                alt="Logo2"
                fill
                className="object-cover rounded shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="p-10 mt-10 text-l bg-[#faedf5] border border-[#93376f] rounded-md text-black shadow-xl">
          <div className="mb-8">
            <h3 className="text-l font-bold">THE SITE</h3>
            <p className="italic text-md mb-2 mt-2">
              <strong>The Site</strong> is a cutting-edge{" "}
              <strong>B2B SaaS platform</strong> designed to revolutionize the
              way businesses engage with customers through{" "}
              <strong>interactive video shopping experiences</strong>. Built for{" "}
              <strong>
                modern retailers, brands, and e-commerce platforms
              </strong>
              , The Site enables{" "}
              <strong>seamless integration of shoppable video content</strong>{" "}
              into any digital storefront —{" "}
              <strong>turning passive viewers into active buyers</strong>.
            </p>

            <ul className="list-disc list-inside ml-7 text-gray-800 space-y-2">
              <li>
                <strong>Developed</strong> the internal{" "}
                <strong>Admin Portal using React.js</strong> and contributed
                core features to the{" "}
                <strong>Customer Portal using Vue.js</strong>.
              </li>
              <li>
                <strong>Collaborated</strong> with a global product team to meet
                project milestones, address feature requests, and integrate{" "}
                <strong>customer feedback</strong> aligned with business goals.
              </li>
              <li>
                <strong>Improved UX and responsiveness</strong> across devices,
                resulting in increased user satisfaction and engagement metrics.
              </li>
              <li>
                <strong>Integrated Amazon Cognito</strong> for secure and
                scalable user authentication and account management.
              </li>
              <li>
                Delivered a{" "}
                <strong>cross-browser-compatible beta release</strong> and
                ensured <strong>QA-compliant builds</strong> in CI/CD pipelines.
              </li>
              <li>
                <strong>
                  Actively participated in sprint planning, code reviews, and
                  testing cycles
                </strong>
                , fostering code quality and delivery confidence.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
