
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto z-10 px-4 md:px-0">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            {/* <h3 className="text-lg md:text-xl text-secondary">Welcome to my Portfolio</h3> */}
            <h1 className="text-3xl md:text-5xl font-bold">
              Hi, I'm <span className="text-gradient">Girishgouda Patil</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mt-2 h-12">
              <span className="text-primary">
                <Typewriter
                  words={['Full Stack Developer', 'MERN Stack Developer', 'Web Developer', 'React Developer']}
                  loop={0}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              I design and develop modern web applications with a focus on clean code and exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <a 
              href="https://drive.google.com/file/d/1GTMjJd_dRKAQbUWIGA5w3I7PUMlzS2I9/view?usp=sharing" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium flex items-center space-x-2 transition-all duration-300 hover:-translate-y-1"
              download
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
              <span>Download Resume</span>
            </a>
            
            <a 
              href="https://github.com/GirishCPatil" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium flex items-center space-x-2 transition-all duration-300 hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/girish-patil-a787a02b1/" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium flex items-center space-x-2 transition-all duration-300 hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <a 
              href="#about" 
              className="animate-bounce-slow inline-block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M7 13l5 5 5-5"></path>
                <path d="M7 6l5 5 5-5"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
