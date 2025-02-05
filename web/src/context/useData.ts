// web/src/context/useData.ts
import { useContext } from "react";
import { DataContext } from "./DataContext"; // Adjust the import path as necessary

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
