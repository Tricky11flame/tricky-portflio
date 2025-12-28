import { motion } from "framer-motion";
const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="h-screen w-full snap-start flex flex-col justify-center items-center p-6 border-b border-neutral-900/50">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
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
export {Section,BentoGridBackground} 