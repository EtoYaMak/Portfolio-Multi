import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  role: string;
  year: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Project Name 1",
      description:
        "A comprehensive web application that demonstrates modern architecture and best practices in full-stack development.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      role: "Lead Developer",
      year: "2023",
    },
    {
      title: "Project Name 2",
      description:
        "An innovative solution that showcases real-time data processing and interactive user experiences.",
      technologies: ["Next.js", "GraphQL", "MongoDB", "AWS"],
      role: "Full Stack Developer",
      year: "2022",
    },
    // Add more projects as needed
  ];

  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="newspaper-container">
        <div className="newspaper-border">
          <h2 className="text-4xl font-jersey text-center mb-8">
            Notable Works
          </h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                className="border-b-2 border-[#2b2b2b] last:border-b-0 pb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-jersey mb-2">{project.title}</h3>
                <div className="flex justify-between mb-4">
                  <p className="font-jersey text-3xl">{project.role}</p>
                  <p className="font-jersey text-base">{project.year}</p>
                </div>
                <p className="font-jersey mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#2b2b2b] text-[#f4f1ea] px-2 py-1 text-sm font-jersey"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
