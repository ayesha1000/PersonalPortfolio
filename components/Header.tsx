"use client";
import { useScrollSpy } from "./useScrollSpy";

const sections = [
  "introduction",
  "experience",
  "skills",
  "education",
  "achievements",
];

export default function Header() {
  const activeId = useScrollSpy(sections, 100);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <nav className="bg-[#072a38] text-white h-20 sticky top-0 border-b border-white z-50 flex items-center justify-center flex-wrap gap-4 sm:gap-6 md:gap-10 ">
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`text-sm font-medium transition-all ${
              activeId === id
                ? "text-white border-b-2 border-white"
                : "text-[#dee5e7] hover:text-[#dee5e7]"
            }`}
          >
            {id.toUpperCase()}
          </button>
        ))}
      </nav>
    </header>
  );
}
