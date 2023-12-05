import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorData, setColorData] = useState({
    base: "blue",
    vector: { r: 0.0, g: 0.0, b: 1.0 },
  });
  return (
    <ThemeContext.Provider value={{ colorData, setColorData }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a dataprovider");
  }
  return context;
};
