import React from "react";
import { motion } from "framer-motion";
import PortfolioItem from "../components/PortfolioItem";

const Home: React.FC = () => {
  const yearsOfExperience = new Date().getFullYear() - 2018;

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="newspaper-container">
        <div className="newspaper-border">
          <motion.div
            className="text-center mb-12 max-w-2xl mx-auto"
            variants={contentVariants}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-5xl font-jersey mb-6">DEVELOPER CHRONICLE</h2>
            <p className="text-sm uppercase font-jersey">Est. 2018</p>
            <div className="border-b-2 border-[#2b2b2b] my-4"></div>
            <p className="text-xl font-jersey leading-relaxed mb-6 column-count-2 gap-8 text-justify">
              Full Stack Developer with {yearsOfExperience} years of experience crafting robust web applications 
              and scalable solutions. Passionate about clean code, modern technologies, 
              and building seamless user experiences.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-0 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="newspaper-column">
              <PortfolioItem
                title="Technical Expertise"
                description="Specialized in React, TypeScript, Node.js, and modern web technologies. Experienced in building full-stack applications from concept to deployment."
              />
            </div>
            <div className="newspaper-column">
              <PortfolioItem
                title="Problem Solver"
                description="Dedicated to finding elegant solutions to complex technical challenges while maintaining code quality and performance."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
