
import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Globe, Smartphone, Cloud, GitBranch } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Next.js", level: 85, color: "bg-gray-700" },
        { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
        { name: "JavaScript", level: 95, color: "bg-yellow-500" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "Python", level: 80, color: "bg-blue-500" },
        { name: "Express.js", level: 85, color: "bg-gray-600" },
        { name: "MongoDB", level: 75, color: "bg-green-600" },
        { name: "PostgreSQL", level: 80, color: "bg-blue-600" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React Native", level: 80, color: "bg-blue-500" },
        { name: "Flutter", level: 75, color: "bg-blue-400" },
        { name: "iOS", level: 70, color: "bg-gray-600" },
        { name: "Android", level: 75, color: "bg-green-500" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Docker", level: 80, color: "bg-blue-500" },
        { name: "AWS", level: 75, color: "bg-orange-500" },
        { name: "Git", level: 95, color: "bg-red-500" },
        { name: "CI/CD", level: 70, color: "bg-green-500" }
      ]
    }
  ];

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-purple-400 font-medium mb-2">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {React.cloneElement(category.icon, { className: "h-8 w-8 text-white" })}
                </motion.div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + skillIndex * 0.1, duration: 0.6 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <motion.span 
                        className="text-purple-400 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 0.2 + skillIndex * 0.1 + 0.5, duration: 0.3 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className={`${skill.color} h-3 rounded-full relative`}
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        custom={skill.level}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{ opacity: [0.2, 0.5, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { label: "Projects Completed", value: "50+", icon: <Code2 className="h-6 w-6" /> },
            { label: "Years Experience", value: "3+", icon: <GitBranch className="h-6 w-6" /> },
            { label: "Technologies", value: "25+", icon: <Database className="h-6 w-6" /> },
            { label: "Happy Clients", value: "20+", icon: <Globe className="h-6 w-6" /> }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="flex justify-center mb-2 text-purple-400"
                animate={{ 
                  y: [0, -3, 0],
                  transition: { duration: 2, repeat: Infinity, delay: index * 0.2 }
                }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className="text-2xl font-bold text-white mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.4, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
