import ProjectShowcaseSection from "./ProjectShowcaseSection";
import { frontendProjects } from "@/const/projectData";

export default function FrontendProjects(){
  return (
    <ProjectShowcaseSection
      heading="Projects"
      headingColorClass="text-pink-400"
      badgePrefix="Frontend"
      badgeAccent="Development"
      badgeAccentColorClass="text-pink-400"
      badgeBorderClass="border-2"
      projects={frontendProjects}
    />
  )
}