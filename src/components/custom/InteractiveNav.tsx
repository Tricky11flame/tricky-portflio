import { motion, useScroll, useTransform, useSpring } from "framer-motion";
const SECTIONS = [
  "Home", "Software", "Experience", "Certifications", 
  "Projects", "Clubs", "Education", "Academic"
];

export const InteractiveNav = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // Smooth the raw scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-6">
      {SECTIONS.map((name, i) => {
        // Calculate the range for this specific section
        const start = i / SECTIONS.length;
        const end = (i + 1) / SECTIONS.length;
        
        // Scale and Opacity logic based on scroll position
        const scale = useTransform(smoothProgress, [start - 0.1, (start + end) / 2, end + 0.1], [0.8, 1.4, 0.8]);
        const opacity = useTransform(smoothProgress, [start - 0.1, (start + end) / 2, end + 0.1], [0.4, 1, 0.4]);
        const x = useTransform(smoothProgress, [start - 0.1, (start + end) / 2, end + 0.1], [10, 0, 10]);

        return (
          <motion.div
            key={name}
            style={{ scale, opacity, x }}
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => {
              containerRef.current.children[i].scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-xs font-mono text-neutral-400 group-hover:text-red-500 transition-colors uppercase tracking-widest">
              {name}
            </span>
            <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
          </motion.div>
        );
      })}
      
      {/* Background connecting line */}
      <div className="absolute right-[3px] top-0 bottom-0 w-[1px] bg-neutral-800 -z-10" />
    </div>
  );
};