import React from "react";
import "./alert.css";
import { useContextAlert } from "../contexts/AlertContextProvider";

const Alert = () => {
  const {isOpen,alert,setIsOpen} = useContextAlert();

  return isOpen === true ? (
    <div className="alert__app" style={{left:"20px"}}>
        <p style={{color:alert.type === "error" ? "red" :"black"}} className="alert__paragraph">{alert.message}</p>
        <i class="uil uil-times icon__view icon__alert" onClick={()=>setIsOpen(!isOpen)}  ></i>
    </div>
  ) : (
    ""
  );
};

export default Alert;
