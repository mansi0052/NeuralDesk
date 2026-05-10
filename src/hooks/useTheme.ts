import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const themeToUse = stored || 'dark';
    setThemeState(themeToUse);
    document.documentElement.setAttribute('data-theme', themeToUse);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return [theme, setTheme];
}
