import { motion } from 'framer-motion';
import { ChevronDown, Download, Send } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/SHANJID-AHMED-RAFI.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SHANJID-AHMED-RAFI.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-primary-50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-20">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: text content (left-aligned on md+) */}
            <div className="text-left">
              {/* Greeting */}
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white mb-4"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent inline-block">
                  <Typewriter
                    options={{
                      strings: ['SHANJID AHMED RAFI'],
                      autoStart: true,
                      loop: true,
                      delay: 200,
                      cursor: '',
                    }}
                  />
                </span>
              </motion.h1>

              {/* Title */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
              >
                Full Stack Web Developer
              </motion.p>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed"
              >
                I design and build accessible, high-performance web applications using React and
                Next.js, leveraging modern tooling like Tailwind CSS. I focus on
                clean, component-driven code, server-rendered and client-side solutions, responsive
                interfaces, and practical UX delivering reliable, production-ready applications.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row sm:flex-nowrap gap-4 justify-start items-center"
              >
                <a href="#projects" className="btn-primary group inline-flex items-center gap-2 whitespace-nowrap">
                  <span>View My Work</span>
                  <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
                </a>
                <a href="#contact" className="btn-secondary group inline-flex items-center gap-2 whitespace-nowrap">
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  <span>Get In Touch</span>
                </a>
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 px-6 py-3 text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </button>
              </motion.div>
            </div>

            {/* Right: image */}
              <motion.div variants={itemVariants} className="hidden md:flex items-center justify-center">
              <div className="w-72 h-72 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center overflow-hidden">
                  <img src="/seting.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-400 dark:text-gray-600"
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
