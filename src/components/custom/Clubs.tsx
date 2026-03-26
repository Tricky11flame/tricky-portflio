import { Avatar ,AvatarImage,AvatarFallback} from "../ui/avatar"
import { Section } from "./customized"
import { Badge } from "../ui"
import { clubsData } from "@/const/gridData"
import GridTypeCard from "./GridTypeCard"
// import { GraduationCap } from "lucide-react"

function Clubs() {
  return (
    <Section>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">Clubs & <span className="text-blue-400">Communities.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubsData.map((club) => (
            <div key={club.name} className=" ">
            <GridTypeCard className="p-8 flex items-center justify-center bg-black/20">
              <div className="font-semibold text-lg sm:text-xl md:text-2xl">{club.name}</div>
              <Avatar className=" size-20 mx-2 opacity-90">
                <AvatarImage src={club.logo} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </GridTypeCard>
            <Badge variant="outline" className="text-neutral-400 text-md ml-1 border px-4 border-b-2 border-r-2 mt-4 border-neutral-700 ">{club.position
                }</Badge>
            </div>
            
          ))}
        </div>
      </Section>
  )
}

export default Clubs