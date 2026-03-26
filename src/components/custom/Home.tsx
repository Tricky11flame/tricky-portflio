import { Section } from "./customized"
import { MapPin } from "lucide-react"
import { PAGE_THEME, TEXT_COLORS } from "@/const/theme"

function Home() {
  return (
    <Section>
        <div className="space-y-4 sm:space-y-6 relative z-10 px-1 sm:px-0">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            Hey, I am <span className={PAGE_THEME.portfolio.primary}>Kartikay</span>.
          </h1>
          <p className={`text-xl sm:text-2xl md:text-3xl ${TEXT_COLORS.muted} font-light ml-1 sm:ml-2`}>
            Full Stack Developer @ NSUT ECE'26 <br />
          </p>
          <div className={`text-base sm:text-xl md:text-2xl ${TEXT_COLORS.subtle} font-light ml-1 sm:ml-2 leading-relaxed`}>
            Based in <MapPin className="inline "/> Delhi, India. <span className={`${PAGE_THEME.portfolio.primary}  font-bold`}>Certified Cloud Practioner</span> with <span className={`${PAGE_THEME.portfolio.primary} font-bold`}>3 Months of Internship</span> experience in Backend Development with a <span className={`${PAGE_THEME.portfolio.primary} font-bold`}>portfolio of diverse projects</span> and a ton of teamwork and leadership experience. 
            <p className={` text-sm sm:text-lg md:text-xl ${TEXT_COLORS.subtleMuted} mt-4 sm:mt-8`}>
              Seeking SDE-1 or internship for similar roles, to be awarded graduate degree by May 2026 
            </p>
          </div>
        </div>
      </Section>
  )
}

export default Home