
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm mb-6 backdrop-blur-sm">
              👋 Available for hire
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building the future,{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                one line at a time
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm Hariharan Chandran, a passionate software developer crafting exceptional digital experiences 
              with modern technologies and clean, efficient code.
            </p>
          </motion.div>
          
          {/* Code snippet showcase */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="code-block-bg rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm">
              <div className="text-purple-400">const</div>{" "}
              <span className="text-blue-400">developer</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-yellow-300">{`{`}</span>
              <div className="ml-4">
                <span className="text-green-400">name</span>: <span className="text-orange-300">'Hariharan'</span>,
              </div>
              <div className="ml-4">
                <span className="text-green-400">passion</span>: <span className="text-orange-300">'Innovation'</span>
              </div>
              <span className="text-yellow-300">{`}`}</span>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90 glow-effect">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/20 hover:bg-white/10">
              Get In Touch
            </Button>
          </motion.div>

          <div className="animate-bounce">
            <ChevronDown className="mx-auto h-6 w-6 text-white/50" />
          </div>
        </div>
      </div>

      {/* Use HeroGeometric component for background shapes */}
      <div className="absolute inset-0">
        <HeroGeometric 
          badge=""
          title1=""
          title2=""
        />
      </div>
    </section>
  );
};

export default Hero;
