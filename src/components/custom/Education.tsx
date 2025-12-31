import { Section } from "./customized"
import { Card ,CardHeader,CardTitle,CardContent } from "../ui/card"
import { BookOpen, GraduationCap } from "lucide-react"
import { Badge } from "../ui"
function Education() {
  return (
    <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-lg hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-pink-400">
              <GraduationCap className="size-14"/> Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <h3 className="text-2xl font-semibold text-white">Netaji Subhas University of Technology</h3>
            <p className="text-lg text-neutral-300">B.Tech in Electronics and Communication Engineering</p>
            <Badge variant="outline" className="text-neutral-400 border-neutral-700 mt-2">2022 - 2026</Badge>
            <h3 className="text-2xl font-semibold text-white">D.A.V Rohini Public School</h3>
            <p className="text-lg text-neutral-300 ">CBSE XII Standard </p>
            <Badge variant="outline" className="text-neutral-400 border-neutral-700 mt-2 ">2021 - 2022</Badge>
            <p className="text-lg text-neutral-300  ">CBSE X Standard</p>
            <Badge variant="outline" className="text-neutral-400 border-neutral-700 mt-2 ">2019 - 2020</Badge> 
            
          </CardContent>
        </Card>
      </Section>
  )
}

export default Education