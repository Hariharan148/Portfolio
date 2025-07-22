import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, FileText } from "lucide-react";

const navItems = [
  { name: "Home", url: "#hero", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Resume", url: "#resume", icon: FileText },
];

const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* NavBar at the top of the hero section */}
      {/* <NavBar items={navItems} /> */}
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#B6C7F9] via-white to-[#F9B6C7] bg-clip-text text-transparent">
                Hi, I am Hariharan Chandran
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              A passionate developer crafting exceptional digital experiences through innovative design and cutting-edge
              technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Use HeroGeometric component for background shapes */}
      <div className="absolute inset-0">
        <HeroGeometric badge="" title1="" title2="" />
      </div>
    </section>
  );
};

export default Hero;
