import { Theme } from "./ThemeTypes";

export const newspaperTheme: Theme = {
  name: "newspaper",
  styles: {
    typography: {
      headings: {
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.75rem",
      },
      body: "1rem",
      accent: "#007bff",
    },
    colors: {
      primary: "#007bff",
      secondary: "#6c757d",
      background: "#f8f9fa",
      text: "#343a40",
      accent: "#007bff",
    },
    spacing: {
      small: "0.5rem",
      medium: "1rem",
      large: "2rem",
    },
    layout: {
      maxWidth: "1200px",
      borderRadius: "0.5rem",
      containerPadding: "1.5rem",
    },
    animations: {
      transition: "all 0.3s ease",
      hover: "transform 0.3s ease",
    },
  },
};
