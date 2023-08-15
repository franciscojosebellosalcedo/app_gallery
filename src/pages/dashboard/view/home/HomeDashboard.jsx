import React from "react";
import "./homeDashboard.css";
import { useContextAuth } from "../../../../contexts/AuthContextProvider";

const HomeDashboard = (props) => {
  const valuesContextAuth = useContextAuth();
  return (
    <div className="container__dashboard  home">
      <h1 className="home__title">Bienvenido {valuesContextAuth.user?.name}</h1>
      <p className="home__paragraph">
        Ya puedes comenzar a subir imagenes pero antes deberas crear tu primer
        álbum.{" "}
      </p>
      <button
        className="btn__create__album"
        onClick={() =>
          props.setViews({
            ...props.views,
            home: false,
            album: true,
            imagen: false,
            recicle: false,
            favorites: false,
          })
        }
      >
        Empezar
      </button>
    </div>
  );
};

export default HomeDashboard;
