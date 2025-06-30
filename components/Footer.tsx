import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © Ayesha Munir {new Date().getFullYear()} - Today. All rights
          reserved.
        </p>
        <div className="flex space-x-10">
          <a
            href="https://www.linkedin.com/in/ayesha-munir-0462321a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn Profile"
              width={40}
              height={40}
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
    </footer>
  );
}
