import { BentoGridBackground, ScrollRail } from "@/components/custom/customized";
import Home from "@/components/custom/Home";
import SoftwareDev from "@/components/custom/SoftwareDev";
import Experience from "@/components/custom/Experience";
import Certification from "@/components/custom/Certification";
import Projects from "@/components/custom/Projects";
import Clubs from "@/components/custom/Clubs";
import Education from "@/components/custom/Education";
import Academic from "@/components/custom/Academic";
import { useRef } from "react";
import ContactMe from "@/components/custom/ContactMe";
export default function Portfolio() {
  const scrollRef = useRef(null);
  return (
    // Parent container: Handles the scroll snap
    <div className="relative h-screen w-full bg-neutral-950 text-neutral-100 overflow-hidden">
      <BentoGridBackground />
      <ScrollRail containerRef={scrollRef} />
      <div className="absolute inset-0 overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide"
      ref = {scrollRef}>
      <Home />
      <SoftwareDev/>
      <Experience />
      <Certification/>
      <Projects />
      <Clubs/>
      <Education/>
      <Academic/>
      <ContactMe/>
    </div>
    </div>
  );
}