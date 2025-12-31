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
      cardContent : "So i was watching this series on Networking by Steve Tarzia, deep into lectures and was trying to study without constantly writing everything down.This was the solution \n a bash and python script when turned on keeps your screenshots seperate and organised and at the end will give you a .pdf" ,
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
      cardContent : "honestly it was a challenge by my professor to have a good assesment as well as \n practice hands on the networking and file system. in the preferred language of the user \n track folders and send the updates via tcp link and keep them in sync.",
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