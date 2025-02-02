"use client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./Header.module.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </header>
  );
}
