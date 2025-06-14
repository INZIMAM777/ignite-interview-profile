
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight, Code2, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Web Developer', 'Freelancer', 'Canva/Figma Designer', 'UI/UX Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1.0]
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.6, 1.0]
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [90, 0, 90]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.6, 1.0],
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [-20, 20, -20]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.6, 1.0],
            delay: 0.5
          }}
        />
        
        {/* Floating tech icons */}
        <motion.div 
          className="absolute top-20 left-20 opacity-30"
          animate={{
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.6, 1.0]
          }}
        >
          <Code2 className="h-8 w-8 text-purple-300" />
        </motion.div>
        <motion.div 
          className="absolute bottom-32 right-32 opacity-30"
          animate={{
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.6, 1.0],
            delay: 0.8
          }}
        >
          <Database className="h-6 w-6 text-pink-300" />
        </motion.div>
        <motion.div 
          className="absolute top-1/2 right-10 opacity-30"
          animate={{
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.4, 0.0, 0.6, 1.0],
            delay: 1.2
          }}
        >
          <Globe className="h-7 w-7 text-blue-300" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Profile Image - Mobile: at top, Desktop: centered */}
        <motion.div 
          className="flex justify-center mb-8 md:mb-12 order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full blur-lg opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10 w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden ring-4 ring-purple-500/20 hover:ring-purple-500/40 transition-all duration-300">
                <img 
                  src="/lovable-uploads/e2df5aea-fa40-4f63-9165-c7786a36b1ed.png" 
                  alt="Inzimamul Haq N"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Floating elements around image */}
            <motion.div 
              className="absolute -top-4 -right-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-80"
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0.0, 0.6, 1.0]
              }}
            >
              <Code2 className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-80"
              animate={{
                y: [5, -5, 5],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0.0, 0.6, 1.0],
                delay: 0.5
              }}
            >
              <Database className="h-4 w-4 md:h-5 md:w-5 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text content - Mobile: below image, Desktop: below image */}
        <motion.div 
          className="text-center space-y-6 md:space-y-8 order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.p 
              className="text-purple-400 font-medium mb-2"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              Inzimamul <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">Haq N</span>
            </motion.h1>
            
            <motion.div 
              className="h-12 md:h-16 flex items-center justify-center"
              variants={itemVariants}
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300">
                I'm a{' '}
                <motion.span 
                  className="text-purple-400 font-semibold"
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentRole]}
                </motion.span>
              </p>
            </motion.div>
            
            <motion.p 
              className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              Passionate web developer, freelancer, and hands-on coder who loves creating visually appealing, 
              responsive, and functional websites. I transform ideas into clean, efficient code and deliver 
              polished digital products across various platforms.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 group w-full sm:w-auto">
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download className="mr-2 h-4 w-4" />
                </motion.div>
                Download CV
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 group w-full sm:w-auto" 
                onClick={() => scrollToSection('projects')}
              >
                View Work
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex space-x-6 justify-center"
            variants={containerVariants}
          >
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.href} 
                className="text-gray-400 hover:text-purple-400 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-7 w-7 md:h-8 md:w-8" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div 
            className="flex flex-col items-center space-y-2 cursor-pointer group" 
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-purple-400 text-sm group-hover:text-purple-300 transition-colors">Scroll Down</span>
            <ChevronDown className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
