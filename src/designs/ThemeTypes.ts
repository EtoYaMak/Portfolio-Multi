export interface Theme {
  name: string;
  styles?: {
    typography: {
      headings: {
        h1: string;
        h2: string;
        h3: string;
      };
      body: string;
      accent: string;
      fontFamily: string;
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      accent: string;
      highlight: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    layout: {
      maxWidth: string;
      borderRadius: string;
      containerPadding: string;
    };
    animations: {
      transition: string;
      hover: string;
    };
  };
}

