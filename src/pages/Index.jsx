
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useToast } from '../hooks/use-toast';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast when portfolio loads
    setTimeout(() => {
      toast({
        title: "Welcome to my portfolio!",
        description: "Explore my projects and skills. Feel free to get in touch.",
      });
    }, 2000);
  }, [toast]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
