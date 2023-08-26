import React, { useContext, createContext, useState } from "react";

export const ContextAlert = createContext();
const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ContextAlert.Provider value={{ alert, setAlert, isOpen, setIsOpen }}>
        {children}
      </ContextAlert.Provider>
    </>
  );
};

export const useContextAlert = () => useContext(ContextAlert);

export default AlertContextProvider;
