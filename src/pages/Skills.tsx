import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../context/DesignContext";
import { skills } from "../base/Skills";

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const { design } = useDesign();
  const isTerminal = design === "terminal";

  return (
    <div
      className={`page ${theme} ${design} ${
        isTerminal
          ? "max-h-[calc(100vh-14vh)] overflow-y-scroll mb-6 h-screen"
          : ""
      }`}
    >
      <h1>Skills</h1>
      <h2>Technical Skills</h2>
      <ul>
        {skills.technical.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2>Soft Skills</h2>
      <ul>
        {skills.soft.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
