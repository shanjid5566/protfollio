import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "Redux", level: 80 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 85 },
        { name: "REST APIs", level: 84 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 79 },
        { name: "Vercel", level: 70 },
        { name: "Netlify", level: 65 },
      ],
    },
  ];

  const tools = [
    "React",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Express",
    "Next.js",
    "Git",
    "Figma",
    "Redux",
    "Firebase",
    "Framer Motion",
    "Vercel",
    "Netlify",
  ];

  return (
    <section
      id="skills"
      className="section-container bg-white dark:bg-dark-900"
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
            Skills & Expertise
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
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>

        {/* Skills with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="card"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-5 py-2.5 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800 cursor-pointer hover:shadow-md transition-all text-center whitespace-nowrap"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
