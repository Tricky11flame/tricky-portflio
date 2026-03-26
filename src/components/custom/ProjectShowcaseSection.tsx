import { FolderTree } from "lucide-react";
import { Badge } from "../ui";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Section } from "./customized";
import HeavyCard, { type HeavyCardProps } from "./HeavyCard";
import { SHARED_COLOR_CLASSES, TEXT_COLORS } from "@/const/theme";

type ProjectShowcaseSectionProps = {
  heading?: string;
  headingColorClass: string;
  badgePrefix: string;
  badgeAccent: string;
  badgeAccentColorClass: string;
  badgeBorderClass?: string;
  projects: HeavyCardProps[];
};

function ProjectShowcaseSection({
  heading = "Projects",
  headingColorClass,
  badgePrefix,
  badgeAccent,
  badgeAccentColorClass,
  badgeBorderClass = "border-2",
  projects,
}: ProjectShowcaseSectionProps) {
  return (
    <Section>
      <Card className={SHARED_COLOR_CLASSES.glassCard}>
        <CardHeader className="mb-0 pb-0">
          <CardTitle className={`flex items-center gap-2 md:gap-3 text-2xl sm:text-3xl md:text-4xl ${headingColorClass}`}>
            <FolderTree className="size-9 sm:size-12 md:size-14" />
            <p>{heading}</p>
          </CardTitle>
          <Badge
            variant="outline"
            className={`${SHARED_COLOR_CLASSES.sectionBadge} ${TEXT_COLORS.strong} ${badgeBorderClass} mr-2 text-sm sm:text-base md:text-lg font-bold px-3 md:px-4 mb-0`}
          >
            {badgePrefix} <p className={badgeAccentColorClass}>{badgeAccent}</p>
          </Badge>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <HeavyCard
              key={project.cardTitle}
              cardTitle={project.cardTitle}
              cardLink={project.cardLink}
              cardContent={project.cardContent}
              Badges={project.Badges}
              ytMode={project.ytMode ?? false}
            />
          ))}
        </CardContent>
      </Card>
    </Section>
  );
}

export default ProjectShowcaseSection;
