import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page__not__found">
      <div>
        <h1>404</h1>
        <p className="paragrph__page__not__found">Página no encontrada</p>
        <NavLink className="link__page__not__found" to="/dashboard">Aceptar</NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
