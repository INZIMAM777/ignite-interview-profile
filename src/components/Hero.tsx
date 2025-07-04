import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink, Code } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Frontend Specialist",
    "Creative Coder"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-blue-600 via-cyan-600 to-blue-600 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full blur-2xl animate-pulse"></div>
              <img 
                src="/lovable-uploads/e2df5aea-fa40-4f63-9165-c7786a36b1ed.png"
                alt="Inzimamul Haq N"
                className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Greeting */}
          <p className="text-purple-400 text-lg md:text-xl font-medium mb-4">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Inzimamul Haq N
            </span>
          </h1>

          {/* Dynamic Role */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 transition-all duration-500">
              {roles[currentRole]}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about creating{' '}
            <span className="text-purple-400 font-semibold">beautiful</span>,{' '}
            <span className="text-pink-400 font-semibold">functional</span>, and{' '}
            <span className="text-cyan-400 font-semibold">user-friendly</span>{' '}
            web experiences. From interactive games to full-stack applications, 
            I bring ideas to life with code and creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Code className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              View My Work
              <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: <Github className="h-6 w-6" />, href: "https://github.com/INZIMAM777", label: "GitHub" },
              { icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/in/inzimamul-haq-n-419aa428a/", label: "LinkedIn" },
              { icon: <Mail className="h-6 w-6" />, href: "mailto:inzimamulhaqn@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <a
              href="#about"
              className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 group animate-bounce"
            >
              <span className="text-sm mb-2 group-hover:text-purple-400 transition-colors duration-300">Scroll Down</span>
              <ChevronDown className="h-6 w-6 group-hover:animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;