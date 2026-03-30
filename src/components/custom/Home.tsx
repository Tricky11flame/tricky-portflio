import { Section } from "./customized"
import { MapPin } from "lucide-react"
import { PAGE_THEME, TEXT_COLORS } from "@/const/theme"

function Home() {
  return (
    <Section>
        <div className="space-y-4 sm:space-y-6 relative z-10 px-1 sm:px-0">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
           Hi, I am <span className={PAGE_THEME.portfolio.primary}>Kartikay </span>.
          </h1>
          <p className={`text-xl sm:text-2xl md:text-3xl ${TEXT_COLORS.muted} font-light ml-1 sm:ml-2`}>
            A Full Stack Developer with React proficiency.<br />
            Seeking SDE-1 opportunities 
          </p>
          <div className={`text-base sm:text-xl md:text-2xl ${TEXT_COLORS.subtle} font-light ml-1 sm:ml-2 leading-relaxed`}>
            Based in <MapPin className="inline "/> Delhi, India. <span className={`${PAGE_THEME.portfolio.primary}  font-bold`}>Certified Cloud Practioner</span> with 3 Months <span className={`${PAGE_THEME.portfolio.primary} font-bold`}>Frontend Developer at BrandContext </span> and 3 Months of <span className={`${PAGE_THEME.portfolio.primary} font-bold`}>Backend Development at Sponsica,</span> a pre seed start up. A Portfolio of diverse projects  from <span className={`${PAGE_THEME.portfolio.primary} font-bold`}>Website</span> to <span className={`${PAGE_THEME.portfolio.primary} font-bold`}>Apps</span> and <span className={`${PAGE_THEME.portfolio.primary} font-bold`}>Scripting</span> to <span className={`${PAGE_THEME.portfolio.primary} font-bold`}>Notebooks</span>  
          </div>
        </div>
      </Section>
  )
}

export default Home