import React from "react";
import "./alert.css";
import { useContextAlert } from "../contexts/AlertContextProvider";

const Alert = () => {
  const valuesContextAlert = useContextAlert();
  return valuesContextAlert.isOpen === true ? (
    <div className="alert__app ">
        {valuesContextAlert.alert.message}
        <i class="uil uil-times icon__view icon__alert"></i>
    </div>
  ) : (
    ""
  );
};

export default Alert;
