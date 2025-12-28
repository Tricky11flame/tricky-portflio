import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent} from "../ui/card"
import { Badge } from "../ui"
import { Code } from "lucide-react"
import HeavyCard from "./HeavyCard" 
// import LightCard from "./LightCard"
export default function BackendProjects(){
  return (
    <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader className="mb-0 pb-0">
            <CardTitle className="flex items-center gap-3 text-4xl text-cyan-400">
              <Code className="size-14"/><p>Projects</p>
            </CardTitle>
          <Badge variant="outline" className=" bg-black/30 text-white font-mono border-green-600 mr-2 text-lg font-bold px-4 ml-8 mb-0">Backend<p className="text-cyan-400">Development</p></Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
                <HeavyCard cardTitle="Screenshot Organiser" cardLink="https://www.youtube.com/embed/HbyW_dh0ono" cardContent="Project Developed to manage my *important* screenshots" 
                  Badges =  {[{   badgeName:"Python",
                        badgeLink:"https://cdn.simpleicons.org/python/3776AB"
                      },
                    {   badgeName : "Bash",
                        badgeLink : "https://cdn.simpleicons.org/gnubash/4EAA25"
                    }]}
                />
                <HeavyCard cardTitle="Directory Sync over TCP" cardLink="/projects/tcp-comm.png" cardContent="Project Developed to manage my *important* screenshots" 
                  Badges =  {[{   badgeName:"javascript",
                        badgeLink:"https://cdn.simpleicons.org/javascript/F7DF1E"
                      },
                    {   badgeName : "TCP",
                        badgeLink : "https://cdn.simpleicons.org/wireshark/167EBA"
                    },
                    {   badgeName : "node js",
                        badgeLink : "https://cdn.simpleicons.org/nodedotjs/339933"
                    }]}
                />
          </CardContent>
        </Card>
      </Section>
  )
}