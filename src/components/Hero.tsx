
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileImage from './ProfileImage';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '0.5s'}}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-white rounded-full animate-bounce-gentle" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-300 rounded-full animate-bounce-gentle" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-pink-300 rounded-full animate-bounce-gentle" style={{animationDelay: '1.2s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image with enhanced animation */}
          <div className="flex justify-center mb-8">
            <div className="animate-scale-in">
              <ProfileImage 
                src="/placeholder.svg" 
                alt="Your Name"
                size="xl"
                className="animate-glow"
              />
            </div>
          </div>

          {/* Animated title with staggered effect */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">Your Name</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-left" style={{animationDelay: '0.4s'}}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Passionate Software Developer & Problem Solver
            </p>
          </div>
          
          <div className="animate-fade-in-right" style={{animationDelay: '0.6s'}}>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Creating innovative solutions with modern technologies. Turning ideas into reality through clean code and creative design.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{animationDelay: '0.8s'}}>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105" onClick={() => scrollToSection('projects')}>
                View Projects
              </Button>
            </div>
          </div>

          <div className="animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Github className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:-rotate-12">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <ChevronDown className="h-8 w-8 text-purple-400 cursor-pointer hover:text-purple-300 transition-colors" onClick={() => scrollToSection('about')} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
