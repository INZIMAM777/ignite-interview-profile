
import React from 'react';
import { User, Calendar, MapPin, GraduationCap, Phone, Mail, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-purple-400 font-medium mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            I'm Inzimam Ul Haq — a passionate web developer, freelancer, and hands-on coder who loves creating visually appealing, 
            responsive, and functional websites. With a strong eye for design and detail, I build web experiences that are not only 
            user-friendly but also performance-driven.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-500"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <User className="h-6 w-6 text-purple-400 mr-3" />
                UI/UX Designer & Web Developer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I create visually appealing designs and responsive websites that work seamlessly across devices. 
                From social media banners to full-scale web interfaces, I blend creative design with clean code 
                to deliver engaging digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In addition to web development, I work as a prompt developer, using AI tools to speed up workflows 
                and innovate faster. I'm also experienced in designing social media banners and posts using Canva, 
                helping brands maintain a strong visual presence.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 hover:scale-105 transition-all duration-500"
                variants={itemVariants}
              >
                <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white">Age</h4>
                <p className="text-gray-400">20 Years</p>
              </motion.div>
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 hover:scale-105 transition-all duration-500"
                variants={itemVariants}
              >
                <GraduationCap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white">Education</h4>
                <p className="text-gray-400">M.Tech Student</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-500"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Personal Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-purple-400" />
                    <div>
                      <span className="text-gray-400">Birthday:</span>
                      <span className="text-white ml-2">18 Nov 2005</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-purple-400" />
                    <div>
                      <span className="text-gray-400">Website:</span>
                      <span className="text-white ml-2">techinzi.com</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-400" />
                    <div>
                      <span className="text-gray-400">Phone:</span>
                      <span className="text-white ml-2">+91 9043531165</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    <div>
                      <span className="text-gray-400">City:</span>
                      <span className="text-white ml-2">Tamil Nadu, India</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-purple-400" />
                    <div>
                      <span className="text-gray-400">Age:</span>
                      <span className="text-white ml-2">20</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-purple-400" />
                    <div>
                      <span className="text-gray-400">Degree:</span>
                      <span className="text-white ml-2">M.Tech</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <div>
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white ml-2">inzimamulhaqn@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-purple-400" />
                    <div>
                      <span className="text-gray-400">Freelance:</span>
                      <span className="text-green-400 ml-2">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-500"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-medium text-white">Master of Technology & Software Engineering</h4>
                  <p className="text-purple-400 font-medium">2023 - 2028</p>
                  <p className="text-gray-400">Vellore Institute of Technology, Vellore</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Currently pursuing M.Tech in Integrated Software Engineering with 83% academic performance till 4th semester.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <h4 className="text-lg font-medium text-white">Higher Secondary School</h4>
                  <p className="text-pink-400 font-medium">2021 - 2023</p>
                  <p className="text-gray-400">Islamiah Higher Secondary School, Vellore</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Completed with 83% including a centum in Chemistry.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
