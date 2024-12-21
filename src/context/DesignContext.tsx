import React, { createContext, useState, useContext, ReactNode } from "react";

type Design = "modern" | "newspaper" | "terminal";

interface DesignContextType {
  design: Design;
  setDesign: (design: Design) => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export const DesignProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [design, setDesign] = useState<Design>("terminal");

  return (
    <DesignContext.Provider value={{ design, setDesign }}>
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = () => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error("useDesign must be used within a DesignProvider");
  }
  return context;
};
