import { Avatar ,AvatarImage,AvatarFallback} from "../ui/avatar"
import { Section } from "./customized"
import { Badge } from "../ui"
// import { GraduationCap } from "lucide-react"
function Clubs() {
  return (
    <Section>
        <h2 className="text-4xl font-bold mb-10 text-center">Clubs & <span className="text-blue-400">Communities.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {name :'The Literature Society' , logo :"/soc/subhasha.png", position : "The President"},
             {name :'The Fine Arts Society', logo : "/soc/canvas.jpg" , position : "Fine Arts Head"},
              {name :'The Astronomy Society', logo : "/soc/nakshatra.png", position : "Technical Head"}
            ].map((club) => (
            <div className=" ">
              
            <div key={club.name} className="p-8 rounded-xl flex items-center justify-center  bg-black/20 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/40 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
              <div className="font-semibold text-2xl">{club.name}</div>
              <Avatar className=" size-20 mx-2 opacity-90">
                <AvatarImage src={club.logo} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <Badge variant="outline" className="text-neutral-400 text-md ml-1 border px-4 border-b-2 border-r-2 mt-4 border-neutral-700 ">{club.position
                }</Badge>
            </div>
            
          ))}
        </div>
      </Section>
  )
}

export default Clubs