import React, { useState } from 'react';
import { Code2, Database, Globe, Smartphone, Cloud, GitBranch, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML", level: 95, color: "bg-orange-500" },
        { name: "CSS", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" },
        { name: "React.js", level: 85, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PHP", level: 70, color: "bg-purple-500" },
        { name: "Node.js", level: 75, color: "bg-green-500" },
        { name: "MySQL", level: 80, color: "bg-blue-600" },
        { name: "MongoDB", level: 70, color: "bg-green-600" },
        { name: "API Development", level: 75, color: "bg-gray-600" }
      ]
    },
    {
      title: "Design & Creative",
      icon: <Palette className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Photoshop", level: 85, color: "bg-blue-600" },
        { name: "Canva", level: 95, color: "bg-purple-500" },
        { name: "Figma", level: 90, color: "bg-pink-500" },
        { name: "UI/UX Design", level: 85, color: "bg-indigo-500" }
      ]
    },
    {
      title: "Tools & CMS",
      icon: <Wrench className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "WordPress", level: 90, color: "bg-blue-500" },
        { name: "Git", level: 85, color: "bg-red-500" },
        { name: "VS Code", level: 95, color: "bg-blue-600" },
        { name: "Prompt Engineering", level: 88, color: "bg-green-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-white dark:bg-slate-700 rounded-2xl p-2 max-w-2xl mx-auto shadow-lg">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 m-1 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-600'
              }`}
            >
              {React.cloneElement(category.icon, { className: "h-5 w-5" })}
              <span className="font-medium text-sm">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-center mb-8">
              <div className={`w-16 h-16 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-xl flex items-center justify-center mr-4`}>
                {React.cloneElement(skillCategories[activeCategory].icon, { className: "h-8 w-8 text-white" })}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {skillCategories[activeCategory].title}
              </h3>
            </div>
            
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">{skill.name}</span>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-4 overflow-hidden">
                    <div 
                      className={`${skill.color} h-4 rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Projects Completed", value: "25+", icon: <Code2 className="h-6 w-6" /> },
            { label: "Years Experience", value: "3+", icon: <GitBranch className="h-6 w-6" /> },
            { label: "Technologies", value: "15+", icon: <Database className="h-6 w-6" /> },
            { label: "Happy Clients", value: "15+", icon: <Globe className="h-6 w-6" /> }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-2 text-purple-600 dark:text-purple-400">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;