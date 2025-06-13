
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Certified in developing and maintaining applications on AWS platform",
      credentialId: "AWS-DEV-2024-001",
      verifyLink: "#"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      description: "Advanced React development including hooks, context, and performance optimization",
      credentialId: "META-REACT-2023-045",
      verifyLink: "#"
    },
    {
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      description: "Comprehensive full-stack development including frontend and backend technologies",
      credentialId: "FCC-FULL-2023-789",
      verifyLink: "#"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2024",
      description: "Cloud architecture and development on Google Cloud Platform",
      credentialId: "GCP-PRO-2024-123",
      verifyLink: "#"
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Certificates & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-scale-in"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group transform hover:scale-105 hover:shadow-2xl animate-slide-up`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-glow transition-all duration-300 group-hover:scale-110">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-purple-400 font-medium mb-1 animate-fade-in-left" style={{animationDelay: `${index * 0.2 + 0.1}s`}}>
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-3 animate-fade-in-left" style={{animationDelay: `${index * 0.2 + 0.2}s`}}>
                    <Calendar className="h-4 w-4 mr-2" />
                    {cert.date}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed animate-fade-in" style={{animationDelay: `${index * 0.2 + 0.3}s`}}>
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between animate-fade-in" style={{animationDelay: `${index * 0.2 + 0.4}s`}}>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Credential ID</p>
                      <p className="text-sm text-gray-300 font-mono">{cert.credentialId}</p>
                    </div>
                    
                    <a 
                      href={cert.verifyLink} 
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-medium transform hover:scale-110 hover:translate-x-1"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Verify
                    </a>
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

export default Certificates;
