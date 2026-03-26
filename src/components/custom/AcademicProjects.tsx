import ProjectShowcaseSection from "./ProjectShowcaseSection";
import { academicProjects } from "@/const/projectData";

export default function AcademicProjects(){
  return (
    <ProjectShowcaseSection
      heading="Academic Projects"
      headingColorClass="text-pink-400"
      badgePrefix="Embedded"
      badgeAccent="Development"
      badgeAccentColorClass="text-pink-400"
      badgeBorderClass="border-3"
      projects={academicProjects}
    />
  )
}