
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const education = [
    {
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'Basavakalyan Engineering College, Karnataka',
      duration: '2021 - 2025',
      score: 'CGPA: 8.9'
    },
    {
      degree: '12th - Science (PCMB)',
      institution: "Alva's PU College, Mangaluru",
      duration: '2020 - 2021',
      score: '95.33%'
    },
    {
      degree: '10th - SSLC',
      institution: 'Shri Marikamba PU College, Sirsi',
      duration: '2018 - 2019',
      score: '89.60%'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Education</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background that has prepared me for a career in web development.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto relative"
        >
          {/* Timeline Stem */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:translate-x-px"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row md:items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot with Education Icon */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-primary transform -translate-x-5 md:-translate-x-5 flex items-center justify-center z-10">
                <GraduationCap size={20} className="text-background" />
              </div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gradient mb-2">
                    {item.degree}
                  </h3>
                  <p className="font-medium mb-1">{item.institution}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{item.duration}</span>
                    <span>{item.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
