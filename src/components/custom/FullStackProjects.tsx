import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent} from "../ui/card"
import { Badge } from "../ui"
import { FolderTree } from "lucide-react"
import HeavyCard from "./HeavyCard"
export default function FullStackProjects(){
  return (
    <>
    
  <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-pink-400">
              <FolderTree className="size-14"/><p>Projects</p>
            </CardTitle>
            <Badge variant="outline" className=" bg-black/30 text-white font- font-mono border-white/20 border-3 mr-2 text-lg font-bold px-4">FullStack <p className="text-pink-400">Development</p></Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
                <HeavyCard cardTitle = "Plan for Tests"  
                  cardLink = "https://www.youtube.com/embed/7v4L91mKOTU"
                  cardContent = {
                  <> stuck in preducament, wanted to prep mcqs from the booklet i Had. but was stuck in unproductive alternatives.Then an idea popped what if i just make something that'll let me make&take my own quizes even while not connected to an active internet connection 
                  <br /> 
                  Here was my solution design a ui, let user upload their quiz in json and save that json into localStorage for persistence \n The App kinda worked .. score 98/100 :3" 
                  </>
                  } 
                  Badges = {[
                    {badgeName : "TypeScript" , badgeLink :  "https://cdn.simpleicons.org/typescript/3178C6"},
                    {badgeName : "react js" , badgeLink :  "https://cdn.simpleicons.org/react/61DAFB"}]} 
                    ytMode={false}
                />
                <HeavyCard cardTitle = "Tier Maker App"  
                  cardLink = "projects/tier-maker.png"
                  cardContent = {
                  <> 
                  watching a streamer do a tier list for class in FFTA2 while in my what should be my next project era. <br /> so a thought came to my mind hy nobody is cloning this amazingly interesting and complex problem Here is my Tier Maker Clone <br/>equivalent problem i found on the internet is "KanBan" basically a nested drag and drop
                  Space Con <br />I was to lead the project to make a website for our annual astronomy fest at my uni showcasing the event and society along with a platform for event registration.
                  </>
                  }
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
            <CardTitle className="flex items-center gap-3 text-4xl text-blue-400">
              <FolderTree className="size-14"/><p>Projects</p>
            </CardTitle>
            <Badge variant="outline" className=" bg-black/30 text-white font- font-mono border-white/20 border-2 mr-2 text-lg font-bold px-4">FullStack <p className="text-blue-400">Development</p></Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
                <HeavyCard cardTitle = "SpaceCon"  
                  cardLink = "projects/space-con.png"
                  cardContent = {
                    <>
                      I was to lead the project to make a website for our annual astronomy fest at my uni showcasing the event and society along with a platform for event registration.
                    </>
                  }
                  Badges = {[
                    {badgeName : "TypeScript" , badgeLink :  "https://cdn.simpleicons.org/typescript/3178C6"},
                    {badgeName : "react js" , badgeLink :  "https://cdn.simpleicons.org/react/61DAFB"},
                    {badgeName : "posgreSQL" , badgeLink :  "https://cdn.simpleicons.org/postgresql/4169E1"}
                    ]} 
                />
                <HeavyCard cardTitle = "Pokemon Food Chain"  
                  cardLink = "https://www.youtube.com/embed/JGhiGZmF6Ig"
                  cardContent = {
                    <>
                    It is one of those projects i built on totally on a whim
                    <br />i am into pokemon and i m into world building so was ruminating about what the next region be based on so was having scattered thoughts on ecology of new region and wanted to map pokemon into levels of food chains and masses. 
                    <br />so i made a web to help me visualise and edit it too 
                    </>
                  }
                  Badges = {[
                    {badgeName : "TypeScript" , badgeLink :  "https://cdn.simpleicons.org/typescript/3178C6"},
                    {badgeName : "react js" , badgeLink :  "https://cdn.simpleicons.org/react/61DAFB"},
                    {badgeName : "node js" , badgeLink :  "https://cdn.simpleicons.org/nodedotjs/339933"},
                    {badgeName : "posgreSQL" , badgeLink :  "https://cdn.simpleicons.org/postgresql/4169E1"}
                    ]} 
                    ytMode={false}
                />  
          </CardContent>
        </Card>
      </Section>
      </>
    )
}