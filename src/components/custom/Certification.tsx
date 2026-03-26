import { Section } from "./customized"
import { certData } from "@/const/gridData"
import GridTypeCard from "./GridTypeCard"
import { HEADING_COLORS, TEXT_COLORS } from "@/const/theme"

function Certification() {
  return (
    <Section>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center"> Certifications<span className={HEADING_COLORS.primary}> & Badges </span>
          <p className={`${TEXT_COLORS.muted} text-sm font-normal`}> focused on development<span className={HEADING_COLORS.primary}> and aws cloud </span></p>
        </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-12 md:gap-y-6">
            {certData.map((cert) => (
              <GridTypeCard
                key={cert.name}
                className="p-1 flex items-center justify-center bg-black/10"
              >
                <a href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer" className=""> 
              <img src={cert.image} className="w-35 text-white " alt={cert.image} >
              </img>
              </a>
              </GridTypeCard>
            ))}
          </div>
          
      </Section>
  )
}

export default Certification