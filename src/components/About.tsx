import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Phone, Mail, User, GraduationCap, Briefcase, Globe } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const personalInfo = [
    { icon: Calendar, label: 'Birthday', value: '18 Nov 2005' },
    { icon: Globe, label: 'Website', value: 'www.techinzi.com' },
    { icon: Phone, label: 'Phone', value: '+91 9043531165' },
    { icon: MapPin, label: 'City', value: 'Tamil Nadu, India' },
    { icon: User, label: 'Age', value: '20' },
    { icon: GraduationCap, label: 'Degree', value: 'M.Tech' },
    { icon: Mail, label: 'Email', value: 'inzimamulhaqn@gmail.com' },
    { icon: Briefcase, label: 'Freelance', value: 'Available' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            I'm Inzimam Ul Haq — a passionate web developer, freelancer, and hands-on coder who loves creating visually appealing, 
            responsive, and functional websites. With a strong eye for design and detail, I build web experiences that are not only user-friendly but also performance-driven.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="order-1 lg:order-1 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
{/*               <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl blur-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              /> */}
              <motion.img 
                src="/lovable-uploads/e2df5aea-fa40-4f63-9165-c7786a36b1ed.png" 
                alt="Inzimamul Haq N"
                className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="order-2 lg:order-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                UI/UX Designer & Web Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg italic mb-6">
                I create visually appealing designs and responsive websites that work seamlessly across devices. 
                From social media banners to full-scale web interfaces, I blend creative design with clean code to deliver engaging digital experiences.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {personalInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex-shrink-0">
                    <info.icon className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">{info.label}:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p 
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Driven by a deep passion for web development, creative design, and hands-on coding, I focus on building real-world 
              digital solutions that are both functional and visually engaging. Whether it's designing stunning visuals in Canva 
              or developing seamless web experiences, I'm constantly exploring new tools and technologies to bring ideas to life 
              with impact and precision.
            </motion.p>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '30+', label: 'Happy Clients' },
            { number: '2+', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 backdrop-blur-sm border border-purple-200"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.h4 
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {stat.number}
              </motion.h4>
              <p className="text-white font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
