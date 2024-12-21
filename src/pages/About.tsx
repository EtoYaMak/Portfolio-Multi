import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="newspaper-container">
        <div className="newspaper-border">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-jersey text-center mb-8">Professional Biography</h2>
            
            <div className="space-y-6 font-jersey">
              <p className="text-justify">
                A seasoned Full Stack Developer with a passion for crafting efficient, scalable, and user-centric web applications. Since embarking on this journey in 2018, I've dedicated myself to mastering both front-end and back-end technologies.
              </p>

              <div className="border-b-2 border-[#2b2b2b] py-4">
                <h3 className="text-2xl mb-4">Technical Proficiencies</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Frontend: React, TypeScript, Next.js, Tailwind CSS</li>
                  <li>Backend: Node.js, Express, PostgreSQL, MongoDB</li>
                  <li>Tools: Git, Docker, AWS, CI/CD pipelines</li>
                </ul>
              </div>

              <div className="border-b-2 border-[#2b2b2b] py-4">
                <h3 className="text-2xl mb-4">Professional Philosophy</h3>
                <p className="text-justify">
                  I believe in writing clean, maintainable code that solves real-world problems. My approach combines technical expertise with a strong focus on user experience and business objectives.
                </p>
              </div>

              <div className="py-4">
                <h3 className="text-2xl mb-4">Continuous Learning</h3>
                <p className="text-justify">
                  The tech industry's rapid evolution drives my commitment to continuous learning and adaptation. I regularly explore new technologies and methodologies to enhance my development capabilities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About; 