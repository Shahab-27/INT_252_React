import React, { useState, createContext, useContext } from "react";

// Create the Theme context
const ThemeContext = createContext();

// Provider that wraps the app (or part of it) and provides theme state
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// A simple component that consumes the theme context
export const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLight = theme === "light";

  // Tailwind utility classes used for styling. If you don't have Tailwind,
  // fallback inline styles are provided below inside the style prop.
  const containerClass = isLight
    ? "min-h-screen flex items-center justify-center bg-white text-gray-900 transition-colors duration-300"
    : "min-h-screen flex items-center justify-center bg-gray-900 text-white transition-colors duration-300";

  const cardClass = isLight
    ? "p-8 rounded-2xl shadow-lg bg-white/90 backdrop-blur"
    : "p-8 rounded-2xl shadow-lg bg-gray-800/90 backdrop-blur";

  return (
    <div className={containerClass} style={{ padding: 20 }}>
      <div className={cardClass} style={{ maxWidth: 520, textAlign: "center" }}>
        <h1 className="text-2xl font-semibold mb-4">{isLight ? "Light Theme" : "Dark Theme"}</h1>
        <p className="mb-6">This component uses React Context to toggle theme across the app.</p>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: isLight ? undefined : undefined,
          }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

// Default app: provider + consumer
export default function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}
