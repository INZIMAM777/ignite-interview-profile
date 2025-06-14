
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Vellore, Tamil Nadu, India-635810',
      color: 'text-purple-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 9043531165',
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'inzimamulhaqn@gmail.com',
      color: 'text-blue-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I'm always open to freelance opportunities, collaborations, or creative discussions. 
            Feel free to reach out — I'd love to hear from you and see how we can bring your ideas to life!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className={`flex-shrink-0 p-3 rounded-lg bg-white/10 ${info.color}`}>
                  <info.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-gray-300">{info.details}</p>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div 
              className="h-64 rounded-xl overflow-hidden border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089513458!2d79.01219787343744!3d12.822424989176203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5594e8ed9d007b%3A0x5b49f2b5ed3c9c7a!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1647875924359!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder-gray-400 focus:border-purple-400"
                    placeholder="Enter your name"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder-gray-400 focus:border-purple-400"
                    placeholder="Enter your email"
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/30 text-white placeholder-gray-400 focus:border-purple-400"
                  placeholder="Enter subject"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white/10 border-white/30 text-white placeholder-gray-400 focus:border-purple-400 resize-none"
                  placeholder="Enter your message"
                />
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 group"
                >
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Send className="mr-2 h-4 w-4" />
                  </motion.div>
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
