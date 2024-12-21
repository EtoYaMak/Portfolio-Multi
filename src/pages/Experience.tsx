import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../context/DesignContext";
import { experience } from "../base/Experience";

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const { design } = useDesign();
  const isTerminal = design === "terminal";

  return (
    <div
      className={`page ${theme} ${design} ${
        isTerminal ? "max-h-[calc(100vh-15vh)] overflow-y-scroll mb-6" : ""
      }`}
    >
      <h1>Experience</h1>
      {experience.map((job, index) => (
        <div key={index}>
          <h2>
            {job.role} at {job.company}
          </h2>
          <p>{job.period}</p>
          <ul>
            {job.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
      {experience.map((job, index) => (
        <div key={index}>
          <h2>
            {job.role} at {job.company}
          </h2>
          <p>{job.period}</p>
          <ul>
            {job.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
