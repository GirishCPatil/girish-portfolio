import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Code, FileCode, FileText, Braces, Server, Database } from 'lucide-react';
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.3
  });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  const skills = [{
    name: 'HTML',
    level: 90,
    icon: <FileCode className="text-orange-500" />
  }, {
    name: 'CSS',
    level: 85,
    icon: <FileText className="text-blue-500" />
  }, {
    name: 'JavaScript',
    level: 85,
    icon: <Braces className="text-yellow-500" />
  }, {
    name: 'React',
    level: 80,
    icon: <Code className="text-cyan-500" />
  }, {
    name: 'Node.js',
    level: 75,
    icon: <Server className="text-green-500" />
  }, {
    name: 'MongoDB',
    level: 70,
    icon: <Database className="text-green-600" />
  }];
  return <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div initial="hidden" animate={controls} variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }} className="max-w-3xl mx-auto">
          <motion.div variants={{
          hidden: {
            opacity: 0,
            y: 20
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6
            }
          }
        }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">About Me</h2>
            <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={{
            hidden: {
              opacity: 0,
              x: -50
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6
              }
            }
          }} className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary">
                  <img src="https://media.licdn.com/dms/image/v2/D5603AQEGYALSDxP55A/profile-displayphoto-shrink_400_400/B56ZQXGtHiG4Ak-/0/1735554422135?e=1751500800&v=beta&t=oqm9UbGux07h1KscNRl65XFunmglh6mBKZ4BfFMx8-A" alt="Girishgouda Patil" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-lg">MERN Stack</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={{
            hidden: {
              opacity: 0,
              x: 50
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6
              }
            }
          }} className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold">
                <span className="text-gradient">Full Stack Developer</span> with a passion for crafting digital experiences
              </h3>
              <p className="text-muted-foreground">
                I'm a passionate MERN stack developer with a strong foundation in building modern web applications. 
                My journey in development began with a curiosity to create and has evolved into a career path 
                focused on delivering high-quality, user-centric solutions.
              </p>
              <p className="text-muted-foreground">
                I enjoy taking on challenging projects that push my boundaries and allow me to learn new technologies and techniques. 
                My goal is to develop applications that not only meet technical requirements but also provide exceptional user experiences.
              </p>
              
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;