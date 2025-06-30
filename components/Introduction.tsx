import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div id="introduction">
      <div className="hidden lg:block absolute top-[200px] right-[80px]">
        <Image src="/desktop.svg" alt="icon" width={500} height={500} />
      </div>
      <div className="flex flex-col bg-[#072a38] px-4 py-30 sm:px-8 md:px-16 lg:px-[7.5rem]  text-white">
        <h1 className="text-4xl font-bold pt-30">Hi, I’m Ayesha Munir</h1>

        <div className=" pt-10 pb-10 lg:pt-20 lg:pb-20 text-l lg:w-[60%]">
          <p className="pb-5">
            I’m a Frontend Developer with over 4 years of experience building
            fast, scalable, and user-friendly web applications. I specialize in
            React, Redux, and modern JavaScript, with a strong focus on
            performance, accessibility, and seamless user experience.
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
            needs. I believe great software is built through thoughtful design,
            teamwork, and relentless curiosity.
          </p>
          <div className="flex text-center w-full gap-10 pt-10">
            <a
              href="https://www.linkedin.com/in/ayesha-munir-0462321a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn Profile"
                width={42}
                height={42}
                className="cursor-pointer"
              />
            </a>
            <a href="mailto:ayeshamunir1000@gmail.com" className="inline-block">
              <Image
                src="/mail.png"
                alt="Email Icon"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </a>
            <a href="tel:+447475007780" className="inline-block">
              <Image
                src="/phone.png"
                alt="Phone Icon"
                width={40}
                height={40}
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
