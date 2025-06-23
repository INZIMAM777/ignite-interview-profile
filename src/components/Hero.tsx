
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink, Code, Palette, Database, Gamepad2, User, HelpCircle, Globe } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Frontend Specialist",
    "Creative Coder"
  ];

  const projectIcons = [
    { icon: <Globe className="h-6 w-6" />, color: "from-yellow-500 to-orange-500", name: "Business Platform" },
    { icon: <Palette className="h-6 w-6" />, color: "from-purple-500 to-pink-500", name: "E-commerce Design" },
    { icon: <Database className="h-6 w-6" />, color: "from-blue-500 to-cyan-500", name: "Real Estate Platform" },
    { icon: <Gamepad2 className="h-6 w-6" />, color: "from-red-500 to-pink-500", name: "Interactive Games" },
    { icon: <User className="h-6 w-6" />, color: "from-indigo-500 to-purple-500", name: "Portfolio Sites" },
    { icon: <HelpCircle className="h-6 w-6" />, color: "from-teal-500 to-blue-500", name: "Quiz Applications" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1.0]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Project Icons */}
        {projectIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center opacity-10 backdrop-blur-sm`}
            style={{
              left: `${15 + (index * 12)}%`,
              top: `${20 + (index * 8)}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: index * 0.5 }}
          >
            {item.icon}
          </motion.div>
        ))}
        
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div 
            className="mb-8 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.img 
                src="/lovable-uploads/e2df5aea-fa40-4f63-9165-c7786a36b1ed.png"
                alt="Inzimamul Haq N"
                className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p 
            className="text-purple-400 text-lg md:text-xl font-medium mb-4"
            variants={itemVariants}
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Inzimamul Haq N
            </span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div 
            className="mb-8 h-16 flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.h2 
              key={currentRole}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Passionate about creating{' '}
            <span className="text-purple-400 font-semibold">beautiful</span>,{' '}
            <span className="text-pink-400 font-semibold">functional</span>, and{' '}
            <span className="text-cyan-400 font-semibold">user-friendly</span>{' '}
            web experiences. From interactive games to full-stack applications, 
            I bring ideas to life with code and creativity.
          </motion.p>

          {/* Project Theme Showcase */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <p className="text-gray-500 text-sm mb-4">Featured Project Themes</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {projectIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${item.color} rounded-full text-white text-sm font-medium backdrop-blur-sm`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              View My Work
              <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            variants={itemVariants}
          >
            {[
              { icon: <Github className="h-6 w-6" />, href: "#", label: "GitHub" },
              { icon: <Linkedin className="h-6 w-6" />, href: "#", label: "LinkedIn" },
              { icon: <Mail className="h-6 w-6" />, href: "mailto:inzimamulhaqn@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 group"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-sm mb-2 group-hover:text-purple-400 transition-colors duration-300">Scroll Down</span>
              <ChevronDown className="h-6 w-6 group-hover:animate-bounce" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
