
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-1/4 w-32 h-32 border border-white/10 rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white/5 rotate-45"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative">
            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-white/20"></div>
            
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <p className="font-medium">Email</p>
                <p className="text-white/70">hariharan.chandran@email.com</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <p className="font-medium">Location</p>
                <p className="text-white/70">Available for remote work worldwide</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <p className="font-medium">Response Time</p>
                <p className="text-white/70">Usually within 24 hours</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                Twitter
              </Button>
            </div>
          </div>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm relative overflow-hidden">
            {/* Card decorative pattern */}
            <div className="absolute top-4 right-4 w-12 h-12 border border-white/10 rounded rotate-12 opacity-50"></div>
            
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white/80">First Name</Label>
                  <Input id="firstName" placeholder="John" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white/80">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white/80">Subject</Label>
                <Input id="subject" placeholder="Project Discussion" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/80">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..."
                  className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <Button className="w-full bg-white text-black hover:bg-white/90 glow-effect">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
