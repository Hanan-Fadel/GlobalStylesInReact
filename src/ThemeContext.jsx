import React, { createContext, useState } from "react";

export const ThemeContext = createContext(); // Export ThemeContext
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [themeStyles] = useState({
    dark: { primaryColor: "#e0e0e0" }, // Adjust as needed
    light: { primaryColor: "#333" }, // Adjust as needed
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
