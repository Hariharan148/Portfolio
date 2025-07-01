
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
          <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate software developer with over 5 years of experience creating 
              digital solutions that make a difference. I specialize in modern web technologies 
              and love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-white/70">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 backdrop-blur-sm border border-white/10">
              <div className="w-full h-full rounded-xl bg-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">HC</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Hariharan Chandran</h3>
                  <p className="text-white/70">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
              },
              {
                category: "Backend", 
                skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
              },
              {
                category: "Tools & Others",
                skills: ["Git", "Docker", "AWS", "Figma", "Jest"]
              }
            ].map((skillGroup, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-4 text-white">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                      {skill}
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
