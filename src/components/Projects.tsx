
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Palette, Database, Smartphone, Globe, Gamepad2, User, HelpCircle } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Billionaire Hive",
      description: "A modern business platform showcasing entrepreneurial success stories and wealth-building strategies.",
      image: "/lovable-uploads/bc7aa22f-1d4a-45b3-af95-8719e381ad3d.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://billionairehive.netlify.app/",
      githubUrl: "#",
      featured: true,
      color: "from-yellow-500 to-orange-500",
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Diamond Jewellery",
      description: "Elegant e-commerce showcase for premium diamond jewelry with sophisticated design and smooth user experience.",
      image: "/lovable-uploads/727f5ce7-ed38-4384-b95c-eb9ddef5e657.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://diamodjewellery.netlify.app/",
      githubUrl: "#",
      featured: true,
      color: "from-purple-500 to-pink-500",
      icon: <Palette className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Arrow Real Estate",
      description: "Full-stack real estate platform with property listings, user authentication, and database management.",
      image: "/lovable-uploads/fe9f1082-6ae3-41bb-84e1-6f5ad265083d.png",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "fullstack",
      liveUrl: "https://arrow-realestate.netlify.app/",
      githubUrl: "#",
      featured: true,
      color: "from-blue-500 to-cyan-500",
      icon: <Database className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Tripy Travel Management",
      description: "Responsive travel management system with booking features and destination showcases.",
      image: "/lovable-uploads/b538e04c-02fd-4805-9bc7-5f0bf5101947.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://tripy-responsive-web.netlify.app/",
      githubUrl: "#",
      featured: false,
      color: "from-green-500 to-emerald-500",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      id: 5,
      title: "Stone Paper Gun Game",
      description: "Interactive rock-paper-scissors game with engaging animations and score tracking.",
      image: "/lovable-uploads/stone-paper-gun.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://stone-paper-gun-game.netlify.app/",
      githubUrl: "#",
      featured: false,
      color: "from-red-500 to-pink-500",
      icon: <Gamepad2 className="h-6 w-6" />
    },
    {
      id: 6,
      title: "Portfolio Inzi",
      description: "Personal portfolio website showcasing skills, projects, and professional experience.",
      image: "/lovable-uploads/portfolio-inzi.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://portfolioinzi.netlify.app/",
      githubUrl: "#",
      featured: false,
      color: "from-indigo-500 to-purple-500",
      icon: <User className="h-6 w-6" />
    },
    {
      id: 7,
      title: "Quiz Game",
      description: "Interactive quiz application with multiple categories and real-time scoring system.",
      image: "/lovable-uploads/quiz-game.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://app.netlify.com/projects/quiz-gameee/",
      githubUrl: "#",
      featured: false,
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

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <p className="text-purple-400 font-medium mb-2">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-scale-in"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Showcasing my journey through web development with projects ranging from elegant frontends to full-stack applications
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 animate-fade-in">🌟 Featured Projects</h3>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-slide-up`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center backdrop-blur-sm animate-glow`}>
                      {project.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full opacity-90`}
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
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-medium transform hover:scale-110 hover:translate-x-1 group"
                    >
                      <ExternalLink className="h-4 w-4 mr-1 group-hover:animate-pulse" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-all duration-300 text-sm transform hover:scale-110"
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

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white/5 backdrop-blur-sm rounded-xl p-1 border border-white/10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 animate-fade-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-2 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded opacity-80`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600 text-white text-xs font-semibold rounded opacity-80">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm transform hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300 text-sm transform hover:scale-105"
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
