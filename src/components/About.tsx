
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "AWS",
    "Docker", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and turning complex problems into elegant code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of experience in software development, I've had the privilege of working 
              on diverse projects ranging from scalable web applications to complex backend systems. 
              My passion lies in writing clean, maintainable code and creating seamless user experiences.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest technologies 
              and best practices in the industry. When I'm not coding, you can find me contributing 
              to open-source projects or exploring new frameworks.
            </p>
          </div>

          <Card className="p-6">
            <CardContent className="p-0">
              <h4 className="text-xl font-semibold mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
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
