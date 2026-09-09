import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

/**
 * ThemeProvider
 * Applies data-theme="light" | "dark" directly to <html> so that
 * every page's CSS variables respond immediately.
 */
export function ThemeProvider({ children }) {
  // Persist preference in localStorage
  const [theme, setTheme] = useState(
    () => localStorage.getItem("nexus-theme") || "light"
  );

  // Apply to <html> whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("nexus-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const setLight = () => setTheme("light");
  const setDark  = () => setTheme("dark");

  return (
    <ThemeContext.Provider value={{ theme, toggle, setLight, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
