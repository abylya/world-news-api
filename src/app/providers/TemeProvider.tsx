import { ThemeContext } from "@/shared/lib/context";
import { useState, type ReactNode } from "react";

interface I_props {
  children: ReactNode;
}
export default function ThemeProvider({ children }: I_props) {
  const [isDark, setIsDark] = useState<boolean>(false);

  function setTheme() {
    setIsDark((prev) => !prev);
  }
  return (
    <ThemeContext.Provider value={{ isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
