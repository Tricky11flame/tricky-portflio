import { Section } from "./customized"
import { Card,CardHeader,CardTitle,CardContent, } from "../ui/card"
import { Badge } from "../ui/badge"
// import { Code } from "lucicde-react"
import { BriefcaseBusiness } from "lucide-react"
function Experience() {
  return (
    <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-pink-400">
              <BriefcaseBusiness className="size-14"/> Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-l-2 border-neutral-700 pl-6 py-2">
              <h3 className="text-xl font-bold text-white">Backend Development Intern</h3>
              <Badge className=" font-mono text-sm bg-black/20  text-neutral-400 border-neutral-700 mt-2 mr-2">Sponsica | May '25 - August '25</Badge><br />
                
                <Badge variant="outline" className=" bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="" /> javascipt 
                  </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"><img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/react/61DAFB" alt="" /> react js
                  </Badge>
                  <Badge variant="outline" className="bg-black/20  text-neutral-400 border-neutral-700 mt-2 mr-2">
                  <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/nodedotjs/339933" alt="" /> node js
                  </Badge>
                  <Badge variant="outline" className= "bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">
                   <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/postgresql/4169E1" alt="" /> posgreSQL
                  </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/typescript/3178C6" alt="" /> TypeScript </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/jest/C21325" alt="" /> Jest </Badge>
              <ul className="list-disc text-neutral-300 space-y-2 pl-4">
                <li>Integrated backend APIs into a Next.js frontend collaborated with Frontend team.
                </li>
                <li>Set up organization-wide GitHub workflows and Testing Methods using jest and supertest.
                </li>
                <li>Built up all CRUD for 6+ Entities and managing their Prisma relations for the team.
                </li>
                <li>Built <span className="text-pink-400">Search System</span> to support dynamic querying and filtering across key datasets.
                </li>
                <li>Built <span className="text-pink-400"> Feed System </span> for the opposing entities across the whole system and caching system.
                </li>
                <li>Built custom Admin Dashboard and User Metrics to keep track of our growth.
                </li>
                <li>Built <span className="text-pink-400"> Notification Systems</span> , and other complex systems for UX enhancement.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </Section>
  )
}

export default Experience