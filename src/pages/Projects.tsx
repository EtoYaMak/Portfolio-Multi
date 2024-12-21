import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../context/DesignContext";
import { projects } from "../base/Projects";

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const { design } = useDesign();
  const isTerminal = design === "terminal";

  return (
    <div
      className={`page ${theme} ${design} ${
        isTerminal ? "max-h-[calc(100vh-14vh)] overflow-y-scroll mb-6" : ""
      }`}
    >
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
