import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Achievements from "../components/Achievements";

export default function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-30">
        <Experience />
        <Skills />
        <Education />
        <Achievements />
      </div>
    </div>
  );
}
