import { createContext, useState, useEffect, useContext } from "react";
import useScrollSpy from "./useScrollSpy";

interface ScrollSpyContextType {
  activeSection: string | undefined;
}

const ScrollSpyContext = createContext<ScrollSpyContextType>({
  activeSection: undefined,
});

interface Props {
  children: React.ReactNode;
}

export const useScrollSpyContext = () => {
  const context = useContext(ScrollSpyContext);
  if (context === undefined) {
    throw new Error(
      "useScrollSpyContext must be used within a ScrollSpyProvider"
    );
  }
  return context;
};

export const ScrollSpyProvider = ({ children }: Props) => {
  const [activeSection, setActiveSection] = useState<string | undefined>(
    undefined
  );
  const scrollSpy = useScrollSpy([
    "home-section",
    "about-section",
    "resume-section",
    "services-section",
    "projects-section",
    "contact-section",
  ]);

  useEffect(() => {
    setActiveSection(scrollSpy);
  }, [scrollSpy]);

  return (
    <ScrollSpyContext.Provider value={{ activeSection }}>
      {children}
    </ScrollSpyContext.Provider>
  );
};
