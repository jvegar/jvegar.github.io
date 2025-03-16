import { createContext, useContext } from 'react';

const ScrollSpyContext = createContext({
  activeSection: 'home-section',
  registerSection: () => {},
  unregisterSection: () => {},
});

export const useScrollSpyContext = () => useContext(ScrollSpyContext);
