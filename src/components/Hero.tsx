
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
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating geometric elements from HeroGeometric */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -150, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 12 }}
          transition={{ duration: 2.4, delay: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-[600px] h-[140px] relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -15 }}
          transition={{ duration: 2.4, delay: 0.5, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-[500px] h-[120px] relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 7 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 2.4, delay: 0.4, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-[300px] h-[80px] relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 20 }}
          transition={{ duration: 2.4, delay: 0.6, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-[200px] h-[60px] relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: -25 }}
          transition={{ duration: 2.4, delay: 0.7, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-[150px] h-[40px] relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>
      </div>

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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  );
};

export default Hero;
