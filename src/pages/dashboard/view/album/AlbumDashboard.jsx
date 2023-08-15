import React, { useState } from "react";
import "./AlbumDashboard.css";
import ListAlbums from "./listAlbum/ListAlbums";
import CreateAlbum from "./createAlbum/CreateAlbum.jsx";
import EditAlbum from "./editAlbum/EditAlbum";
import DeleteAlbum from "./deleteAlbum/DeleteAlbum";

const AlbumDashboard = () => {
  const [views, setViews] = useState({
    createAlbum: false,
    editAlbum: false,
    deleteAlbum: false,
    listAlbum: true,
  });

  return (
    <div className="container__dashboard album">
      <h2 className="album__title">Álbum</h2>

      {views.createAlbum === false ? (
        <button
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
        </button>
      ) : (
        ""
      )}

      {views.listAlbum === true ? (
        <ListAlbums />
      ) : views.createAlbum === true ? (
        <CreateAlbum view={views} setViews={setViews} />
      ) : views.editAlbum === true ? (
        <EditAlbum view={views} setViews={setViews} />
      ) : views.deleteAlbum === true ? (
        <DeleteAlbum view={views} setViews={setViews} />
      ) : (
        ""
      )}
    </div>
  );
};

export default AlbumDashboard;
