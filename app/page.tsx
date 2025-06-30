import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Experience from "../components/ExperienceWrapper";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Introduction />
      <div className="px-4 sm:px-8 md:px-16 lg:px-30 ">
        <Experience />
        <Skills />
        <Education />
        <Achievements />
      </div>
      <Footer />
    </div>
  );
}
