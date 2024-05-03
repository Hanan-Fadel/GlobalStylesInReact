import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./globalStyles.css";

function App() {
  // Access theme context
  const { theme, toggleTheme, themeStyles } = useContext(ThemeContext);

  // Determine theme class and heading style based on current theme
  const themeClass = theme === "dark" ? "darkTheme" : "lightTheme";
  const h1Style = { color: themeStyles[theme].primaryColor };

  return (
    <div className={themeClass}>
      {/* Use inline styles to dynamically set primary color */}
      <style>{`
        .darkTheme h1 { color: ${themeStyles.dark.primaryColor}; }
        .lightTheme h1 { color: ${themeStyles.light.primaryColor}; }
      `}</style>
      {/* Button to toggle theme */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Heading with dynamically set primary color */}
      <h1 style={h1Style}>Dynamic Global Styles</h1>
    </div>
  );
}

export default App;
