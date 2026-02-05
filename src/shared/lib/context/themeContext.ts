import { createContext, useContext } from "react";

interface I_theme {
  isDark: boolean;
  setTheme: () => void;
}
export const ThemeContext = createContext<I_theme>({
  isDark: false,
  setTheme: () => {},
});

export const GetTheme = () => {
  const theme = useContext<I_theme>(ThemeContext);
  return theme;
};
