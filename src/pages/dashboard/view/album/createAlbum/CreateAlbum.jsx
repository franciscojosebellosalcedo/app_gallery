import React, { useState } from "react";
import { createAlbumRequest } from "../../../../../api/apiAlbum";
import { useContexAlbums } from "../../../../../contexts/AlbumContextProvider";
import { useContextAlert } from "../../../../../contexts/AlertContextProvider";
import { useContextAuth } from "../../../../../contexts/AuthContextProvider";
import "./CreateAlbum.css";

const CreateAlbum = () => {
  const { getAccessToken, getIdUser } = useContextAuth();
  const { albums, setAlbums } = useContexAlbums();
  const { alert, setAlert, delayCloseAlert, closeAlertBeforeLongTime } =
    useContextAlert();
  const { views, setViews } = useContexAlbums();
  const [newAlbum, setNewAlbum] = useState({
    id_user: getIdUser(),
    name: "",
    description: "",
  });

  const handlerInputAlbum = (e) => {
    setNewAlbum({
      ...newAlbum,
      [e.target.name]: e.target.value,
    });
  };

  const createAlbum = async (e) => {
    e.preventDefault();
    const accessToken = getAccessToken();
    if (newAlbum.name === "" || newAlbum.description === "") {
      setAlert({ ...alert, type: "error", message: "Complete el formulario" });
      delayCloseAlert();
      closeAlertBeforeLongTime();
    } else {
      const responseCreateAlbum = await createAlbumRequest(
        newAlbum,
        accessToken
      );
      if (responseCreateAlbum.response === false) {
        setAlert({
          ...alert,
          type: "error",
          message: responseCreateAlbum.message,
        });
        closeAlertBeforeLongTime();
      } else {
        setAlert({
          ...alert,
          type: "done",
          message: responseCreateAlbum.message,
        });
        setNewAlbum({
          id_user: getIdUser(),
          name: "",
          description: "",
        });
        setAlbums([...albums, responseCreateAlbum.data]);
        closeAlertBeforeLongTime();
      }
      delayCloseAlert();
    }
  };

  return (
    <div className="create__register create__album">
      <figure className="figure__icon__back container__icon">
        <i
          class="uil uil-arrow-left icon__view icon__back"
          onClick={() =>
            setViews({
              ...views,
              listAlbum: true,
              createAlbum: false,
            })
          }
        ></i>
      </figure>
      <form className="form__album">
        <h2 className="title title__new__album">Nuevo álbum</h2>
        <input
          onInput={(e) => handlerInputAlbum(e)}
          className="input__register input__create__album"
          name="name"
          type="text"
          value={newAlbum.name}
          placeholder="Nombre del álbum"
        />
        <input
          onInput={(e) => handlerInputAlbum(e)}
          className="input__register input__create__album"
          name="description"
          type="text"
          value={newAlbum.description}
          placeholder="Descripción del álbum"
        />
        <div className="conatiner__buttons__edit__album">
          <button
            className="btn__create__album__register"
            onClick={(e) => createAlbum(e)}
          >
            Crear
          </button>
          <button
            className="button__cancel__select btn__option__select "
            onClick={() =>
              setViews({
                ...views,
                listAlbum: true,
                createAlbum:false
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

export default CreateAlbum;
