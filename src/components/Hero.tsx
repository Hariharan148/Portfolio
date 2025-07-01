
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden geometric-pattern">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left geometric shape */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-lg floating-element"></div>
        
        {/* Top right doodle */}
        <div className="absolute top-32 right-20 w-24 h-24">
          <svg viewBox="0 0 24 24" className="w-full h-full text-white/10 floating-element-delayed">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="currentColor" fill="none" strokeWidth="1"/>
          </svg>
        </div>

        {/* Bottom left lines */}
        <div className="absolute bottom-40 left-16">
          <div className="flex flex-col space-y-2 floating-element">
            <div className="w-16 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            <div className="w-12 h-px bg-gradient-to-r from-white/15 to-transparent"></div>
            <div className="w-20 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
        </div>

        {/* Right side box */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-20 h-20 border border-white/10 rotate-45 floating-element"></div>

        {/* Center background grid dots */}
        <div className="absolute inset-0 grid-dots opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6">
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
        </div>
        
        {/* Code snippet showcase */}
        <div className="code-block-bg rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
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
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90 glow-effect">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/20 hover:bg-white/10">
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="mx-auto h-6 w-6 text-white/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
