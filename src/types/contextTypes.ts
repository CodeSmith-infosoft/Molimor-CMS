import { ReactNode } from "react";

export type MainContextType = {
  categoryChange: boolean;
  setCategoryChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MainProviderProps = {
  children: ReactNode;
};