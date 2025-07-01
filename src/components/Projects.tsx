
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <section id="projects" className="py-20 px-6 bg-white/5 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 group relative">
              {/* Card decorative elements */}
              <div className="absolute top-4 right-4 w-6 h-6 border border-white/20 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-sm text-white/60">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded text-xs font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/10">
                    View Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-white text-black hover:bg-white/90">
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
