import ProjectShowcaseSection from "./ProjectShowcaseSection";
import { fullStackProjectsBlue, fullStackProjectsPink } from "@/const/projectData";

export default function FullStackProjects(){
  return (
    <>
      <ProjectShowcaseSection
        heading="Projects"
        headingColorClass="text-pink-400"
        badgePrefix="FullStack"
        badgeAccent="Development"
        badgeAccentColorClass="text-pink-400"
        badgeBorderClass="border-3"
        projects={fullStackProjectsPink}
      />
      <ProjectShowcaseSection
        heading="Projects"
        headingColorClass="text-blue-400"
        badgePrefix="FullStack"
        badgeAccent="Development"
        badgeAccentColorClass="text-blue-400"
        badgeBorderClass="border-2"
        projects={fullStackProjectsBlue}
      />
      </>
    )
}