import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
