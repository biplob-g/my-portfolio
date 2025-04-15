
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/hero-bg.jpg";
import myProfile from "../assets/images/my-profile.png";
import cv from "../assets/pdf/Biplob-Ghatak.pdf";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-background/80" style={{backgroundImage: `url(${heroBg})`}}>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-heading">
              Hi, I'm <span className="text-[#FF5B36]">Biplob Ghatak</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
              <span className="text-black dark:text-white">Wordpress Developer</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-xl pr-5">
            I craft responsive, visually stunning websites and web applications that prioritize performance and user experience.           </p>
            <div className="flex gap-4 mt-2">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-[#FF5B36] text-white rounded-md font-medium hover:opacity-90 transition-opacity"
              >
               View Projects
              </a>
              <a 
                href={cv} 
                target="_blank"
                className="px-6 py-3 bg-transparent text-[#FF5B36] border border-[#FF5B36] rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square w-full h-full max-w-md mx-auto"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background p-2 bg-gradient-to-r from-[rgba(255,91,54,0.2)] to-[rgba(255,150,100,0.2)]">
              <img 
                src={myProfile} 
                alt="Earth Planet" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.3, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors"
      >
        <ArrowDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
