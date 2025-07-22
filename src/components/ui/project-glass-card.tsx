import * as React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectTech {
  name: string;
  color: string;
}

interface ProjectGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: {
    id: string;
    title: string;
    description: string;
    tech: ProjectTech[];
    image: string;
    githubUrl?: string;
    demoUrl?: string;
    status: "completed" | "in-progress" | "planning";
    createdDate: string;
    stats?: { stars?: number; forks?: number };
    category: string;
  };
}

const ProjectGlassCard = React.forwardRef<HTMLDivElement, ProjectGlassCardProps>(
  ({ className, project, ...props }, ref) => {
    return (
      <div ref={ref} className={`group h-[380px] w-[320px] [perspective:1000px] ${className}`} {...props}>
        <div className="relative h-full rounded-3xl bg-gradient-to-br from-zinc-900/90 to-black/90 shadow-xl transition-all duration-300 ease-out [transform-style:preserve-3d] hover:shadow-2xl group-hover:[transform:rotateY(5deg)_rotateX(5deg)]">
          {/* Glass overlay */}
          <div className="absolute inset-1 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm [transform:translate3d(0,0,1px)]"></div>

          {/* Content */}
          <div className="relative h-full p-5 flex flex-col [transform:translate3d(0,0,2px)]">
            {/* Project Image */}
            <div className="aspect-video overflow-hidden rounded-2xl mb-4 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Project Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 leading-tight">{project.title}</h3>

                <p className="text-sm text-zinc-300 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                {/* Tech Stack - Only show top 3 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-xs font-medium border border-white/20"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex gap-2">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/30 text-white hover:bg-white/10 hover:border-white/50 h-10 transition-all duration-200"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                )}
                {project.demoUrl && (
                  <Button
                    size="sm"
                    className="flex-1 bg-white text-black hover:bg-white/90 h-10 transition-all duration-200"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProjectGlassCard.displayName = "ProjectGlassCard";

export default ProjectGlassCard;
