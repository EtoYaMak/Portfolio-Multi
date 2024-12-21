import { Theme } from "./ThemeTypes";

export const terminalTheme: Theme = {
  name: "terminal",
  styles: {
    typography: {
      headings: {
        h1: "1.5rem",
        h2: "1.25rem",
        h3: "1rem",
      },
      body: "0.875rem",
      accent: "#00ff00",
      fontFamily: "Jersey",
    },
    colors: {
      primary: "#000000",
      secondary: "#333333",
      background: "#000000",
      text: "#00ff00",
      accent: "#00ff00",
      highlight: "#ffffff",
    },
    spacing: {
      small: "0.5rem",
      medium: "1rem",
      large: "2rem",
    },
    layout: {
      maxWidth: "100%",
      borderRadius: "0",
      containerPadding: "1rem",
    },
    animations: {
      transition: "none",
      hover: "none",
    },
  },
};
