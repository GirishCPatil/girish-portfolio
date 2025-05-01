
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setFormState({ isSubmitting: false, isSubmitted: true, error: null });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Get In Touch</h2>
            <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-gradient">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                    <p>+91 7022134248</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                    <p>girishpatil621@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                    <p>Hangal, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gradient mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/GirishCPatil" 
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/girish-patil-a787a02b1/" 
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="https://mail.google.com/mail/u/0/?fs=1&to=girishpatil621@gmail.com" 
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gradient mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border-2 border-muted p-4 rounded-lg focus:outline-none focus:border-primary transition-colors peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-muted px-1 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all duration-300 peer-focus:text-primary"
                  >
                    Your Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border-2 border-muted p-4 rounded-lg focus:outline-none focus:border-primary transition-colors peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-muted px-1 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all duration-300 peer-focus:text-primary"
                  >
                    Email Address
                  </label>
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-muted border-2 border-muted p-4 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none peer"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-muted px-1 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all duration-300 peer-focus:text-primary"
                  >
                    Your Message
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={formState.isSubmitting || formState.isSubmitted}
                  className={`w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg font-medium transition-colors ${
                    formState.isSubmitted ? 'bg-green-600 hover:bg-green-600' : ''
                  } ${formState.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {formState.isSubmitting
                    ? 'Sending...'
                    : formState.isSubmitted
                    ? 'Message Sent!'
                    : 'Send Message'}
                </button>
                
                {formState.error && (
                  <p className="text-red-500 text-sm">{formState.error}</p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
