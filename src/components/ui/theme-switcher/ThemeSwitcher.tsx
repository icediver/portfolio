"use client";
import { Theme } from "./theme.type";
import { useToggleTheme } from "./useToggleTheme";
import { FaMoon, FaSun } from "react-icons/fa";

interface IThemeSwitcher {
  theme: Theme;
}
export function ThemeSwitcher({ theme: currentTheme }: IThemeSwitcher) {
  const { theme, toogleTheme } = useToggleTheme(currentTheme);
  return (
    <button onClick={toogleTheme} className="text-xl">
      {theme === Theme.dark ? (
        <FaSun className="text-yellow-500 animate-opacity" />
      ) : (
        <FaMoon className="text-gray-400 animate-opacity" />
      )}
    </button>
  );
}
