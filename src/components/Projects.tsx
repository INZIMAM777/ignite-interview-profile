
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Palette, Database, Smartphone, Globe, Gamepad2, User, HelpCircle } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Billionaire Hive",
      description: "A modern business platform showcasing entrepreneurial success stories and wealth-building strategies.",
      image: "./public/projects/BH.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://billionairehive.netlify.app/",
      githubUrl: "https://github.com/INZIMAM777",
      color: "from-yellow-500 to-orange-500",
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Diamond Jewellery",
      description: "Elegant e-commerce showcase for premium diamond jewelry with sophisticated design and smooth user experience.",
      image: "../public/projects/DJ.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://diamodjewellery.netlify.app/",
      githubUrl: "https://github.com/INZIMAM777",
      color: "from-purple-500 to-pink-500",
      icon: <Palette className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Arrow Real Estate",
      description: "Full-stack real estate platform with property listings, user authentication, and database management.",
      image: "../public/projects/ARE.png",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "fullstack",
      liveUrl: "https://arrow-realestate.netlify.app/",
      githubUrl: "https://github.com/INZIMAM777",
      color: "from-blue-500 to-cyan-500",
      icon: <Database className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Tripy Travel Management",
      description: "Responsive travel management system with booking features and destination showcases.",
      image: "../public/projects/TTM.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://tripy-responsive-web.netlify.app/",
      githubUrl: "https://github.com/INZIMAM777",
      color: "from-green-500 to-emerald-500",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      id: 5,
      title: "Stone Paper Gun Game",
      description: "Interactive rock-paper-scissors game with engaging animations and score tracking.",
      image: "../public/projects/SWGG.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://stone-paper-gun-game.netlify.app/",
      githubUrl: "https://github.com/INZIMAM777",
      color: "from-red-500 to-pink-500",
      icon: <Gamepad2 className="h-6 w-6" />
    },
    {
      id: 6,
      title: "Portfolio Inzi",
      description: "Personal portfolio website showcasing skills, projects, and professional experience.",
      image: "../public/projects/PI.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://portfolioinzi.netlify.app/",
      githubUrl: "https://github.com/INZIMAM777",
      color: "from-indigo-500 to-purple-500",
      icon: <User className="h-6 w-6" />
    },
    {
      id: 7,
      title: "Quiz Game",
      description: "Interactive quiz application with multiple categories and real-time scoring system.",
      image: "../public/projects/QG.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://app.netlify.com/projects/quiz-gameee/",
      githubUrl: "https://github.com/INZIMAM777",
      color: "from-teal-500 to-blue-500",
      icon: <HelpCircle className="h-6 w-6" />
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Code className="h-4 w-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Palette className="h-4 w-4" /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Database className="h-4 w-4" /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full animate-scale-in"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Showcasing my journey through web development with projects ranging from elegant frontends to full-stack applications
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 dark:bg-slate-800 rounded-xl p-1 border border-gray-200 dark:border-gray-700 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-fade-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300 text-sm font-medium transform hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 text-sm transform hover:scale-105"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
