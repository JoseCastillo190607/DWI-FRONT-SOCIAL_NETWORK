import React, { createContext, useState } from "react";

const initialuserdata = {
  userdata: {},
};

export const GlobalContext = createContext(initialuserdata);

export const GlobalProvider = ({ children }) => {
  const [userdata, setUserData] = useState({});

  const handleUser = (item) => {
    setUserData(item);
  };

  return (
    <GlobalContext.Provider value={{ userdata, handleUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
