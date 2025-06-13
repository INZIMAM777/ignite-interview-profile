
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight, Code2, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileImage from './ProfileImage';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'Frontend Specialist', 'Backend Engineer', 'UI/UX Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '0.5s'}}></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-20 left-20 animate-bounce-gentle opacity-30" style={{animationDelay: '0.2s'}}>
          <Code2 className="h-8 w-8 text-purple-300" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce-gentle opacity-30" style={{animationDelay: '0.8s'}}>
          <Database className="h-6 w-6 text-pink-300" />
        </div>
        <div className="absolute top-1/2 right-10 animate-bounce-gentle opacity-30" style={{animationDelay: '1.2s'}}>
          <Globe className="h-7 w-7 text-blue-300" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <p className="text-purple-400 font-medium mb-2 animate-slide-up">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up" style={{animationDelay: '0.1s'}}>
                Your <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">Name</span>
              </h1>
              
              <div className="h-16 flex items-center animate-fade-in-left" style={{animationDelay: '0.3s'}}>
                <p className="text-2xl md:text-3xl text-gray-300">
                  I'm a{' '}
                  <span className="text-purple-400 font-semibold transition-all duration-500 animate-pulse">
                    {roles[currentRole]}
                  </span>
                </p>
              </div>
              
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed animate-fade-in-right" style={{animationDelay: '0.5s'}}>
                Passionate about creating exceptional digital experiences through clean code, 
                innovative design, and cutting-edge technologies. Let's build something amazing together.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: '0.7s'}}>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 group" 
                onClick={() => scrollToSection('projects')}
              >
                View Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex space-x-6 animate-fade-in" style={{animationDelay: '0.9s'}}>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12 group">
                <Github className="h-8 w-8 group-hover:animate-pulse" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:-rotate-12 group">
                <Linkedin className="h-8 w-8 group-hover:animate-pulse" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12 group">
                <Mail className="h-8 w-8 group-hover:animate-pulse" />
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full blur-lg opacity-30 animate-glow"></div>
              <ProfileImage 
                src="/placeholder.svg" 
                alt="Your Name"
                size="xl"
                className="relative z-10 hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce-gentle opacity-80">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce-gentle opacity-80" style={{animationDelay: '0.5s'}}>
                <Database className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="flex flex-col items-center space-y-2 cursor-pointer group" onClick={() => scrollToSection('about')}>
            <span className="text-purple-400 text-sm group-hover:text-purple-300 transition-colors">Scroll Down</span>
            <ChevronDown className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
