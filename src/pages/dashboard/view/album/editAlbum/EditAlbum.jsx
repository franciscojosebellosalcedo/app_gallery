import React from "react";
import { useContexAlbums } from "../../../../../contexts/AlbumContextProvider";
import "./EditAlbum.css";

const EditAlbum = () => {
  const { views, setViews } = useContexAlbums();
  return (
    <div className="create__register create__album">
      <figure className="figure__icon__back container__icon">
        <i
          class="uil uil-arrow-left icon__view icon__back"
          onClick={() =>
            setViews({
              ...views,
              listAlbum: true,
              editAlbum: false,
            })
          }
        ></i>
      </figure>
      <form className="form__album">
        <h2 className="title title__new__album">Editar álbum</h2>
        <input
          className="input__register input__create__album"
          name="name"
          type="text"
          placeholder="Nombre del álbum"
        />
        <input
          className="input__register input__create__album"
          name="description"
          type="text"
          placeholder="Descripción del álbum"
        />
        <div className="conatiner__buttons__edit__album">
          <button className="btn__create__album__register">Actualizar</button>
          <button
            className="button__cancel__select btn__option__select "
            onClick={() =>
              setViews({
                ...views,
                listAlbum: true,
                editAlbum: false,
              })
            }
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAlbum;
