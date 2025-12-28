import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent} from "../ui/card"
import { Badge } from "../ui"
import { Code } from "lucide-react"
import HeavyCard from "./HeavyCard" 
// import LightCard from "./LightCard"
export default function FrontendProjects(){
  return (
    <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader className="mb-0 pb-0">
            <CardTitle className="flex items-center gap-3 text-4xl text-sky-400">
              <Code className="size-14"/><p>Projects</p>
            </CardTitle>
          <Badge variant="outline" className=" bg-black/30 text-white font- font-mono border-green-600 mr-2 text-lg font-bold px-4">Frontend <p className="text-sky-400">Development</p></Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3 ">
          <HeavyCard cardTitle = "CarFilter"  cardLink = "/projects/carFilter.png" 
            cardContent = "Project Developed to manage my *important* screenshots" 
            Badges = {[{badgeName : "javascipt" , badgeLink :  "https://cdn.simpleicons.org/javascript/F7DF1E"},{badgeName : "react js" , badgeLink :  "https://cdn.simpleicons.org/react/61DAFB"}]} />
          <HeavyCard cardTitle = "Ticket Reservation"  cardLink = "/projects/ticket-reservation.png"
            cardContent = "Project Developed to manage my *important* screenshots" 
            Badges = {[{badgeName : "TypeScript" , badgeLink :  "https://cdn.simpleicons.org/typescript/3178C6"},{badgeName : "react js" , badgeLink :  "https://cdn.simpleicons.org/react/61DAFB"}]} />
          </CardContent>
        </Card>
      </Section>
  )
}