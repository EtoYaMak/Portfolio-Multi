import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import CommandInput from "./components/CommandInput";
import "./index.css";
import { useTheme } from "./context/ThemeContext";
import { useDesign } from "./context/DesignContext";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { design, setDesign } = useDesign();

  const isTerminal = design === "terminal";

  return (
    <Router>
      <div
        className={`min-h-screen w-full flex flex-col ${
          theme === "light" && !isTerminal ? "bg-white" : "bg-black"
        } ${isTerminal && "bg-black"}`}
      >
        <div className="w-full mx-auto px-4 relative h-full">
          <header
            className={`flex justify-between items-center p-4 z-10 ${
              isTerminal ? "absolute top-0 left-0 right-0" : ""
            }`}
          >
            <h1
              className={`${
                theme === "light" && !isTerminal ? "text-black" : ""
              } ${
                isTerminal
                  ? "text-[#00ff00] font-jersey text-3xl font-medium"
                  : "text-3xl font-bold"
              }`}
            >
              My Portfolio
            </h1>
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className={`mr-4 ${isTerminal ? `hidden` : "text-black"}`}
              >
                Toggle Theme
              </button>
              <select
                onChange={(e) => setDesign(e.target.value as any)}
                value={design}
                className={`${
                  isTerminal
                    ? `text-[#00ff00] bg-black border border-[#00ff00] -mt-2`
                    : "text-black"
                } mr-4 `}
                style={{
                  appearance: isTerminal ? "none" : undefined,
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                }}
              >
                <option value="modern">Modern</option>
                <option value="newspaper">Newspaper</option>
                <option value="terminal">Terminal</option>
              </select>
            </div>
          </header>
          <main
            className={`flex-1 relative w-full mx-auto min-h-min ${
              isTerminal ? "mt-14 max-h-[calc(100vh-20vh)]" : ""
            }`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </main>
          {isTerminal && <CommandInput />}
        </div>
      </div>
    </Router>
  );
};

export default App;
