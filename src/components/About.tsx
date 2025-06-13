
import React from 'react';
import { User, Calendar, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate software developer with a strong foundation in modern web technologies. 
                Currently pursuing my degree in Computer Science, I combine academic knowledge with 
                hands-on experience to create innovative solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a deep passion for 
                creating user-centric applications that solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white">Experience</h4>
                <p className="text-gray-400">2+ Years</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <GraduationCap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white">Education</h4>
                <p className="text-gray-400">Computer Science</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Frontend Development</h4>
                    <p className="text-gray-400">Creating responsive and interactive user interfaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Backend Development</h4>
                    <p className="text-gray-400">Building robust server-side applications and APIs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Problem Solving</h4>
                    <p className="text-gray-400">Analyzing complex problems and designing efficient solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
