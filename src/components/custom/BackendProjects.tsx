import ProjectShowcaseSection from "./ProjectShowcaseSection";
import { backendProjects } from "@/const/projectData";

export default function BackendProjects(){
  return (
    <ProjectShowcaseSection
      heading="Projects"
      headingColorClass="text-blue-400"
      badgePrefix="Backend"
      badgeAccent="Development"
      badgeAccentColorClass="text-blue-400"
      badgeBorderClass="border-2"
      projects={backendProjects}
    />
  )
}