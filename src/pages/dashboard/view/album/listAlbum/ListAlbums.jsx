import React, { useEffect, useState } from "react";
import "./listAlbum.css";
import { useContexAlbums } from "../../../../../contexts/AlbumContextProvider";

const ListAlbums = () => {
  const [listAlbums, setListAlbums] = useState([]);
  const {
    albums,
    isOpenSelectAlbums,
    listOptions,
    setListOptions,
    handlOptionAlbum,
    handlerSelectAlbum
  } = useContexAlbums();



  useEffect(() => {
    setListAlbums([...albums]);
  }, [albums]);

  useEffect(() => {
    const arrayOption = [];
    albums.map((album, i) => {
      return arrayOption.push({
        id: album.id,
        isOpen: false,
        index: i,
      });
    });
    setListOptions([...arrayOption]);
  }, [albums,setListOptions]);

  return (
    <div className="conatiner__albums">
      {listAlbums.length > 0 ? (
        listAlbums.map((album, i) => {
          return (
            <div
              key={i}
              className="album__item"
              style={{
                backgroundColor:
                  listOptions[i]?.isOpen === true ? "#7148fc" : "",
                color: listOptions[i]?.isOpen === true ? "white" : "",
              }}
            >
              <label
                className="label__container"
                htmlFor={`input${i}__checkbox`}
                style={{
                  pointerEvents: isOpenSelectAlbums === true ? "unset" : "",
                  cursor: isOpenSelectAlbums === true ? "pointer" : "",
                }}
              >
                <h3
                  className="album__name"
                  style={{
                    color: listOptions[i]?.isOpen === true ? "white" : "",
                  }}
                >
                  {album.name}
                </h3>
                <p className="album__description">{album.description}</p>
                <span className="album__date">{"aqui fecha"}</span>
                {isOpenSelectAlbums === true ? (
                  <input
                    className="input__checkbox"
                    value={album.id}
                    onChange={(e) => handlerSelectAlbum(e.target.value)}
                    type="checkbox"
                    name="select__album"
                    id={`input${i}__checkbox`}
                  />
                ) : (
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
                          display:
                            listOptions[i]?.isOpen === true ? "block" : "none",
                        }}
                      >
                        <div className="option__album">
                          <i class="uil uil-trash icon__option__album"></i>
                          Reciclar
                        </div>
                        <div className="option__album">
                          <i class="uil uil-edit icon__option__album"></i>Editar
                        </div>
                      </div>
                    )}
                  </figure>
                )}
              </label>
            </div>
          );
        })
      ) : (
        <p style={{ gridColumn: "1/4" }}>No tienes álbum creados</p>
      )}
    </div>
  );
};

export default ListAlbums;
