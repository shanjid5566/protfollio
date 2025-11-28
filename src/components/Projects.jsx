import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Indian Drone Services",
      description:
        "A comprehensive drone service platform offering aerial photography, surveying, and delivery solutions using cutting-edge drone technology.",
      image: "/indian_drone_services.jpg",
      tags: ["React", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/shanjid5566/Indian_Drone_service.git",
      demo: "https://prasad-1.mtscorporate.com/",
      category: "Full Stack",
    },
    {
      title: "Whatsapp Bot",
      description:
        "An automated WhatsApp bot that interacts with users, providing information, answering queries, and performing tasks using the WhatsApp Business API.",
      image: "/whatsapp_bot.jpg",
      tags: ["React", "Firebase", "Tailwind CSS", "Express"],
      github: "https://github.com/shanjid5566/whatsappbot.git",
      demo: "https://louisalex.mtscorporate.com/",
      category: "Frontend",
    },
    {
      title: "Q Global Living.",
      description: "Connecting the World to Côte d'Ivoire's Real Estate",
      image: "/qHomes.jpeg",
      tags: ["Next.js", "Chart.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/shanjid5566/qHomes.git",
      demo: "https://qhomes.mtscorporate.com/en",
      category: "Full Stack",
    },
    {
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with 7-day forecast, interactive maps, and location-based weather alerts.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      tags: ["React", "OpenWeather API", "Tailwind CSS", "Redux"],
      github: "https://github.com/shanjid5566/weather-react-redux.git",
      demo: "https://weather-react-redux-beige.vercel.app/",
      category: "Frontend",
    },
    {
      title: "CryptoCurrency",
      description:
        "Real-time cryptocurrency app with price tracking, market analysis, and portfolio management features.",
      image: "/cryptoCurrency.jpg",
      tags: ["React", "Express", "PostgreSQL", "Chart.js"],
      github: "https://github.com/shanjid5566/cryptoCurrency.git",
      demo: "https://heera.mtscorporate.com/",
      category: "Full Stack",
    },
    {
      title: "Simple Dictionary App",
      description:
        "A user-friendly dictionary application that provides word definitions, synonyms, and pronunciation guides.",
      image: "/dictionary.jpg",
      tags: ["React", "Tailwind CSS", "LibreTranslate "],
      github: "https://github.com/shanjid5566/simple-dictionary-react.git",
      demo: "https://simple-dictionary-react.vercel.app/",
      category: "Frontend",
    },
    {
      title: "Simple Invoice Generator",
      description:
        "A straightforward invoice generator that allows users to create, customize, and download professional invoices quickly.",
      image: "/invoice_generator.png",
      tags: ["React", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/shanjid5566/invoice-generator-react.git",
      demo: "https://invoice-generator-react-mu.vercel.app/",
      category: "Frontend",
    },
    {
      title: "Stone Paper Scissors Game",
      description:
        "An interactive Stone-Paper-Scissors game with score tracking and animated graphics for an engaging user experience.",
      image: "/stone_paper.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/shanjid5566/stone-paper-scissors.git",
      demo: "https://stone-paper-scissors-tan.vercel.app/",
      category: "Frontend",
    },
    {
      title: "Text to Speech Converter",
      description:
        "A web application that converts written text into natural-sounding speech using advanced text-to-speech technology.",
      image: "/text_to_speech.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/shanjid5566/text-to-speech-converter.git",
      demo: "https://text-to-speech-converter-five-beta.vercel.app/",
      category: "Frontend",
    },
  ];

  return (
    <section
      id="projects"
      className="section-container bg-gray-50 dark:bg-dark-800"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and
            passion for creating exceptional digital experiences.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer overflow-hidden p-0"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-gray-900 py-2 rounded-lg transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm text-xs font-medium text-gray-900 dark:text-white rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
