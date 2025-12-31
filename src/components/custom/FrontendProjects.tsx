import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent} from "../ui/card"
import { Badge } from "../ui"
import { FolderTree } from "lucide-react"
import HeavyCard from "./HeavyCard" 
// import LightCard from "./LightCard"
export default function FrontendProjects(){
  const FEndProjects = [
    {
      cardTitle : "Car Filter",
      cardLink : "projects/carFilter.png",
      cardContent : "A project that lets you see a filtered view of cars \n A demo project to show my frontend skills \n Showcase good understanding of fundamentals of webdev",
      Badges :[
        {badgeName : "javascipt" ,badgeLink :  "https://cdn.simpleicons.org/javascript/F7DF1E"},
        { badgeName : "react js" , badgeLink :  "https://cdn.simpleicons.org/react/61DAFB"}
      ]
    },
    {
      cardTitle : "Ticket Reservation",
      cardLink : "/projects/ticket-reservation.png",
      cardContent : "A project around creatig a UI copy a ticket reservation system built on top of shad-cn library \n showcasing skills to use new libraries and develop according to project specifications",
      Badges :[{badgeName : "TypeScript" , badgeLink :  "https://cdn.simpleicons.org/typescript/3178C6"},{badgeName : "react js" , badgeLink :  "https://cdn.simpleicons.org/react/61DAFB"}]
    }
  ]
  return (
    <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader className="mb-0 pb-0">
            <CardTitle className="flex items-center gap-3 text-4xl text-pink-400">
              <FolderTree className="size-14"/><p>Projects</p>
            </CardTitle>
          <Badge variant="outline" className=" bg-black/30 text-white font- font-mono border-white/20 border-2 mr-2 text-lg font-bold px-4">Frontend <p className="text-pink-400">Development</p></Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3 ">
            {
              FEndProjects.map((FEndProject) => {return(
                <HeavyCard cardTitle = {FEndProject.cardTitle} 
                cardLink = {FEndProject.cardLink} 
                cardContent = {FEndProject.cardContent} 
                Badges = {FEndProject.Badges} />
              )})
            }
          
          </CardContent>
        </Card>
      </Section>
  )
}