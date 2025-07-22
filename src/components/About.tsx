import {
  RatIcon,
  FileText,
  Type,
  Feather,
  Github,
  Terminal,
  Database,
  GitBranch,
  Dock,
  Cloud,
  Figma,
  CheckSquare,
} from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Supabase", "Firebase"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Figma"],
  },
];

const getImageSrc = (skill: string) => `/tech/${skill.toLowerCase().replace(/\s|\./g, "").replace("++", "pp")}.png`;

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#030303] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-white/5 rotate-45"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#B6C7F9] via-white to-[#F9B6C7] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B6C7F9] via-white to-[#F9B6C7] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate software developer with over 1+ years of experience creating digital solutions that make
              a difference. I specialize in modern web technologies and love turning complex problems into simple,
              beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400 mb-2">4+</div>
                <div className="text-white/70">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400 mb-2">1+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Profile Image Card */}
          <div className="flex justify-center items-center">
            <div className="rounded-full overflow-hidden shadow-xl border-4 border-white/10 w-64 h-64 bg-gradient-to-br from-[#B6C7F9]/30 to-[#F9B6C7]/30 flex items-center justify-center">
              <img src="/profile.png" alt="Hariharan Chandran" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* Skills section - visually interesting bubbles with images */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-[#B6C7F9] via-white to-[#F9B6C7] bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="text-center p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <h4 className="text-lg font-semibold mb-6 text-white/90 tracking-wide">{group.category}</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex flex-col items-center group">
                      <div className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center shadow-md  group-hover:scale-110 group-hover:shadow-lg transition-transform duration-200 overflow-hidden">
                        <img src={getImageSrc(skill)} alt={skill} className="w-10 h-10 object-contain" />
                      </div>
                      <span className="mt-2 text-xs text-white/80 group-hover:text-white transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
