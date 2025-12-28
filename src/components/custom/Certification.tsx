import { Section } from "./customized"
import {certData} from "@/assets/data.js"
function Certification() {
  return (
    <Section>
        <h2 className="text-4xl font-bold mb-10 text-center"> Certifications<span className="text-blue-400"> & Badges </span>
          <p className="text-neutral-400 text-sm font-normal"> focused on development<span className="text-blue-400"> and aws cloud </span></p>
        </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-6">
            {certData.map((cert, index) => (
              <div
                key={cert.name}
                className="p-1 rounded-xl flex items-center justify-center bg-black/10 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/40 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4"
              >
                <a href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer" className=""> 
              <img src={cert.image} className="w-35 text-white " alt={cert.image} >
              </img>
              </a>
              </div>
            ))}
          </div>
          
      </Section>
  )
}

export default Certification