import React from 'react';
import { Award, Calendar, ExternalLink, Shield, Trophy, Medal, Star } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Professional level certification for designing distributed systems on AWS",
      credentialId: "AWS-SAA-2024-001",
      verifyLink: "#",
      level: "Professional",
      icon: <Shield className="h-6 w-6" />,
      color: "from-orange-500 to-yellow-500",
      featured: true
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2024", 
      description: "Professional certification for developing scalable applications on GCP",
      credentialId: "GCP-PCD-2024-123",
      verifyLink: "#",
      level: "Professional",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      description: "Advanced React development including hooks, context, and performance optimization",
      credentialId: "META-REACT-2023-045",
      verifyLink: "#",
      level: "Advanced",
      icon: <Medal className="h-6 w-6" />,
      color: "from-blue-600 to-purple-600",
      featured: false
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Comprehensive full-stack development certification covering modern web technologies",
      credentialId: "FCC-FULL-2023-789",
      verifyLink: "#",
      level: "Complete",
      icon: <Award className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      featured: false
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2023",
      description: "Database design, development, and deployment using MongoDB",
      credentialId: "MONGO-DEV-2023-456",
      verifyLink: "#",
      level: "Associate",
      icon: <Star className="h-6 w-6" />,
      color: "from-green-600 to-green-700",
      featured: false
    },
    {
      title: "Kubernetes Administrator",
      issuer: "CNCF",
      date: "2024",
      description: "Container orchestration and Kubernetes cluster administration",
      credentialId: "CKA-2024-789",
      verifyLink: "#",
      level: "Professional",
      icon: <Shield className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      featured: false
    }
  ];

  const featuredCerts = certificates.filter(cert => cert.featured);
  const otherCerts = certificates.filter(cert => !cert.featured);

  const achievements = [
    { label: "Certifications", value: "12+", icon: <Award className="h-6 w-6" /> },
    { label: "Professional Level", value: "5", icon: <Trophy className="h-6 w-6" /> },
    { label: "Cloud Platforms", value: "3", icon: <Shield className="h-6 w-6" /> },
    { label: "Skill Areas", value: "8+", icon: <Medal className="h-6 w-6" /> }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <p className="text-purple-400 font-medium mb-2">Achievements</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Certificates & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Credentials</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-scale-in"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my expertise across various technologies
            </p>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 animate-scale-in group" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex justify-center mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
              <div className="text-gray-400 text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Certificates */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 animate-fade-in">🏆 Featured Certifications</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredCerts.map((cert, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group transform hover:scale-105 hover:shadow-2xl animate-slide-up`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center animate-glow transition-all duration-300 group-hover:scale-110`}>
                      {React.cloneElement(cert.icon, { className: "h-6 w-6 text-white" })}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white text-xs font-semibold rounded-full`}>
                        {cert.level}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {cert.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-purple-400 font-medium mb-3">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Credential ID</p>
                        <p className="text-sm text-gray-300 font-mono">{cert.credentialId}</p>
                      </div>
                      
                      <a 
                        href={cert.verifyLink} 
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-medium transform hover:scale-110 hover:translate-x-1 group"
                      >
                        <ExternalLink className="h-4 w-4 mr-1 group-hover:animate-pulse" />
                        Verify
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Certificates Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 animate-fade-in">📜 All Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCerts.map((cert, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 group transform hover:scale-105 animate-fade-in`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    {React.cloneElement(cert.icon, { className: "h-5 w-5 text-white" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
                      {cert.title}
                    </h3>
                    <p className="text-purple-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{cert.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 bg-gradient-to-r ${cert.color} text-white text-xs font-semibold rounded`}>
                    {cert.level}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {cert.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
