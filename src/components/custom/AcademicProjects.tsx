import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent} from "../ui/card"
// import { Badge } from "../ui"
import { Badge } from "../ui"
import { FolderTree } from "lucide-react"
import HeavyCard from "./HeavyCard"
export default function AcademicProjects(){
  return (
    <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-pink-400">
              <FolderTree className="size-14"/><p>Academic Projects</p>
            </CardTitle> 
            <Badge variant="outline" className=" bg-black/30 text-white font- font-mono border-white/20 border-3 mr-2 text-lg font-bold px-4">Embedded <p className="text-pink-400">Development</p></Badge>
          </CardHeader>


          <CardContent className="grid grid-cols-2 gap-3">  
            <HeavyCard cardTitle = "Three Shade Lamp" 
            cardLink = "https://www.youtube.com/embed/3OGlqg0YxkY" 
            cardContent={
              <>
              A  project made using leds and aurduino-uno that changes color in order or pressing button 
              </>
            }
            Badges = {[{ badgeName: "Hardware" , badgeLink :"https://cdn.simpleicons.org/oshw/E71519" },{badgeName : "Arduino", badgeLink : "https://cdn.simpleicons.org/arduino/00979D"}]} 
            ytMode={false}/>
            <HeavyCard cardTitle="Reaction Game" cardLink ="https://www.youtube.com/embed/m_63-_HBtbk" 
            cardContent={
              <>
              a project made to test reaction speed of the players.player is scored on the number of times he can match the reaction with the lighting of the goal bulb
              </>
            }  
            Badges=  {[{ badgeName: "Hardware" , badgeLink :"https://cdn.simpleicons.org/oshw/E71519" },{badgeName : "Arduino", badgeLink : "https://cdn.simpleicons.org/arduino/00979D"}]}  
            ytMode={false}/> 
          </CardContent>
        </Card>
      </Section>
  )
}