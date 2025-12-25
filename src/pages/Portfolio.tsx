import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, BookOpen, Code, Terminal, Zap
    // ,    LocationEdit
 } from "lucide-react";
 import { Avatar,AvatarImage,AvatarFallback } from "@/components/ui";
// import { ScrollAr} from "@radix-ui/";
// import { ScrollArea } from "@/components/ui/scroll-area";

// certData.js
export const certData = [
  
  {
    "name": "AWS Educate Getting Started with Security",
    "image": "/badges/aws-educate-getting-started-with-security-training.png",
    "url": "https://www.credly.com/badges/f75337ac-8ac7-43fb-9acf-e2f5ab8ddad5/public_url"
  },
  {
    "name": "AWS Educate Getting Started with Networking",
    "image": "/badges/aws-educate-getting-started-with-networking-training.png",
    "url": "https://www.credly.com/badges/1f4f8b7f-ff42-45e2-af10-8a83867c5efe/public_url"
  },
  {
    "name": "AWS Educate Getting Started with Databases",
    "image": "/badges/aws-educate-getting-started-with-databases-training.png",
    "url": "https://www.credly.com/badges/d87e0cb8-190e-46dd-84af-350b7efd1a8e/public_url"
  },
  {
    "name": "AWS Educate Getting Started with Storage",
    "image": "/badges/aws-educate-getting-started-with-storage-training.png",
    "url": "https://www.credly.com/badges/c1e4534a-041a-4706-8efc-4ba44e0f66d6/public_url"
  },
  {
    "name": "AWS Educate Web Builder",
    "image": "/badges/aws-educate-web-builder-training.png",
    "url": "https://www.credly.com/badges/843017a0-669e-45d7-9c46-7abc4252b034/public_url"
  },
  {
    "name": "AWS Certified Cloud Practitioner",
    "image": "/badges/aws-certified-cloud-practitioner.png",
    "url": "https://www.credly.com/badges/a3a1bc54-b839-492a-8183-dc9524cafa8e/public_url"
  },
  {
    "name": "0-100 Full Stack Web Development",
    "image": "/badges/harkira.png",
    "url": "https://app.100xdevs.com/certificate/verify/13V4LQW3"
  },
  {
    "name": "AWS Educate Introduction to Generative AI",
    "image": "/badges/aws-educate-introduction-to-generative-ai-training.png",
    "url": "https://www.credly.com/badges/4e9d5dac-6c71-4d9d-94ef-b8276957170a/public_url"
  },
  {
    "name": "AWS Educate Getting Started with Serverless",
    "image": "/badges/aws-educate-getting-started-with-serverless-training.png",
    "url": "https://www.credly.com/badges/18d552fd-0850-4d4d-a4bd-2ba4155649d1/public_url"
  },
  {
    "name": "AWS Educate Getting Started with Compute",
    "image": "/badges/aws-educate-getting-started-with-compute-training.png",
    "url": "https://www.credly.com/badges/fe795625-af6e-4301-b1b5-2019d2ce6ed5/public_url"
  },
  {
    "name": "AWS Educate Introduction to Cloud 101",
    "image": "/badges/aws-educate-introduction-to-cloud-101-training.png",
    "url": "https://www.credly.com/badges/5a3ca828-8f77-4739-8d8f-7127a5ccc70a/public_url"
  },{
    "name": "AWS Educate Getting Started with Cloud Ops",
    "image": "/badges/aws-educate-getting-started-with-cloud-ops-training.png",
    "url": "https://www.credly.com/badges/2261805a-d8db-4693-909f-bcd454d5475c/public_url"
  },
];
const techStack = [
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/FFFFFF" }, // White for contrast
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/cloudways/232F3E" }, // Or use FFFFFF if background is dark
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" }
]
// Reusable Section Component
const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="h-screen w-full snap-start flex flex-col justify-center items-center p-6 border-b border-neutral-900/50">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      className="w-full max-w-4xl"
    >
      {children}
    </motion.div>
  </section>
);

const BentoGridBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    
    {/* This wrapper holds Grid + Spotlights and applies the fade-out mask to all of them */}
    <div 
      className="absolute inset-0"
      style={{
        maskImage: 'linear-gradient(to bottom, black 20%, transparent 90%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 90%)'
      }}
    >
      {/* 1. The Grid Layer */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          // I used a neutral dark gray (#333) for a cleaner engineering look. 
          // If you want green lines, change #333 back to #380.
          backgroundImage: 'linear-gradient(#333 2px, transparent 2px), linear-gradient(to right, #333 2px, transparent 2px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* 2. Spotlight: Main Center (Blue) */}
      <div className="absolute top-[-20%] left-0 right-0 h-[1000px] bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(59,130,246,0.40),transparent)] opacity-70" />

      {/* 3. Spotlight: Top Left (Purple) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_farthest-side_at_50%_50%,rgba(168,85,247,0.5),transparent)] opacity-65" />

      {/* 4. Spotlight: Top Right (Cyan/Teal) */}
      <div className="absolute top-[10%] right-[-15%] w-[500px] h-[500px] bg-[radial-gradient(circle_farthest-side_at_50%_50%,rgba(6,182,212,0.45),transparent)] opacity-50" />

       {/* 5. Spotlight: Random Small Glow near "Intro" text area (Indigo) */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-[radial-gradient(circle_farthest-side_at_50%_50%,rgba(99,102,241,0.42),transparent)] opacity-50" />
    
    </div>
  </div>
);

export default function Portfolio() {
  return (
    // Parent container: Handles the scroll snap
    <div className="relative h-screen w-full bg-neutral-950 text-neutral-100 overflow-hidden">

      <BentoGridBackground />
      <div className="absolute inset-0 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* 1. Intro */}
      <Section>
        <div className="space-y-6 relative z-10">
          <h1 className="text-7xl font-bold tracking-tight">
            Hey, I am <span className="text-blue-500">Kartikay</span>.
          </h1>
          <p className="text-3xl text-neutral-400 font-light">
            Full Stack Developer @ NSUT ECE'26 <br />
            {/* <p> specialised in {"<>  back end dev  </>"} </p> */}
          </p>
        </div>
      </Section>

      

      {/* 3. Clubs */}

      {/* SECTION */}
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
      
      {/* 4. Experience */}
      <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-pink-400">
              <Code className="size-14"/> Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-l-2 border-neutral-700 pl-6 py-2">
              <h3 className="text-xl font-bold text-white">Backend Development Intern</h3>
              <Badge className=" font-mono text-sm bg-black/20  text-neutral-400 border-neutral-700 mt-2 mr-2">Sponsica | May '25 - August '25</Badge><br />
                <Badge variant="outline" className=" bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">
                Typescript
                  </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">
                Express.js
                  </Badge>
                  <Badge variant="outline" className="bg-black/20  text-neutral-400 border-neutral-700 mt-2 mr-2">
                Prisma ORM
                  </Badge>
                  <Badge variant="outline" className= "bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">
                PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mb-4 mr-2">
                  jest and supertest.
                  </Badge> 
              <ul className="list-disc text-neutral-300 space-y-2 pl-4">
                <li>Integrated backend APIs into a Next.js frontend collaborated with Frontend team.
                </li>
                <li>Set up organization-wide GitHub workflows and Testing Methods using jest and supertest.
                </li>
                <li>Built up all CRUD for 6+ Entities and managing their Prisma relations for the team.
                </li>
                <li>Built Search System to support dynamic querying and filtering across key datasets.
                </li>
                <li>Built Feed System for the opposing entities across the whole system and caching system.
                </li>
                <li>Built custom Admin Dashboard and User Metrics to keep track of our growth.
                </li>
                <li>Built Notification Systems , and other complex systems for UX enhancement.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* 5. T-Shaped Skills */}
      

      {/* 6. ECE Background */}
      {/* <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl 0 border-b-4 border-r-4 ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-yellow-500 ">
              <Cpu className="size-14"/> Electronics & Communication
            </CardTitle>
            <CardDescription className="text-white/70  ml-2">Bridging hardware and software</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-sm bg-black/2 border-1 border-white/20 backdrop-blur-md shadow-xl hover:bg-black/40 hover:border-white/20 transition-all duration-300 border-b-2 border-r-2 ">
              <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                <Zap className="w-4 h-4 text-yellow-500 " /> Embedded Systems
              </div>
              <p className="text-sm text-neutral-400">Microcontrollers, RTOS, Sensor Interfacing</p>
            </div>
            <div className="p-4 rounded-sm bg-black/2 border-1 border-white/20 backdrop-blur-md shadow-xl hover:bg-black/40 hover:border-white/20 transition-all duration-300 border-b-2 border-r-2">
              <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                <Terminal className="w-4 h-4 text-yellow-500" /> Digital Logic
              </div>
              <p className="text-sm text-neutral-400">Verilog, FPGA, Circuit Design</p>
            </div>
          </CardContent>
        </Card>
      </Section> */}

{/*  */}
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
      {/* PROJECT */}
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
                    <Badge variant="outline" className="ml-2 mb-2 bg-black/20 text-neutral-400 border-neutral-700 mr-2">Typescript</Badge>
                      <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700  mr-2">Express.js</Badge>
                  </h3> 
                <div className="flex">
                    <iframe 
                        src="/projects/carFilter.png" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" className="h-36 opacity-100 rounded-sm border border-white/10 border-red border-r-4 border-b-4 p-0 mr-2"></iframe>
                    <span title="text" className="  ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Project Developed to manage my *important* screenshots
                    </span>
                  </div>
                  </div> 
                  <div title = "copy " className="mx-auto">
                      <h3 className="text-xl font-bold text-white"> Ticket Reservation 
                        <Badge variant="outline" className="ml-2 mb-2 bg-black/20 text-neutral-400 border-neutral-700 mr-2">Typescript</Badge>
                          <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">Express.js</Badge>
                      </h3> 
                  <div className="flex">
                    <iframe 
                        src="/projects/ticket-reservation.png" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" className="h-36 opacity-100 rounded-sm border border-white/10 border-red border-r-4 border-b-4 p-0 mr-2"></iframe>
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
                    <Badge variant="outline" className="ml-2 mb-2 bg-black/20 text-neutral-400 border-neutral-700 mr-2">Typescript</Badge>
                      <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700  mr-2">Express.js</Badge>
                  </h3> 
                  <div className="flex">
                    <iframe 
                        src="https://www.youtube.com/embed/HbyW_dh0ono" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" className="h-36 opacity-100 rounded-sm border border-white/10 border-red border-r-4 border-b-4 p-0 mr-2"></iframe>
                    <span title="text" className="  ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Project Developed to manage my *important* screenshots
                    </span>
                  </div>
                </div>
                
            
            <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white "> Directory Sync over TCP
                    <Badge variant="outline" className="ml-2 mb-2 bg-black/20 text-neutral-400 border-neutral-700 mr-2">Typescript</Badge>
                      <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700  mr-2">Express.js</Badge>
                  </h3>
                  {/* <div className="flex">
                    <div className="aspect-video w-auto">
                      <img title = "image" src="/projects/tcp-comm.png" className="h-36  opacity-100 mr-10 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4 " alt="text"/>
                    </div>
                      
                  </div> */}

                  <div className="flex">
                    <iframe 
                        src="/projects/tcp-comm.png" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share" className="h-36 opacity-100 rounded-sm border border-white/10 border-red border-r-4 border-b-4 p-0 mr-2"></iframe>
                    <span title="text" className="  ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Project Developed to manage my *important* screenshots
                    </span>
                  </div> 
                </div>
            
          </CardContent>
        </Card>
      </Section>

      {/* LMAOOOOOO OHOHOHOOHOHOOOO */}


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
                    <Badge variant="outline" className="ml-2 mb-2 bg-black/20 text-neutral-400 border-neutral-700 mr-2">Typescript</Badge>
                      <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">Express.js</Badge>
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
                    <Badge variant="outline" className="ml-2 mb-2 bg-black/20 text-neutral-400 border-neutral-700 mr-2">Typescript</Badge>
                      <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">Express.js</Badge>
                  </h3>
                  <div className="flex ">
                <iframe 
                    src="projects/tier-maker.png" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    className="h-45 opacity-100 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4 p-0 mr-2"></iframe>
                <span title="text" className=" ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Built a clone of popular tier maker service !!
                </span>
                      </div> 
            </div>
            <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white"> Astronomy Festival
                    <Badge variant="outline" className="ml-2 mb-2 bg-black/20 text-neutral-400 border-neutral-700 mr-2">Typescript</Badge>
                      <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700  mr-2">Express.js</Badge>
                  </h3> 
                <img title = "image" src="/projects/space-con.png" className="h-45  opacity-100 mr-10 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4" alt="text"/>
                </div>
            <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white"> Pokemon Food Chain
                    <Badge variant="outline" className="ml-2 mb-2 bg-black/20 text-neutral-400 border-neutral-700 mr-2">Typescript</Badge>
                      <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">Express.js</Badge>
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



      <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-yellow-300">
              <Code className="size-14"/><p>Academic Projects</p>
            </CardTitle>
            <Badge variant="outline" className=" bg-black/30 text-white font- font-mono border-yellow-400 mr-2 text-lg font-bold px-4">Electronics<p className="text-yellow-300">& Communication</p></Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
                <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white"> Three Shade Lamp
                    <Badge variant="outline" className="ml-2 mb-2 bg-black/20 text-neutral-400 border-neutral-700 mr-2">Typescript</Badge>
                      <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">Express.js</Badge>
                  </h3>
                  <div className="flex ">
                <iframe 
                    src="https://www.youtube.com/embed/3OGlqg0YxkY" title="YouTube video player"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="h-45 opacity-100 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4 p-0 mr-2" ></iframe>
                <span title="text" className=" ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Project Developed to manage my own small quizes to practice for
                    </span>
                      </div> 
            </div>
            <div title = "copy " className="mx-auto">
                  <h3 className="text-xl font-bold text-white"> Reaction Game
                    <Badge variant="outline" className="ml-2 mb-2 bg-black/20 text-neutral-400 border-neutral-700 mr-2">Typescript</Badge>
                      <Badge variant="outline" className="bg-black/20 text-neutral-400 border-neutral-700 mt-2 mr-2">Express.js</Badge>
                  </h3>
                  <div className="flex ">
                <iframe 
                    src="https://www.youtube.com/embed/m_63-_HBtbk" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    className="h-45 opacity-100 rounded-sm border border-slate-300/80 border-red border-r-4 border-b-4 p-0 mr-2"></iframe>
                <span title="text" className=" ml-2  backdrop-blur-3xl  text-white/95 font-medium font-mono wrap-anywhere p-4 rounded-sm  content-center justify-end-safe border border-white/10 border-r-2 border-b-2 text-sm  opacity-80">
                      Built a clone of popular tier maker service !!
                </span>
                      </div> 
            </div>
            
            
          </CardContent>
        </Card>
      </Section>
      {/* 7. Link to Extra */}


      <Section>
        <h2 className="text-4xl font-bold mb-10 text-center">Clubs & Communities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {name :'The Literature Society' , logo :"image.png", position : "The President"},
             {name :'The Fine Arts Society', logo : "277592156_998744307408362_9115431227935864092_n.jpg" , position : "Fine Arts Head"},
              {name :'The Astronomy Society', logo : "image copy.png", position : "Technical Head"}
            ].map((club) => (
            <div className=" ">
              
            <div key={club.name} className="p-8 rounded-xl flex items-center justify-center  bg-black/20 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/40 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
              <div className="font-semibold text-2xl">{club.name}</div>
              <Avatar className=" size-20 mx-2 opacity-90">
                <AvatarImage src={"./public/"+club.logo} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <Badge variant="outline" className="text-neutral-400 text-md ml-1 border px-4 border-b-2 border-r-2 mt-4 border-neutral-700 ">{club.position
                }</Badge>
            </div>
            
          ))}
        </div>
      </Section>

      {/* 2. Education */}
      <Section>
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-lg hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-4xl text-blue-400">
              <BookOpen className="size-14"/> Education
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


      {/* Publication Title: 2025 Eighth International Conference on Image Information Processing (ICIIP)
Article Title: YOLO Architectures for Enhanced Small Object  Detection in Aerial Imagery
Author(s): Himanshi Sharma, Jyotsna Singh, Kartikay Thakur, Uttkarsh Singh and Sushma Nagpal
Author E-mail: himanshi6262@gmail.com,jyotsna.singh@nsut.ac.in,kartikay.thakur.ug22@nsut.ac.in,utk.singh.12@gmail.com,sushma.nagpal@nsut.ac.in
eCF Paper Id: ICIIP2025-155 
 */}
      <Section>
        <h2 className="text-4xl font-bold mb-10 text-center">Academic <span className="text-pink-400"> Research</span></h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
            <div className=" flex flex-col p-8 rounded-xl bg-black/20 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/40 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4 ">
              <div key={""} className="flex items-center justify-baseline ">
                <div className="font-semibold text-3xl"> <span className="text-pink-400"> 2025 </span> Eighth International Conference on <span className="text-pink-400">
                  <br />Image Information Processing</span> </div>
              </div>
              <Badge variant="outline" className="text-neutral-400 text border px-4 border-b-2 border-r-2 mt-4 border-neutral-700 ml-2 mb-4">eCF Paper Id: ICIIP2025-155</Badge>
              <ul className="list-disc text-neutral-300 space-y-2 pl-4 text">
                <li>Article Title YOLO Architectures for Enhanced Small Object  Detection in Aerial Imagery</li>
                <li>Authors : Himanshi Sharma, Jyotsna Singh, Kartikay Thakur, Uttkarsh Singh and Sushma Nagpal</li>
                <li>Author E-mail : himanshi6262@gmail.com | jyotsna.singh@nsut.ac.in | kartikay.thakur.ug22@nsut.ac.in | utk.singh.12@gmail.com | sushma.nagpal@nsut.ac.in</li>
              </ul>
              
            </div>
        {/* </div> */}
      </Section>


      {/* <Section>
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-bold">More About Me</h2>
          <p className="text-xl text-neutral-400">
            Books, Manga, Games, and Stats.
          </p>
          <Link to="/extra">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg mt-4 gap-2 bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-r-4 border-b-4 ">
              Check Extraa! <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </Section> */}


    </div>
    </div>
  );
}