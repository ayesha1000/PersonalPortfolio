import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div id="introduction">
      <div className="flex flex-col bg-[#93376f] px-4 sm:px-8 md:px-16 lg:px-[7.5rem] text-white">
        <h1 className="text-center text-3xl font-bold pt-30">
          Hi, I’m Ayesha Munir
        </h1>
        <div className="pt-20 pb-20 text-m">
          <p className="pb-5">
            I’m a Frontend Developer with over 4 years of experience building
            scalable, high-performance web applications. I work primarily with
            React, Redux, and modern JavaScript, and have hands-on experience
            integrating AI features like ChatGPT to improve functionality and
            user experience.
          </p>
          <p className="pb-5">
            Based in Belfast, UK, I’ve contributed to projects ranging from
            legal document analysis platforms to e-commerce applications,
            working with cross-functional teams to develop responsive and
            maintainable user interfaces. I focus on writing clean, efficient
            code, optimizing performance through techniques like lazy loading,
            code splitting, and virtualization, and ensuring consistent
            experiences across devices.
          </p>
          <p className="pb-5">
            I enjoy working on practical solutions that address real-world
            needs, and I’m always looking to refine my skills and stay current
            with evolving technologies.
          </p>
          <div className="flex text-center w-full justify-center gap-10 pt-10">
            <a
              href="https://www.linkedin.com/in/ayesha-munir-0462321a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn Profile"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </a>
            <a href="mailto:ayeshamunir1000@gmail.com" className="inline-block">
              <Image
                src="/email.png"
                alt="Email Icon"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </a>
            <a href="tel:+447475007780" className="inline-block">
              <Image
                src="/phone-call.png"
                alt="Phone Icon"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
