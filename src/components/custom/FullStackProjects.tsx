import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent} from "../ui/card"
import { Badge } from "../ui"
import { Code } from "lucide-react"
export default function FullStackProjects(){
  return (
  <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-cyan-400">
              <Code className="size-14"/><p>Projects</p>
            </CardTitle>
            <Badge variant="outline" className=" bg-black/30 text-white font- font-mono border-green-600 mr-2 text-lg font-bold px-4">FullStack <p className="text-cyan-400">Development</p></Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
                <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white"> Plan for Tests
                 <br />
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"><img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/react/61DAFB" alt="" /> react js
                  </Badge>
                  
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/typescript/3178C6" alt="" /> TypeScript </Badge>
                  
                  </h3>
                  <div className="flex ">
                <iframe 
                    src="https://www.youtube.com/embed/7v4L91mKOTU" title="YouTube video player"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="h-45 opacity-100 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4 p-0 mr-2" ></iframe>
                <span title="text" className=" ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Project Developed to manage my own small quizes to practice for
                    </span>
                      </div> 
            </div>
            <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white"> Tier Maker App
                    <br />
                    <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/typescript/3178C6" alt="" /> TypeScript </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"><img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/react/61DAFB" alt="" /> react js
                  </Badge>
                  <Badge variant="outline" className= "bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">
                   <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/postgresql/4169E1" alt="" /> posgreSQL
                  </Badge>
                  
                  
                  </h3>
                  <div className="flex ">
                <iframe 
                    src="projects/tier-maker.png" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    className="h-[180px] opacity-100 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4 p-0 mr-2"
                    srcDoc={`
                      <html>
                        <body style="margin:0; background: #171717; display: flex; justify-content: center; align-items: center; height: 100vh; overflow: hidden;">
                          <img src="/projects/tier-maker.png" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                        </body>
                      </html>
                    `}></iframe>
                <span title="text" className=" ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Built a clone of popular tier maker service !!
                </span>
                      </div> 
            </div>
            <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white"> SpaceCon
                    <br />
                    <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/typescript/3178C6" alt="" /> TypeScript </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"><img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/react/61DAFB" alt="" /> react js
                  </Badge>
                  <Badge variant="outline" className= "bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">
                   <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/postgresql/4169E1" alt="" /> posgreSQL
                  </Badge>
                  
                  
                  </h3>
                  <div className="flex ">
                <iframe 
                    src="projects/space-con.png" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    className="h-[180px] opacity-100 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4 p-0 mr-2"
                    srcDoc={`
                      <html>
                        <body style="margin:0; background: #171717; display: flex; justify-content: center; align-items: center; height: 100vh; overflow: hidden;">
                          <img src="/projects/space-con.png" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                        </body>
                      </html>
                    `}></iframe>
                <span title="text" className=" ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Built a clone of popular tier maker service !!
                </span>
                      </div> 
            </div>
            <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white"> Pokemon Food Chain
                    <br />
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"><img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/react/61DAFB" alt="" /> react js
                  </Badge>
                  <Badge variant="outline" className="bg-black/20  text-neutral-400 border-neutral-700 mt-2 mr-2">
                  <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/nodedotjs/339933" alt="" /> node js
                  </Badge>
                  <Badge variant="outline" className= "bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">
                   <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/postgresql/4169E1" alt="" /> posgreSQL
                  </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/typescript/3178C6" alt="" /> TypeScript </Badge>
                 
                  </h3>
                  <div className="flex ">
                <iframe 
                    src="https://www.youtube.com/embed/JGhiGZmF6Ig" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="h-45 opacity-100 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4 p-0 mr-2"></iframe>
                <span title="text" className=" ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Project Developed to manage my *important* screenshots
                    </span>
                      </div> 
            </div>
            
          </CardContent>
        </Card>
      </Section>
    )
}