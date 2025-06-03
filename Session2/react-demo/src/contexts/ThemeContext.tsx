import { createContext, useState, type ReactNode } from "react";

// Định nghĩa props cho Provider (vẫn cần khi bạn muốn bọc Root app)
interface ThemeProviderProps {
  children: ReactNode;
}

// Kiểu dữ liệu mà Context sẽ cung cấp
export interface TypeThemeContext {
  // <-- Export interface này để HOC có thể dùng
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Tạo Context object
export const ThemeContext = createContext<TypeThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const contextValue: TypeThemeContext = {
    theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
