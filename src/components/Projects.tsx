import React, { useState } from 'react';
import { ExternalLink, Github, Play, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const projects = [
    {
      title: "Billionaire Hive",
      description: "A luxury lifestyle platform showcasing premium watches and timeless masterpieces with elegant design and smooth animations.",
      longDescription: "Sophisticated luxury e-commerce frontend featuring premium watch collections, elegant typography, and immersive user experience with smooth scrolling and animations.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP", "Responsive Design"],
      category: "frontend",
      image: "/lovable-uploads/b538e04c-02fd-4805-9bc7-5f0bf5101947.png",
      github: "#",
      live: "https://billionairehive.netlify.app/",
      stats: { stars: 89, forks: 24 },
      featured: true
    },
    {
      title: "Diamond Jewellery",
      description: "Elegant jewellery showcase website with stunning visuals and premium user interface for luxury diamond collections.",
      longDescription: "Beautiful jewellery e-commerce frontend featuring diamond collections, elegant golden accents, and sophisticated design elements.",
      tech: ["HTML", "CSS", "JavaScript", "Animations", "Responsive"],
      category: "frontend",
      image: "/lovable-uploads/bc7aa22f-1d4a-45b3-af95-8719e381ad3d.png",
      github: "#",
      live: "https://diamodjewellery.netlify.app/",
      stats: { stars: 76, forks: 18 },
      featured: true
    },
    {
      title: "Arrow Real Estate",
      description: "Full-stack real estate platform with property listings, user management, and comprehensive backend functionality.",
      longDescription: "Complete real estate solution with property search, user authentication, admin dashboard, and database management for property listings across multiple cities.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Full Stack"],
      category: "fullstack",
      image: "/lovable-uploads/727f5ce7-ed38-4384-b95c-eb9ddef5e657.png",
      github: "#",
      live: "https://arrow-realestate.netlify.app/",
      stats: { stars: 134, forks: 45 },
      featured: true
    },
    {
      title: "Tripy Travel Management",
      description: "Responsive travel management platform with booking systems, trip planning, and destination showcase features.",
      longDescription: "Modern travel website featuring trip planning, destination guides, and travel management tools with beautiful illustrations and responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive", "Travel API"],
      category: "frontend",
      image: "/lovable-uploads/fe9f1082-6ae3-41bb-84e1-6f5ad265083d.png",
      github: "#",
      live: "https://tripy-responsive-web.netlify.app/",
      stats: { stars: 92, forks: 28 },
      featured: false
    },
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
      featured: false
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
      featured: false
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-purple-400 font-medium mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, UI/UX design, and problem-solving
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-white mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            🌟 Featured Projects
          </motion.h3>
          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 group"
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
              >
                <motion.div 
                  className="relative overflow-hidden"
                  variants={cardHoverVariants}
                >
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-all duration-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Overlay buttons */}
                  <motion.div 
                    className="absolute top-4 right-4 flex space-x-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button size="sm" className="bg-black/50 hover:bg-black/70 backdrop-blur-sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button size="sm" className="bg-black/50 hover:bg-black/70 backdrop-blur-sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Stats overlay */}
                  <motion.div 
                    className="absolute bottom-4 left-4 flex space-x-4 text-white text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="h-4 w-4" />
                      <span>{project.stats.forks}</span>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.longDescription}</p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    variants={containerVariants}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <div className="flex space-x-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                        <Play className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Filter tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2 bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* All projects grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 group"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
              </div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.3 }}
              >
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
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-2">
                        <Github className="h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-xs">
                    <Star className="h-3 w-3" />
                    <span>{project.stats.stars}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
