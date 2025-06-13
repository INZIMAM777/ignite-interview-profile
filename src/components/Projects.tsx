
import React, { useState } from 'react';
import { ExternalLink, Github, Play, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with modern UI, secure payments, and admin dashboard. Built with React, Node.js, and MongoDB.",
      longDescription: "Complete e-commerce solution featuring user authentication, shopping cart, payment integration with Stripe, order management, and comprehensive admin panel.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      stats: { stars: 124, forks: 32 },
      featured: true
    },
    {
      title: "AI Task Manager",
      description: "Smart task management app with AI-powered scheduling and real-time collaboration features.",
      longDescription: "Revolutionary task management with AI suggestions, smart scheduling, team collaboration, and predictive analytics.",
      tech: ["React", "TypeScript", "Firebase", "OpenAI", "Tailwind"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      stats: { stars: 89, forks: 21 },
      featured: true
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Interactive weather dashboard with advanced analytics, forecasting, and data visualization.",
      longDescription: "Comprehensive weather platform featuring real-time data, historical analysis, predictive modeling, and beautiful visualizations.",
      tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      stats: { stars: 67, forks: 15 },
      featured: false
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with advanced features and microservices architecture.",
      longDescription: "Scalable social media backend with user management, post handling, real-time messaging, and comprehensive API documentation.",
      tech: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
      category: "backend",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      stats: { stars: 156, forks: 43 },
      featured: false
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans and nutrition guidance.",
      longDescription: "Complete fitness solution with personalized workouts, nutrition tracking, progress analytics, and social features.",
      tech: ["React Native", "Expo", "Firebase", "Redux", "Stripe"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      stats: { stars: 78, forks: 19 },
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with advanced animations and interactive elements.",
      longDescription: "Personal portfolio showcasing projects with smooth animations, dark/light themes, and optimized performance.",
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      stats: { stars: 45, forks: 12 },
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <p className="text-purple-400 font-medium mb-2">My Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-scale-in"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A collection of projects that showcase my skills in full-stack development, UI/UX design, and problem-solving
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 animate-fade-in">🌟 Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 group transform hover:scale-105 hover:shadow-2xl animate-slide-up`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Overlay buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button size="sm" className="bg-black/50 hover:bg-black/70 backdrop-blur-sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-black/50 hover:bg-black/70 backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 flex space-x-4 text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="h-4 w-4" />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.longDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      <Play className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* All projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 group transform hover:scale-105 animate-fade-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-gray-400 text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-2">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-xs">
                    <Star className="h-3 w-3" />
                    <span>{project.stats.stars}</span>
                  </div>
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
