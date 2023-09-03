import React, { useContext, createContext, useState } from "react";

export const ContextAlert = createContext();
const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [isOpen, setIsOpen] = useState(false);

  const delayCloseAlert=()=>{
    if(isOpen===true){
      setIsOpen(false)
      setTimeout(()=>{
        setIsOpen(true)
      },300)
    }else{
      setIsOpen(true);
    }
  }
  const closeAlertBeforeLongTime=()=>{
    setTimeout(()=>{
      setIsOpen(false);
    },5000);
  }
  return (
    <>
      <ContextAlert.Provider value={{ alert, setAlert, isOpen, setIsOpen, delayCloseAlert ,closeAlertBeforeLongTime}}>
        {children}
      </ContextAlert.Provider>
    </>
  );
};

export const useContextAlert = () => useContext(ContextAlert);

export default AlertContextProvider;
