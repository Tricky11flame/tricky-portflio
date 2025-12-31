import { Section } from "./customized"
import {techStack} from "@/assets/data.js"
function SoftwareDev() {
  return (
    <Section>
        <h2 className="text-4xl font-bold mb-10 text-center"> Software <span className="text-blue-400">Development </span>
          <p className="text-neutral-400 text-sm font-normal">with specialization in <span className="text-blue-400">Backend Development </span></p>
        </h2> 
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {techStack.map((tech) => (
        <div
          key={tech.name}
          className="p-4 rounded-xl flex items-center justify-center bg-black/20 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/40 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4"
        >
          <div className="font-semibold text-2xl mr-4 text-white">
            {tech.name}
          </div>
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 object-contain"
          />
        </div>
      ))}
    </div>
    </Section>
  )
}

export default SoftwareDev