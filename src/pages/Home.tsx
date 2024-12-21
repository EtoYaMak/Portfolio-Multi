import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../context/DesignContext";
import { personalInfo } from "../base/PersonalInfo";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { design } = useDesign();

  const isTerminal = design === "terminal";

  return (
    <div
      className={`page ${theme} ${design}  ${
        isTerminal
          ? "selection:bg-[#fff] selection:text-black min-h-[calc(90vh)]"
          : ""
      }`}
      style={{
        backgroundColor: isTerminal ? "#000000" : undefined,
        color: isTerminal ? "#00ff00" : undefined,
        fontFamily: isTerminal ? "monospace" : undefined,
        padding: isTerminal ? "1rem" : undefined,
      }}
    >
      <h1>
        {isTerminal ? "> " : ""}
        {personalInfo.name}
      </h1>
      <p>
        {isTerminal ? "> " : ""}
        {personalInfo.summary}
      </p>
    </div>
  );
};

export default Home;
