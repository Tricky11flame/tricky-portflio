import { Section } from "./customized"
import { MapPin } from "lucide-react"
function Home() {
  return (
    <Section>
        <div className="space-y-6 relative z-10">
          <h1 className="text-7xl font-bold tracking-tight">
            Hey, I am <span className="text-blue-500">Kartikay</span>.
          </h1>
          <p className="text-3xl text-neutral-400 font-light ml-2">
            Full Stack Developer @ NSUT ECE'26 <br />
            {/* <p> specialised in {"<>  back end dev  </>"} </p> */}
          </p>
          <p className="text-2xl text-white/40 font-light ml-2">
            Based in <MapPin className="inline "/> Delhi, India. <span className="text-blue-500  font-bold">Certified Cloud Practioner</span> with <span className="text-blue-500 font-bold">3 Months of Internship</span> experience in Backend Development with a <span className="text-blue-500 font-bold">portfolio of diverse projects</span> and a ton of teamwork and leadership experience. 
            <br />
            <p className=" text-xl text-white/30 mt-8">
              Seeking SDE-1 or internship for similar roles, to be awarded graduate degree by May 2026 
            </p>
            {/* <p> specialised in {"<>  back end dev  </>"} </p> */}
          </p>
        </div>
      </Section>
  )
}

export default Home