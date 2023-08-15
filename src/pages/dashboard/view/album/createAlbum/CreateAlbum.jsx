import React from "react";
import "./CreateAlbum.css";

const CreateAlbum = () => {
  return (
    <div className="create__register create__album">
      <figure className="figure__icon__back container__icon">
        <i class="uil uil-arrow-left icon__view icon__back"></i>
      </figure>
      <form className="form__album">
        <h2 className="title title__new__album">Nuevo álbum</h2>
        <input
          className="input__register input__create__album"
          name="nameAlbum"
          type="text"
          placeholder="Nombre del álbum"
        />
        <input
          className="input__register input__create__album"
          name="descriptionAlbum"
          type="text"
          placeholder="Descripción del álbum"
        />
        <button className="btn__create__album__register">Crear</button>
      </form>
    </div>
  );
};

export default CreateAlbum;
