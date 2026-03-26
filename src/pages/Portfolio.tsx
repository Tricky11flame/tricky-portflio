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
import { useDirectionalSnap } from "@/hooks/use-directional-snap";
import { PAGE_THEME } from "@/const/theme";

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useDirectionalSnap(scrollRef);

  return (
    // Parent container: Handles the scroll snap
    <div className={`relative h-screen w-full ${PAGE_THEME.portfolio.background} ${PAGE_THEME.portfolio.baseText} overflow-hidden`}>
      <BentoGridBackground />
      <ScrollRail containerRef={scrollRef} />
      <div className="absolute inset-0 overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-hide pb-20 md:pb-0 scroll-pb-20 md:scroll-pb-0"
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