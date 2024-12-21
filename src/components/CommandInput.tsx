import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CommandInput: React.FC = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [helpVisible, setHelpVisible] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [command]);

  const handleCommand = (cmd: string) => {
    switch (cmd.toLowerCase()) {
      case "back":
      case "cd..":
        navigate(-1);
        break;
      case "home":
        navigate("/");
        break;
      case "projects":
        navigate("/projects");
        break;
      case "experience":
        navigate("/experience");
        break;
      case "skills":
        navigate("/skills");
        break;
      case "help":
        setHelpVisible(true);
        break;
      case "clear":
      case "cls":
        setHelpVisible(false);
        setOutput([]);
        break;
      case " ":
        setOutput((prev) => [...prev, ""]);
        break;
      default:
        setOutput((prev) => [
          ...prev,
          "Invalid command. Type 'help' for a list of commands.",
        ]);
    }
    setCommand("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(command.trim());
  };

  return (
    <div className="w-full bg-black p-3 absolute bottom-0 left-0 right-0 border-t border-[#00ff00]">
      {output.map((line, index) => (
        <div key={index} className="text-[#00ff00]">
          {line}
        </div>
      ))}
      {helpVisible && (
        <div className="text-[#00ff00] mb-2">
          Available commands: home, projects, experience, skills, back, cd..,
          help, clear, cls
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex items-center gap-1 w-full">
        <span className="text-[#00ff00] w-fit">&gt; </span>
        <input
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="w-full bg-black text-[#00ff00] outline-none placeholder:text-[#00ff00]/40 font-monospace"
          placeholder="Type a command here... enter to submit eg. 'projects' or 'help'"
        />
      </form>
    </div>
  );
};

export default CommandInput;
