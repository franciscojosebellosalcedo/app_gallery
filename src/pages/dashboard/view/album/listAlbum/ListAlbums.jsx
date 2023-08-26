import React, { useEffect, useState } from "react";
import "./listAlbum.css";
import { useContexAlbums } from "../../../../../contexts/AlbumContextProvider";

const ListAlbums = () => {
  const [listOptions, setListOptions] = useState([]);
  const [viewButtonsOption, setViewButtonsOption] = useState(false);

  const {albums} = useContexAlbums();

  const handlOptionAlbum = (index) => {
    const list = listOptions;
    if (list[index].isOpen === true) {
      list[index].isOpen = false;
      setListOptions([...list]);
    } else {
      for (let i = 0; i < list.length; i++) {
        const option = list[i];
        option.isOpen = false;
      }
      if (list[index]) {
        list[index].isOpen = true;
      }
      setListOptions([...list]);
    }
  };

  const closeAllOptions = () => {
    const list = listOptions;
    for (let i = 0; i < list.length; i++) {
      const option = list[i];
      option.isOpen = false;
    }
    setListOptions([...list]);
  };

  useEffect(() => {
    const arrayOption = [];
    albums.map((album, i) => {
      arrayOption.push({
        id: album.id,
        isOpen: false,
        index: i,
      });
    });
    setListOptions([...arrayOption]);
  }, []);

  return (
    <div className="conatiner__albums">
      {albums.length>0?albums.map((album, i) => {
        return (
          <div
            className="album__item"
            style={{
              backgroundColor: listOptions[i]?.isOpen === true ? "#7148fc" : "",
              color: listOptions[i]?.isOpen === true ? "white" : "",
            }}
          >
            <h3 className="album__title">{album.name}</h3>
            <p className="album__description">{album.description}</p>
            <span className="album__date">{album.date}</span>
            <figure
              onClick={() => handlOptionAlbum(i)}
              class="uil uil-ellipsis-v icon__menu__album"
            >
              {listOptions[i]?.isOpen === false ? (
                ""
              ) : (
                <div
                  className="section__opcion__album__item"
                  style={{
                    display: listOptions[i]?.isOpen === true ? "block" : "none",
                  }}
                >
                  <div className="option__album">
                    <i class="uil uil-trash icon__option__album"></i>Reciclar
                  </div>
                  <div className="option__album">
                    <i class="uil uil-edit icon__option__album"></i>Editar
                  </div>
                  <div className="option__album">
                    <i class="uil uil-check icon__option__album"></i>Seleccionar
                  </div>
                  <div className="option__album">
                    <i class="uil uil-check icon__option__album"></i>Seleccionar
                    todo
                  </div>
                </div>
              )}
            </figure>
          </div>
        );
      }):<p style={{gridColumn:"1/4"}} >No tienes álbum creados</p>}
    </div>
  );
};

export default ListAlbums;
