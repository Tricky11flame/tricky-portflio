import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent} from "../ui/card"
// import { Badge } from "../ui"
import { Code } from "lucide-react"
import HeavyCard from "./HeavyCard"
export default function AcademicProjects(){
  return (
    <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-green-400">
              <Code className="size-14"/><p>Academic Projects</p>
            </CardTitle> 
          </CardHeader>


          <CardContent className="grid grid-cols-2 gap-3">  
            <HeavyCard cardTitle = "Three Shade Lamp" cardLink = "https://www.youtube.com/embed/3OGlqg0YxkY" cardContent=" Project Developed to manage my own small quizes to practice for" 
            Badges = {[{ badgeName: "Hardware" , badgeLink :"https://cdn.simpleicons.org/oshw/E71519" },{badgeName : "Arduino", badgeLink : "https://cdn.simpleicons.org/arduino/00979D"}]} />
            <HeavyCard cardTitle="Reaction Game" cardLink ="https://www.youtube.com/embed/m_63-_HBtbk" cardContent="Built a clone of popular tier maker service !!"  Badges=  {[{ badgeName: "Hardware" , badgeLink :"https://cdn.simpleicons.org/oshw/E71519" },{badgeName : "Arduino", badgeLink : "https://cdn.simpleicons.org/arduino/00979D"}]}  /> 
          </CardContent>
        </Card>
      </Section>
  )
}