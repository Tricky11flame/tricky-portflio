import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent} from "../ui/card"
import { Badge } from "../ui"
import { Code } from "lucide-react"
import HeavyCard from "./HeavyCard"
export default function FullStackProjects(){
  return (
    <>
    
  <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-teal-400">
              <Code className="size-14"/><p>Projects</p>
            </CardTitle>
            <Badge variant="outline" className=" bg-black/30 text-white font- font-mono border-green-600 mr-2 text-lg font-bold px-4">FullStack <p className="text-teal-400">Development</p></Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
                <HeavyCard cardTitle = "Plan for Tests"  
                  cardLink = "https://www.youtube.com/embed/7v4L91mKOTU"
                  cardContent = "Project Developed to manage my own small quizes to practice for screenshots" 
                  Badges = {[
                    {badgeName : "TypeScript" , badgeLink :  "https://cdn.simpleicons.org/typescript/3178C6"},
                    {badgeName : "react js" , badgeLink :  "https://cdn.simpleicons.org/react/61DAFB"}]} 
                />
                <HeavyCard cardTitle = "Tier Maker App"  
                  cardLink = "projects/tier-maker.png"
                  cardContent = "Project Developed to manage my own small quizes to practice for screenshots" 
                  Badges = {[
                    {badgeName : "TypeScript" , badgeLink :  "https://cdn.simpleicons.org/typescript/3178C6"},
                    {badgeName : "react js" , badgeLink :  "https://cdn.simpleicons.org/react/61DAFB"},
                    {badgeName : "posgreSQL" , badgeLink :  "https://cdn.simpleicons.org/postgresql/4169E1"}
                    ]} 
                />
              </CardContent>
            </Card>
    </Section>
  <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-emerald-400">
              <Code className="size-14"/><p>Projects</p>
            </CardTitle>
            <Badge variant="outline" className=" bg-black/30 text-white font- font-mono border-green-600 mr-2 text-lg font-bold px-4">FullStack <p className="text-emerald-400">Development</p></Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
                <HeavyCard cardTitle = "SpaceCon"  
                  cardLink = "projects/space-con.png"
                  cardContent = "Project Developed to manage my own small quizes to practice for screenshots" 
                  Badges = {[
                    {badgeName : "TypeScript" , badgeLink :  "https://cdn.simpleicons.org/typescript/3178C6"},
                    {badgeName : "react js" , badgeLink :  "https://cdn.simpleicons.org/react/61DAFB"},
                    {badgeName : "posgreSQL" , badgeLink :  "https://cdn.simpleicons.org/postgresql/4169E1"}
                    ]} 
                />
                <HeavyCard cardTitle = "Pokemon Food Chain"  
                  cardLink = "https://www.youtube.com/embed/JGhiGZmF6Ig"
                  cardContent = "Project Developed to manage my own small quizes to practice for screenshots" 
                  Badges = {[
                    {badgeName : "TypeScript" , badgeLink :  "https://cdn.simpleicons.org/typescript/3178C6"},
                    {badgeName : "react js" , badgeLink :  "https://cdn.simpleicons.org/react/61DAFB"},
                    {badgeName : "node js" , badgeLink :  "https://cdn.simpleicons.org/nodedotjs/339933"},
                    {badgeName : "posgreSQL" , badgeLink :  "https://cdn.simpleicons.org/postgresql/4169E1"}
                    ]} 
                />  
          </CardContent>
        </Card>
      </Section>
      </>
    )
}