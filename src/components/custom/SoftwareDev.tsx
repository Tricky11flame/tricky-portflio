import { Section } from "./customized"
import { techStack } from "@/const/gridData"
import GridTypeCard from "./GridTypeCard"
import { HEADING_COLORS, TEXT_COLORS } from "@/const/theme"

function SoftwareDev() {
  return (
    <Section>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center"> Software <span className={HEADING_COLORS.primary}>Development </span>
          <p className={`${TEXT_COLORS.muted} text-sm font-normal`}>with specialization in <span className={HEADING_COLORS.primary}>Backend Development </span></p>
        </h2> 
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {techStack.map((tech) => (
        <GridTypeCard
          key={tech.name}
          className="p-4 flex items-center justify-center bg-black/20"
        >
          <div className="font-semibold text-lg sm:text-xl md:text-2xl mr-4 text-white">
            {tech.name}
          </div>
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 object-contain"
          />
        </GridTypeCard>
      ))}
    </div>
    </Section>
  )
}

export default SoftwareDev