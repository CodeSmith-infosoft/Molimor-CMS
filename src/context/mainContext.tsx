import { MainContextType, MainProviderProps } from "@/types/contextTypes";
import { createContext, useState } from "react";

export const MainContext = createContext<MainContextType | null>(null);

export const MainProvider = ({ children }: MainProviderProps) => {
  const [categoryChange, setCategoryChange] = useState(true);

  return (
    <MainContext.Provider value={{ categoryChange, setCategoryChange }}>
      {children}
    </MainContext.Provider>
  );
};
