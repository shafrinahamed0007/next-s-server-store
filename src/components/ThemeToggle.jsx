"use client";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle {theme === "dark" ? "Ligth" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
