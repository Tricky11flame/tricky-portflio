import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent} from "../ui/card"
import { Badge } from "../ui"
import { FolderTree } from "lucide-react"
import HeavyCard from "./HeavyCard" 
// import LightCard from "./LightCard"
export default function BackendProjects(){
  const BEndProjects = [
    {
      cardTitle : "Directory Sync over TCP",
      cardLink : "/projects/tcp-comm.png",
      cardContent :<>Honestly it was a challenge by a professor to take an assesment as well as have us a hands on experience with networking and file system. In our preferred language, we were asked to, <span className="text-yellow-300 font-bold">track folders and send the updates via tcp link and keep them in sync. </span> </>,
      Badges : [
        {   badgeName:"javascript",badgeLink:"https://cdn.simpleicons.org/javascript/F7DF1E"},
        {   badgeName : "TCP",badgeLink : "https://cdn.simpleicons.org/wireshark/167EBA"},
        {   badgeName : "node js",badgeLink : "https://cdn.simpleicons.org/nodedotjs/339933"}
      ],
      ytMode : false
    },
    {
      cardTitle : "Screenshot Organiser",
      cardLink : "https://www.youtube.com/embed/HbyW_dh0ono",
      cardContent : <> So i was watching a lecture series, deep into it, tried to study without constantly writing everything down.This was my solution a bash and python script when turned on <span className="text-yellow-300 font-bold">keeps your screenshots organised for the session</span> and at the end will give you a pdf
      </> ,
      Badges : [
        {   badgeName:"Python",badgeLink:"https://cdn.simpleicons.org/python/3776AB"},
        {   badgeName : "Bash",badgeLink : "https://cdn.simpleicons.org/gnubash/4EAA25"}
      ]
    }
  ]
  return (
    <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader className="mb-0 pb-0">
            <CardTitle className="flex items-center gap-3 text-4xl text-blue-400">
              <FolderTree className="size-14"/><p>Projects</p>
            </CardTitle>
          <Badge variant="outline" className=" bg-black/30 text-white font-mono border-white/20 border-2 mr-2 text-lg font-bold px-4 mb-0">Backend<p className="text-blue-400">Development</p></Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
              {
            BEndProjects.map((BEndProject) => {return(
              <HeavyCard cardTitle = {BEndProject.cardTitle} 
              cardLink = {BEndProject.cardLink} 
              cardContent = {BEndProject.cardContent} 
              Badges = {BEndProject.Badges} 
              ytMode={BEndProject.hasOwnProperty("ytMode")? BEndProject.ytMode : false } />
            )})
              }
          </CardContent>
        </Card>
      </Section>
  )
}