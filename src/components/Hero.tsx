
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm mb-4">
            👋 Available for hire
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building the future,{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              one line at a time
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm Hariharan Chandran, a passionate software developer crafting exceptional digital experiences 
            with modern technologies and clean, efficient code.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="mx-auto h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
