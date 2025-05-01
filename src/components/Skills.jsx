
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FileCode, 
  FileText, 
  Braces, 
  Code, 
  Workflow, 
  Server, 
  Database, 
  Network, 
  Github, 
  GitFork, 
  Terminal, 
  Figma, 
  Package, 
  SquareTerminal 
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skills = [
    {
      category: 'Frontend',
      techs: [
        { name: 'HTML', icon: <FileCode size={24} className="text-orange-500" /> },
        { name: 'CSS', icon: <FileText size={24} className="text-blue-500" /> },
        { name: 'JavaScript', icon: <Braces size={24} className="text-yellow-500" /> },
        { name: 'React', icon: <Code size={24} className="text-cyan-500" /> },
        { name: 'Redux', icon: <Workflow size={24} className="text-purple-500" /> },
        { name: 'Tailwind CSS', icon: <FileText size={24} className="text-sky-400" /> },
      ],
    },
    {
      category: 'Backend',
      techs: [
        { name: 'Node.js', icon: <Server size={24} className="text-green-500" /> },
        { name: 'Express', icon: <Network size={24} className="text-gray-400" /> },
        { name: 'MongoDB', icon: <Database size={24} className="text-green-600" /> },
        { name: 'REST API', icon: <Network size={24} className="text-blue-400" /> },
      ],
    },
    {
      category: 'Tools & Others',
      techs: [
        { name: 'Git', icon: <GitFork size={24} className="text-orange-600" /> },
        { name: 'GitHub', icon: <Github size={24} className="text-white" /> },
        { name: 'VS Code', icon: <Terminal size={24} className="text-blue-500" /> },
        { name: 'Figma', icon: <Figma size={24} className="text-pink-500" /> },
        { name: 'NPM', icon: <Package size={24} className="text-red-500" /> },
        { name: 'Postman', icon: <SquareTerminal size={24} className="text-orange-500" /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Skills & Technologies</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. 
            Here's a quick overview of my technical skillset.
          </p>
        </div>

        <div className="space-y-12 mt-12">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6 text-center text-gradient">
                {skillGroup.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
              >
                {skillGroup.techs.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    variants={itemVariants}
                    className="glass-card hover-glow p-6 rounded-lg text-center transition-all duration-300"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <h4 className="font-medium">{tech.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
