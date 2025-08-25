import ProjectGlassCard from "@/components/ui/project-glass-card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

// Types for better type safety and structure
interface ProjectTech {
  name: string;
  color: string;
}

interface ProjectStats {
  stars?: number;
  forks?: number;
}

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: ProjectTech[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  status: "completed" | "in-progress" | "planning";
  featured: boolean;
  createdDate: string;
  stats?: ProjectStats;
  category: string;
}

const Projects = () => {
  // Replace this with your actual project data
  const projects: Project[] = [
    {
      id: "waitlist-tool",
      title: "Waitlist Tool",
      description: "A no-code platform to help founders launch customizable waitlist pages 10x faster",
      longDescription: "A no-code platform to help founders launch customizable waitlist pages 10x faster",
      tech: [
        { name: "React", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
        { name: "TypeScript", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
        { name: "Tailwind CSS", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
        { name: "Vite", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
      ],
      image: "/projects/launchpage.png",

      demoUrl: "https://launchkitmvp.vercel.app/",
      status: "completed",
      featured: true,
      createdDate: "2024-01-15",
      category: "Web Development",
      stats: { stars: 12, forks: 3 },
    },
  ];

  // Only keep featured projects
  const featuredProjects = projects.filter((project) => project.featured);

  const ProjectCard = ({ project }: { project: Project }) => <ProjectGlassCard project={project} />;

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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B6C7F9] via-white to-[#F9B6C7] mx-auto mb-8"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development. Each
            project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects Only */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/70 mb-4">Want to see more of my work?</p>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
            onClick={() => window.open("https://github.com/Hariharan148", "_blank")}
          >
            <Github className="h-4 w-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
