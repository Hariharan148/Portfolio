
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Task Management App", 
      description: "A collaborative task management application with real-time updates, file sharing, and team collaboration features.",
      tech: ["TypeScript", "React", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard for business intelligence with interactive charts, data visualization, and reporting capabilities.",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#030303] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 border border-white/5 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <div className="flex flex-col space-y-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <GlassCard className="h-[350px] w-[320px]">
                <div className="absolute inset-0 p-6 flex flex-col justify-between [transform:translate3d(0,0,27px)]">
                  <div>
                    <div className="aspect-video overflow-hidden rounded-lg mb-4 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-zinc-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded text-xs font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/10 h-8 text-xs">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-white text-black hover:bg-white/90 h-8 text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
