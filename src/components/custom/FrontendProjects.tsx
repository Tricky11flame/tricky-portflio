import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent} from "../ui/card"
import { Badge } from "../ui"
import { Code } from "lucide-react"
export default function FrontendProjects(){
  return (
    <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-green-400">
              <Code className="size-14"/><p>Projects</p>
            </CardTitle>
          </CardHeader>
          
          <Badge variant="outline" className=" bg-black/30 text-white font-mono border-green-600 mr-2 text-lg font-bold px-4 ml-8 mb-0">Frontend <p className="text-green-400">Development</p></Badge>
          <CardContent className="grid grid-cols-2 gap-3">
                <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white">CarFilter  
                    {/* badges */}
                    <br />
                <Badge variant="outline" className=" bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="" /> javascipt 
                  </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"><img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/react/61DAFB" alt="" /> react js
                  </Badge>
                  
                  </h3> 
                <div className="flex">
                    <iframe 
                        src="/projects/carFilter.png" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" className="h-36 opacity-100 rounded-sm border border-white/10 border-red border-r-4 border-b-4 p-0 mr-2"
                        srcDoc={`
                          <html>
                            <body style="margin:0; background: #171717; display: flex; justify-content: center; align-items: center; height: 100vh; overflow: hidden;">
                              <img src="/projects/carFilter.png" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                            </body>
                          </html>
                        `}></iframe>
                    <span title="text" className="  ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Project Developed to manage my *important* screenshots
                    </span>
                  </div>
                  </div> 
                  <div title = "copy " className="mx-auto">
                      <h3 className="text-xl font-bold text-white"> Ticket Reservation 
                        <br />
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/typescript/3178C6" alt="" /> TypeScript </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"><img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/react/61DAFB" alt="" /> react js
                  </Badge>
                  
                      </h3> 
                  <div className="flex">
                    <iframe 
                        src="/projects/ticket-reservation.png" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" className="h-36 opacity-100 rounded-sm border border-white/10 border-red border-r-4 border-b-4 p-0 mr-2"
                        srcDoc={`
                          <html>
                            <body style="margin:0; background: #171717; display: flex; justify-content: center; align-items: center; height: 100vh; overflow: hidden;">
                              <img src="/projects/ticket-reservation.png" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                            </body>
                          </html>
                          `}
                          ></iframe>
                    <span title="text" className="  ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Project Developed to manage my *important* screenshots
                    </span>
                  </div> 
                
                    
                </div>
          </CardContent>
          <Badge variant="outline" className=" bg-black/30 text-white font-mono border-green-600 mr-2 text-lg font-bold px-4 ml-8 mb-0">Backend<p className="text-green-400">Development</p></Badge>
          <CardContent className="grid grid-cols-2 gap-3">
                
                <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white"> Screenshot Organiser
                    <br />
                <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/python/3776AB" alt="" /> Python </Badge>
                <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/gnubash/4EAA25" alt="" /> Bash </Badge>
                  </h3> 
                  <div className="flex">
                    <iframe 
                        src="https://www.youtube.com/embed/HbyW_dh0ono" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" className="h-36 opacity-100 rounded-sm border border-white/10 border-red border-r-4 border-b-4 p-0 mr-2"
                        // srcDoc={`
                        //   <html>
                        //     <body style="margin:0; background: #171717; display: flex; justify-content: center; align-items: center; height: 100vh; overflow: hidden;">
                        //       <img src="/projects/ticket-reservation.png" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                        //     </body>
                        //   </html>
                        // `}
                        ></iframe>
                    <span title="text" className="  ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Project Developed to manage my *important* screenshots
                    </span>
                  </div>
                </div>
                
            
            <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white "> Directory Sync over TCP
                    <br />
                <Badge variant="outline" className=" bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="" /> javascipt 
                  </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2"> <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/wireshark/167EBA" alt="" /> TCP </Badge>
                  <Badge variant="outline" className="bg-black/20  text-neutral-400 border-neutral-700 mt-2 mr-2">
                  <img className="h-3 m-[2px]" src="https://cdn.simpleicons.org/nodedotjs/339933" alt="" /> node js
                  </Badge>
                  </h3>
                  <div className="flex">
                    <iframe 
                        src="/projects/tcp-comm.png" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" className="h-36 opacity-100 rounded-sm border border-white/10 border-red border-r-4 border-b-4 p-0 mr-2"
                        srcDoc={`
                          <html>
                            <body style="margin:0; background: #171717; display: flex; justify-content: center; align-items: center; height: 100vh; overflow: hidden;">
                              <img src="/projects/tcp-comm.png" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                            </body>
                          </html>
                        `}
                        ></iframe>
                    <span title="text" className="  ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Project Developed to manage my *important* screenshots
                    </span>
                  </div> 
                </div>
            
          </CardContent>
        </Card>
      </Section>
  )
}