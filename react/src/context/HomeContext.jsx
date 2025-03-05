import React, { createContext, useState } from "react";

export const HomeContext = createContext();

import { properties } from "../data";

const HomeContextProvider = ({ children }) => {
  const [homes, setHomes] = useState(properties);

  return (
    <HomeContext.Provider value={{ homes }}>{children}</HomeContext.Provider>
  );
};

export default HomeContextProvider;
