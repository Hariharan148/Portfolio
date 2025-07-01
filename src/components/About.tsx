
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "AWS",
    "Docker", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/5">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and turning complex problems into elegant code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Decorative lines */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-white/20"></div>
            
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              With over 5 years of experience in software development, I've had the privilege of working 
              on diverse projects ranging from scalable web applications to complex backend systems. 
              My passion lies in writing clean, maintainable code and creating seamless user experiences.
            </p>
            <p className="text-white/70 mb-6 leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest technologies 
              and best practices in the industry. When I'm not coding, you can find me contributing 
              to open-source projects or exploring new frameworks.
            </p>

            {/* Bottom decorative element */}
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-r-2 border-b-2 border-white/20"></div>
          </div>

          <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm relative overflow-hidden">
            {/* Card background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded rotate-12"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/10 rounded-full"></div>
            </div>
            
            <CardContent className="p-0 relative z-10">
              <h4 className="text-xl font-semibold mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition-colors ${
                      index % 3 === 0 ? 'hover:border-blue-400/50' : 
                      index % 3 === 1 ? 'hover:border-purple-400/50' : 
                      'hover:border-green-400/50'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
