import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent} from "../ui/card"
import { Badge } from "../ui"
import { Code } from "lucide-react"
export default function AcademicProjects(){
  return (
    <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-yellow-300">
              <Code className="size-14"/><p>Academic Projects</p>
            </CardTitle>
  
                
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
                <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white"> Three Shade Lamp
                    <br />
                <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/oshw/E71519" alt="" /> Hardware </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/arduino/00979D" alt="" /> Arduino </Badge>
                
                  </h3>
                  <div className="flex ">
                <iframe 
                    src="https://www.youtube.com/embed/3OGlqg0YxkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="h-[180px] opacity-100 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4 p-0 mr-2" 
                    // srcDoc={`
                    //   <style>
                    //     body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: black; overflow: hidden; }
                    //     img { max-width: 100%; max-height: 100%; object-fit: contain; }
                    //   </style>
                    //   <img src="YOUR_IMAGE_URL_HERE" />`}
                    ></iframe>
                <span title="text" className=" ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Project Developed to manage my own small quizes to practice for
                    </span>
                      </div> 
            </div>
            <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white"> Reaction Game
                    <br />
                
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/oshw/E71519" alt="" /> Hardware </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/arduino/00979D" alt="" /> Arduino </Badge>
                  </h3>
                  <div className="flex ">
                <iframe 
                    src="https://www.youtube.com/embed/m_63-_HBtbk" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    className="h-[180px] opacity-100 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4 p-0 mr-2"
    //                 srcDoc={`
    // <style>
    //   body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: black; overflow: hidden; }
    //   img { max-width: 100%; max-height: 100%; object-fit: contain; }
    // </style>
    // <img src="YOUR_IMAGE_URL_HERE" />`}
  ></iframe>
                <span title="text" className=" ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Built a clone of popular tier maker service !!
                </span>
                      </div> 
            </div>
            
            
          </CardContent>
        </Card>
      </Section>
  )
}