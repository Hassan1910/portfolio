import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Laptop, BookOpen, User, Briefcase, GraduationCap, Award, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 -z-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 -z-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="flex flex-col items-center mb-10">
        <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/20 text-primary">
          <User size={14} className="mr-1" /> About Me
        </Badge>
        <h2 className="section-title">Who I Am</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Profile Image - Takes 2 columns on large screens */}
        <div className="lg:col-span-2 flex justify-center items-center animate-fade-in order-2 lg:order-1 mt-8 lg:mt-0">
          <div className="relative mx-auto max-w-sm">
            {/* Background decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 opacity-50 blur-xl"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 opacity-50 blur-xl"></div>

            {/* Main profile image with enhanced styling */}
            <div className="relative w-72 h-72 md:w-[340px] md:h-[340px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              {/* Border glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/40 z-10 mix-blend-overlay"></div>

              {/* Image */}
              <img
                src="/images/profile pic.jpg"
                alt="Adan Wako's Profile"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
            </div>

            {/* Corner decorative elements */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent opacity-20 blur-sm animate-pulse-glow"></div>
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary opacity-20 blur-sm animate-pulse-glow delay-300"></div>

            {/* Experience badge - repositioned and enhanced */}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm shadow-lg rounded-full px-5 py-2.5 border border-primary/20 flex items-center gap-2 hover:border-primary/40 transition-all">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-medium text-sm md:text-base">Software Engineer at Savenet</span>
            </div>
          </div>
        </div>

        {/* About Content - Takes 3 columns on large screens */}
        <div className="lg:col-span-3 space-y-8 animate-fade-in order-1 lg:order-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm <span className="font-semibold text-primary">Hassan Adan</span>, a dedicated software engineer and system support specialist based in Marsabit, Kenya.
              At <span className="font-semibold text-primary">Savenet Company Limited</span>, I develop innovative solutions that address real-world challenges
              in our local community while maintaining robust systems that our clients depend on.
            </p>

            <p className="text-lg leading-relaxed">
              My expertise lies in creating <span className="font-semibold text-primary">full-stack web applications</span> with a focus on
              clean code, intuitive user experiences, and efficient database design. I'm particularly passionate about
              leveraging technology to solve unique problems in the East African context, bringing modern digital solutions
              to underserved markets.
            </p>

            <p className="text-lg leading-relaxed">
              Beyond my current role, I'm expanding my knowledge in <span className="font-semibold text-primary">AI integration</span> and
              <span className="font-semibold text-primary"> video generation technologies</span>, as demonstrated in my recent NarrateVision project.
              I'm committed to continuous learning and applying cutting-edge technologies to create impactful solutions.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6 pt-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span>My Journey</span>
            </h3>

            <div className="space-y-6 relative border-l-2 border-primary/20 pl-6 ml-3">
              {/* Timeline Item 1 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 h-5 w-5 rounded-full bg-primary/20 border-2 border-primary"></div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full">2021</span>
                  <h4 className="font-semibold">Started Coding Journey</h4>
                </div>
                <p className="text-muted-foreground">Began learning web development and built my first projects</p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 h-5 w-5 rounded-full bg-primary/20 border-2 border-primary"></div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full">2022</span>
                  <h4 className="font-semibold">Gym Management System</h4>
                </div>
                <p className="text-muted-foreground">Developed a comprehensive gym management solution</p>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 h-5 w-5 rounded-full bg-primary/20 border-2 border-primary"></div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full">2023</span>
                  <h4 className="font-semibold">Joined Savenet Company Limited</h4>
                </div>
                <p className="text-muted-foreground">Started as Software Engineer and System Support in Marsabit, Kenya</p>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 h-5 w-5 rounded-full bg-primary/20 border-2 border-primary"></div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full">2024</span>
                  <h4 className="font-semibold">E-commerce & Food Ordering Systems</h4>
                </div>
                <p className="text-muted-foreground">Developed Terral E-commerce platform and KINORU food ordering system</p>
              </div>

              {/* Timeline Item 5 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 h-5 w-5 rounded-full bg-accent/30 border-2 border-accent"></div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-sm bg-accent/10 text-accent px-2 py-0.5 rounded-full">2025</span>
                  <h4 className="font-semibold">NarrateVision AI Project</h4>
                </div>
                <p className="text-muted-foreground">Created an AI-powered video generation platform with advanced features</p>
              </div>
            </div>
          </div>

          {/* Current Goals */}
          <div className="pt-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <span>Current Goals</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-2 rounded-md bg-blue-500/10">
                    <Code className="text-blue-500 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced AI Integration</h4>
                    <p className="text-sm text-muted-foreground">Expand NarrateVision with more advanced AI capabilities</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                <div className="h-1 w-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-2 rounded-md bg-amber-500/10">
                    <Database className="text-amber-500 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Local Tech Solutions</h4>
                    <p className="text-sm text-muted-foreground">Develop technology solutions for Marsabit's unique needs</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-2 rounded-md bg-purple-500/10">
                    <Laptop className="text-purple-500 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Expand KINORU System</h4>
                    <p className="text-sm text-muted-foreground">Add advanced features to the food ordering platform</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                <div className="h-1 w-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-2 rounded-md bg-green-500/10">
                    <BookOpen className="text-green-500 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">LangChain & FFmpeg</h4>
                    <p className="text-sm text-muted-foreground">Master these technologies for advanced media processing</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
