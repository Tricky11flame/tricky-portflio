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
import {  useScroll, useSpring } from "framer-motion";

const ScrollRail = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // Spring adds "weight" to the scroll movement
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 top-1/8 h-3/4 w-[3px] bg-black/90 z-50 rounded-full overflow-hidden">
      {/* Dynamic progress fill */}
      <motion.div 
        className="w-full bg-gradient-to-b from-green-500 via-white to-green-500  origin-top h-full opacity-45"
        style={{ scaleY }}
      />
      
      {/* Decorative markers for sections */}
      <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-full h-[1px] bg-white/10" />
        ))}
      </div>
    </div>
  );
};
import {  useTransform } from "framer-motion";
// const SECTIONS = [
//   "Home", "Software", "Experience", "Certificates", 
//   "Projects", "Projects", "Projects", "Clubs", "Education" , "  Research"
// ];
const SECTIONS = ["home","","exp","certs","proj",
  "","","","","","edu",""
]

// import { motion, useTransform } from "framer-motion";

const NavItem = ({ name, index, total, progress, onClick }) => {
  // Calculate the specific scroll window for this section
  const start = index / total;
  const end = (index + 1) / total;
  const center = (start + end) / 2;

  // Hooks are now at the top level of this sub-component
  const scale = useTransform(progress, [start - 0.1, center, end + 0.1], [1, 1.1, 1]);
  const opacity = useTransform(progress, [start - 0.1, center, end + 0.1], [0.3, 1.0, 0.3]);
  const x = useTransform(progress, [start - 0.1, center, end + 0.1], [10, 0, 10]);
  return (
    <motion.div
      style={{ scale, opacity, x }}
      className="flex items-center gap-4 cursor-pointer group"
      onClick={onClick}
    >
      <span className="text-[14px] font-mono text-white/70 group-hover:font-bold group-hover:text-white/90 transition-colors uppercase tracking-widest">
        {name}
      </span>
      <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
    </motion.div>
  );
};
const InteractiveNav = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({ container: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-10">
      {SECTIONS.map((name, i) => (
        <NavItem
          key={name}
          name={name}
          index={i}
          total={SECTIONS.length}
          progress={smoothProgress}
          onClick={() => {
            containerRef.current.children[i].scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ))}
      {/* Background connecting line */}
      <div className="absolute right-[3px] top-0 bottom-0 w-[10px] bg-black/30 -z-10 rounded-b-full rounded-t-full" />
    </div>
  );
};
export {Section,BentoGridBackground, ScrollRail,InteractiveNav} 