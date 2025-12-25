import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Book, Swords, Gamepad2, Trophy } from "lucide-react";
import { motion } from "framer-motion";
// import { ScrollArea } from "@components/ui/";
import { ScrollArea } from "@/components/ui/scroll-area";
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

const BentoGridBackground2 = () => (
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
      <div className="absolute top-[-20%] left-0 right-0 h-[1000px] bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(99,102,241,0.42),transparent)] opacity-70" />

      {/* 3. Spotlight: Top Left (Purple) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_farthest-side_at_50%_50%,rgba(6,182,212,0.45),transparent)] opacity-65" />

      {/* 4. Spotlight: Top Right (Cyan/Teal) */}
      <div className="absolute top-[10%] right-[-15%] w-[500px] h-[500px] bg-[radial-gradient(circle_farthest-side_at_50%_50%,rgba(168,85,247,0.5),transparent)] opacity-50" />

       {/* 5. Spotlight: Random Small Glow near "Intro" text area (Indigo) */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-[radial-gradient(circle_farthest-side_at_50%_50%,rgba(59,130,246,0.40),transparent)] opacity-50" />
    
    </div>
  </div>
);

export default function Extra() {
  return (
    // <div className="min-h-screen bg-neutral-950 text-neutral-100 p-8 md:p-20">
        
    <div className="relative h-screen w-full bg-neutral-950 text-neutral-100 overflow-hidden">

      <BentoGridBackground2 />
      <div className="absolute inset-0 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Section>
      {/* Navigation */}
      <div className="max-w-6xl mx-auto mb-12 ">
        <Link to="/">
          <Button variant="ghost" className="pl-0 gap-2 text-neutral-400 hover:text-white  bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-lg hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4   " >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Button>
        </Link>
        <div className="space-y-6 relative z-10">
          <h1 className="text-7xl font-bold tracking-tight text-blue-500">
            **<span className="text-white/95"> something more interesting </span>**
          </h1>
          <p className="text-3xl text-neutral-400 font-light">
            <br />
            {/* <p> specialised in {"<>  back end dev  </>"} </p> */}
          </p>
        </div>
      </div>

      </Section>
        
        <Section>

        {/* Books */}
        <Card className=" bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-lg hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-300 text-4xl font-stretch-200% ">
              <Book className="size-20 text-purple-400"/> <span className="text-purple-400">Books </span> I've Read
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Atomic Habits
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> The Psychology of Money
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Zero to One
              </li>
            </ul>
          </CardContent>
        </Card>

        </Section>

        <Section >
        {/* Manga */}
        <Card className=" bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-lg hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4  ">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-4xl text-pink-200">
              <Swords className="size-20 text-pink-400"/> <span className="text-pink-400">Manga</span> Reading List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-neutral-700 text-neutral-300 px-3 py-1">One Piece</Badge>
              <Badge variant="outline" className="border-neutral-700 text-neutral-300 px-3 py-1">Vagabond</Badge>
              <Badge variant="outline" className="border-neutral-700 text-neutral-300 px-3 py-1">Berserk</Badge>
              <Badge variant="outline" className="border-neutral-700 text-neutral-300 px-3 py-1">Vinland Saga</Badge>
            </div>
          </CardContent>
        </Card>
        </Section>
        <Section >
        {/* Pokemon Showdown */}
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-lg hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4   md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-4xl text-red-100">
              <Gamepad2 className="text-red-400 size-20"/> Pokemon Showdown <span className="text-red-400 "> {"(OU)"} </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Grid for 6 Pokemon */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 rounded-lg aspect-square bg-black/10 border border-white/10 backdrop-blur-md shadow-lg hover:bg-black/30 hover:border-white/20 transition-all duration-300 border-b-2 border-r-2  ">
                  <div className="w-10 h-10 bg-neutral-800 rounded-full mb-2 flex items-center justify-center text-xs text-neutral-600 ">
                    SPRITE
                  </div>
                  <span className="text-xs font-mono text-neutral-500">PKMN_{i}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        </Section>
        <Section >
        {/* Chess Stats */}
        <Card className="bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-lg hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4   md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-4xl text-yellow-100">
              <Trophy className="size-20 text-yellow-400"/> Chess.com <span className="text-yellow-400 ">Elo</span> 
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
             <div className="text-center p-4  rounded 
              bg-black/30 border border-white/10 backdrop-blur-md shadow-lg hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-2 border-r-2    ">
                <div className="text-3xl font-bold text-white mb-1">1200</div>
                <div className="text-xs uppercase tracking-wider text-neutral-500">Rapid</div>
             </div>
             <div className="text-center p-4  rounded 
              bg-black/30 border border-white/10 backdrop-blur-md shadow-lg hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-2 border-r-2">
                <div className="text-3xl font-bold text-white mb-1">1050</div>
                <div className="text-xs uppercase tracking-wider text-neutral-500">Blitz</div>
             </div>
             <div className="text-center p-4  rounded 
              bg-black/30 border border-white/10 backdrop-blur-md shadow-lg hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-2 border-r-2">
                <div className="text-3xl font-bold text-white mb-1">900</div>
                <div className="text-xs uppercase tracking-wider text-neutral-500">Bullet</div>
             </div>
          </CardContent>
        </Card>
        </Section>

      </div>
    </div>
  );
}