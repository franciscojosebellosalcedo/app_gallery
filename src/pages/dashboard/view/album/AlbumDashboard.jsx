import React, { useState } from "react";
import "./AlbumDashboard.css";
import ListAlbums from "./listAlbum/ListAlbums";
import CreateAlbum from "./createAlbum/CreateAlbum.jsx";
import EditAlbum from "./editAlbum/EditAlbum";
import DeleteAlbum from "./deleteAlbum/DeleteAlbum";
import { useContexAlbums } from "../../../../contexts/AlbumContextProvider";

const AlbumDashboard = () => {
  const [views, setViews] = useState({
    createAlbum: false,
    editAlbum: false,
    deleteAlbum: false,
    listAlbum: true,
  });
  const { albums,isOpenSelectAlbums, setIsOpenSelectAlbums,isSelectedAllAlbums, setIsSelectedAllAlbums,closeAllOptions } = useContexAlbums();

  const selectAllAlbums=()=>{
    setIsSelectedAllAlbums(true);
  }

  const enableSelectAlbum=()=>{
    setIsOpenSelectAlbums(true);
    closeAllOptions();
  }
  const disableSelectAlbum=()=>{
    setIsOpenSelectAlbums(false);
  }

  return (
    <div className="container__dashboard album">
      <h2 className="album__title">Álbum</h2>

      {views.createAlbum === false ? (
        <>
          <div className="container__buttons__albums">
            {isOpenSelectAlbums===false? <button
              className="btn__create__album"
              onClick={() =>
                setViews({
                  ...views,
                  createAlbum: true,
                  editAlbum: false,
                  deleteAlbum: false,
                  listAlbum: false,
                })
              }
            >
              Crear álbum
            </button>:""}
            { albums.length>0 ?
              <div className="conatiner__options__select">
              {isOpenSelectAlbums === true ? (
                <button onClick={()=>selectAllAlbums()} className="button__select__albums__all btn__option__select">
                  Sel. Todo
                </button>
              ) : (
                ""
              )}

              {isOpenSelectAlbums === true ? (
                <button onClick={()=>disableSelectAlbum()} className="button__cancel__select btn__option__select">
                Cancelar
              </button>
              ) : (
                <button onClick={()=>enableSelectAlbum()} className="button__select__albums btn__option__select">
                  Seleccionar
                </button>
                
              )}
            </div>
            :""
            }
          </div>
        </>
      ) : (
        ""
      )}
      {views.listAlbum === true ? (
        <ListAlbums />
      ) : views.createAlbum === true ? (
        <CreateAlbum views={views} setViews={setViews} />
      ) : views.editAlbum === true ? (
        <EditAlbum views={views} setViews={setViews} />
      ) : views.deleteAlbum === true ? (
        <DeleteAlbum views={views} setViews={setViews} />
      ) : (
        ""
      )}
    </div>
  );
};

export default AlbumDashboard;
