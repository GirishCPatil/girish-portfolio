
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
      {
      title: 'GreenCart - E-commerce with Payment Gateway',
      description: 'GreenCart is a grocery web app with cart, online payment via Stripe, and real-time order updates using webhooks. Built with Node.js, React, Express, and MongoDB.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Cloudinary', 'JWT', 'Tailwind CSS'],
      demoUrl: 'https://green-cart-nu-eight.vercel.app/',
      githubUrl: 'https://github.com/GirishCPatil/GreenCart-Ecommerce',
      image: 'https://i.ibb.co/Cs6khjCB/Screenshot-2025-08-03-120641.png'
    },
      {
      title: 'Streamify - Real-time Video Chat App',
      description: 'Streamify is a real-time video chat app with friend requests, chat, and calling features using Stream API, TanStack Query, and protected user routes. Built with Node.js, React, Express, and MongoDB.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stream API', 'JWT', 'Tailwind CSS'],
      demoUrl: 'https://streamify-video-calls-master-1-x3a8.onrender.com/login',
      githubUrl: 'https://github.com/GirishCPatil/streamify-video-calls-master',
      image: 'https://i.ibb.co/v6zpzV6n/Screenshot-2025-08-03-123535.png'
    },
    {
      title: 'Airbnb Clone',
      description: 'A full-stack Airbnb clone with property CRUD Operations ,listings and user authentication.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap CSS'],
      demoUrl: 'https://airbnb-jz4y.onrender.com/listings',
      githubUrl: 'https://github.com/GirishCPatil/Apna-College-Web/tree/main/Major-project',
      image: 'https://i.ibb.co/Q37CT63F/Screenshot-2025-04-30-011609.png'
    },
    {
      title: 'Spotify Clone',
      description: 'Music streaming application with playlist creation, artist profiles, and song recommendations.',
      tech: ['HTML5', 'CSS3', 'javascript', 'localstorage'],
      demoUrl: 'https://github.com/GirishCPatil/spotify',
      githubUrl: 'https://github.com/GirishCPatil/spotify',
      image: 'https://i.ibb.co/W4Bk92c5/Screenshot-2024-07-24-214306.png'
    },
    {
      title: 'Task Manager',
      description: 'A feature-rich task management application with task categorization, priority levels, and deadline tracking.',
      tech: ['React', 'Javascript', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: '#',
      image: 'https://i.ibb.co/chXD6jJt/Screenshot-2025-05-01-124757.png'
    },
    {
      title: 'Netflix Clone',
      description: 'Video streaming platform with content categorization, user profiles, and recommendation engine.',
      tech: ['HTML5', 'CSS',  'Javascript'],
      demoUrl: 'https://girishcpatil.github.io/netflix/',
      githubUrl: 'https://github.com/GirishCPatil/netflix',
      image: 'https://i.ibb.co/DhCg0Rj/Screenshot-2025-04-30-005452.png'
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Featured Projects</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card overflow-hidden rounded-lg hover-glow"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gradient">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-xs font-medium px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/80 text-primary-foreground px-4 py-2 rounded text-sm font-medium transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded text-sm font-medium transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
