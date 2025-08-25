import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className=" homemade-apple-regular text-2xl font-bold bg-gradient-to-r from-[#B6C7F9] via-white to-[#F9B6C7] bg-clip-text text-transparent">
            HC
          </span>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/70 hover:text-white transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/wakeup-automation.firebasestorage.app/o/Hariharan_Chandran_CV.pdf?alt=media&token=77850ed5-1a7c-4016-9937-9b4d4066459a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              Resume
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
