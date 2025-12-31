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
                  <> Stuck in preducament, wanted to prep MCQs. Then an idea popped, what if i just make something that'll <span className="text-yellow-300 font-bold">let me make and take my own quizes</span> even while not connected to an active internet connection Here is my solution, quiz in JSON and <span className="text-yellow-300 font-bold">save that into localStorage for persistence 
                  </span>
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
                  Watching a streamer <span className="text-yellow-300 font-bold">do a tier list</span> for class in FFTA2 while in my what should be my next project era. So a thought occurred, this amazingly interesting and complex problem is <span className="text-yellow-300 font-bold">yet to have a youtube tutorial</span>. Here is my <span className="text-yellow-300 font-bold">Tier Maker Clone</span>, an implementation of a <span className="text-yellow-300 font-bold">nested drag and drop.</span>
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
                      As the technical head of Nakshatra, I was to lead the project to make a website for our annual Astronomy & Mathematics fest at my University i.e. NSUT, <span className="font-bold text-yellow-300">showcasing the events</span> and the hosting society along with providing <span className="font-bold text-yellow-500">a platform for event registration.</span>
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
                    It is one of those projects i built on totally on a whim. I am into pokemon and I m into world building and I was ruminating about what the next region would look like. So <span className="font-bold text-yellow-300">I made a web to help me visualise and edit pokemon food web levels.</span> 
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