import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5 text-foreground" />
      ) : (
        <FiSun className="w-5 h-5 text-foreground" />
      )}
    </button>
  );
};