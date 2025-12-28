import { BentoGridBackground } from "@/components/custom/customized";
import Home from "@/components/custom/Home";
import SoftwareDev from "@/components/custom/SoftwareDev";
import Experience from "@/components/custom/Experience";
import Certification from "@/components/custom/Certification";
import Projects from "@/components/custom/Projects";
import Clubs from "@/components/custom/Clubs";
import Education from "@/components/custom/Education";
import Academic from "@/components/custom/Academic";
export default function Portfolio() {
  return (
    // Parent container: Handles the scroll snap
    <div className="relative h-screen w-full bg-neutral-950 text-neutral-100 overflow-hidden">
      <BentoGridBackground />
      <div className="absolute inset-0 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Home />
      <SoftwareDev/>
      <Experience />
      <Certification/>
      <Projects />
      <Clubs/>
      <Education/>
      <Academic/>
    </div>
    </div>
  );
}