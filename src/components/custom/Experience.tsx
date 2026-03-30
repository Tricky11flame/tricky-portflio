import { Section } from "./customized"
import { Card,CardHeader,CardTitle,CardContent, } from "../ui/card"
import { Badge } from "../ui/badge"
// import { Code } from "lucicde-react"
import { BriefcaseBusiness } from "lucide-react"
import { BORDER_COLORS, HEADING_COLORS, SHARED_COLOR_CLASSES, SURFACE_COLORS, TEXT_COLORS } from "@/const/theme"

function Experience() {
  return (
    <Section>
      <Card className={SHARED_COLOR_CLASSES.glassCard}>
        <CardHeader>
          <CardTitle className={`flex items-center gap-2 md:gap-3 text-2xl sm:text-3xl md:text-4xl ${HEADING_COLORS.accent}`}>
            <BriefcaseBusiness className="size-9 sm:size-12 md:size-14"/> Experience
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`border-l-2 ${BORDER_COLORS.badgeMuted} pl-3 sm:pl-6 py-2`}>
            <h3 className={`text-lg sm:text-xl font-bold ${TEXT_COLORS.strong}`}>Frontend Development Intern</h3>
            <Badge className={`font-mono text-xs sm:text-sm ${SURFACE_COLORS.badgeBg} ${SURFACE_COLORS.badgeText} ${SURFACE_COLORS.badgeBorder} mt-2 mr-2 inline-flex flex-wrap gap-1 leading-relaxed max-w-full whitespace-normal`}>
              <span>Brand Context</span>
              <span className="hidden sm:inline">|</span>
              <span>Feb '26 - April '26</span>
            </Badge>
              <div className="flex flex-wrap gap-2 mt-2">
              {/* <Badge variant="outline" className={` ${SHARED_COLOR_CLASSES.techBadge} mt-2 mr-2`}> <img className="h-3 m-0.5" src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="" /> javascipt 
                </Badge> */}
                <Badge variant="outline" className={`${SHARED_COLOR_CLASSES.techBadge} mt-2 mr-2`}><img className="h-3 m-0.5" src="https://cdn.simpleicons.org/react/61DAFB" alt="" /> react js
                </Badge>
                <Badge variant="outline" className={`${SHARED_COLOR_CLASSES.techBadge} mt-2 mr-2`}><img className="h-3 m-0.5" src="https://cdn.simpleicons.org/nextdotjs/FFFFFF" alt="" /> next js
                </Badge>
                <Badge variant="outline" className={`${SHARED_COLOR_CLASSES.techBadge} mt-2 mr-2`}><img className="h-3 m-0.5" src="https://cdn.simpleicons.org/expo/FFFFFF" alt="" /> 
                React Native
                </Badge>
                <Badge variant="outline" className={`${SHARED_COLOR_CLASSES.techBadge} mt-2 mr-2`}> <img className="h-3 m-0.5" src="https://cdn.simpleicons.org/typescript/3178C6" alt="" /> TypeScript </Badge>
              </div>
            <ul className={`list-disc ${TEXT_COLORS.body} space-y-2 pl-4 mt-3 text-sm sm:text-base`}>
              <li>Developed and Maintained and multiple Client facing Frontends.
              </li>
              <li>Worked on primarily on Next.js and  React Native with a touch of motion
              </li>
              <li> Primarily on <span className={HEADING_COLORS.accent}>Chat Based UI's</span>, it's micro interactions and websocket c  onnections
              </li>
              <li> Worked in collaboration with backend & product team to deliver above and beyond timelines
              </li>
            </ul>
          </div>
        </CardContent>
        <CardContent>
          <div className={`border-l-2 ${BORDER_COLORS.badgeMuted} pl-3 sm:pl-6 py-2`}>
            <h3 className={`text-lg sm:text-xl font-bold ${TEXT_COLORS.strong}`}>Backend Development Intern</h3>
            <Badge className={`font-mono text-xs sm:text-sm ${SURFACE_COLORS.badgeBg} ${SURFACE_COLORS.badgeText} ${SURFACE_COLORS.badgeBorder} mt-2 mr-2 inline-flex flex-wrap gap-1 leading-relaxed max-w-full whitespace-normal`}>
              <span>Sponsica</span>
              <span className="hidden sm:inline">|</span>
              <span>May '25 - August '25</span>
            </Badge>
              <div className="flex flex-wrap gap-2 mt-2">
              {/* <Badge variant="outline" className={` ${SHARED_COLOR_CLASSES.techBadge} mt-2 mr-2`}> <img className="h-3 m-0.5" src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="" /> javascipt 
                </Badge> */}
                <Badge variant="outline" className={`${SHARED_COLOR_CLASSES.techBadge} mt-2 mr-2`}><img className="h-3 m-0.5" src="https://cdn.simpleicons.org/react/61DAFB" alt="" /> react js
                </Badge>
                <Badge variant="outline" className={`${SHARED_COLOR_CLASSES.techBadge} mt-2 mr-2`}>
                <img className="h-3 m-0.5" src="https://cdn.simpleicons.org/nodedotjs/339933" alt="" /> node js
                </Badge>
                <Badge variant="outline" className={`${SHARED_COLOR_CLASSES.techBadge} mt-2 mr-2`}>
                  <img className="h-3 m-0.5" src="https://cdn.simpleicons.org/postgresql/4169E1" alt="" /> posgreSQL
                </Badge>
                <Badge variant="outline" className={`${SHARED_COLOR_CLASSES.techBadge} mt-2 mr-2`}> <img className="h-3 m-0.5" src="https://cdn.simpleicons.org/typescript/3178C6" alt="" /> TypeScript </Badge>
                <Badge variant="outline" className={`${SHARED_COLOR_CLASSES.techBadge} mt-2 mr-2`}> <img className="h-3 m-0.5" src="https://cdn.simpleicons.org/jest/C21325" alt="" /> Jest </Badge>
              </div>
            <ul className={`list-disc ${TEXT_COLORS.body} space-y-2 pl-4 mt-3 text-sm sm:text-base`}>
              <li>Integrated backend APIs into a Next.js frontend collaborated with Frontend team.
              </li> 
              <li>Built up all CRUD for 6+ Entities and managing their Prisma relations for the team.
              </li>
              <li>Built <span className={HEADING_COLORS.accent}>Search System</span> to support dynamic querying and filtering across key datasets.
              </li>
              <li>Built <span className={HEADING_COLORS.accent}> Feed System </span> for the opposing entities across the whole system and caching system.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </Section>
  )
}

export default Experience