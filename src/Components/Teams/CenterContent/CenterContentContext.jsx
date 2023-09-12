import React, { createContext, useContext, useState } from 'react';

const CenterContentContext = createContext();

export function CenterContentProvider({ children }) {
  // State for the center content
  const [centerContent, setCenterContent] = useState(null);

  // Wrap the children with the context provider
  return (
    <CenterContentContext.Provider value={{ centerContent, setCenterContent }}>
      {children}
    </CenterContentContext.Provider>
  );
}

export function useCenterContent() {
  const context = useContext(CenterContentContext);

  return context;
}
