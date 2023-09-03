import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { getAllAlbumByIdUserRequest } from "../api/api";
import { useContextAuth } from "./AuthContextProvider";

export const ContextAlbum = createContext();

const AlbumContextProvider = ({ children }) => {
  const { getAccessToken, getIdUser } = useContextAuth();
  const [albums, setAlbums] = useState([]);
  const [isOpenSelectAlbums, setIsOpenSelectAlbums] = useState(false);
  const [isSelectedAllAlbums, setIsSelectedAllAlbums] = useState(false);
  const [listOptions, setListOptions] = useState([]);

  const closeAllOptions = () => {
    const list = listOptions;
    for (let i = 0; i < list.length; i++) {
      const option = list[i];
      option.isOpen = false;
    }
    setListOptions([...list]);
  };

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

  useEffect(() => {
    const getAllAlbumByIdUser = async () => {
      const responseGetAllAlbumByIdUser = await getAllAlbumByIdUserRequest(
        getIdUser(),
        getAccessToken()
      );
      if (responseGetAllAlbumByIdUser.response === false) {
        setAlbums([]);
      } else {
        setAlbums([...responseGetAllAlbumByIdUser.data]);
      }
    };
    getAllAlbumByIdUser();
  }, []);
  return (
    <>
      <ContextAlbum.Provider
        value={{
          albums,
          setAlbums,
          isOpenSelectAlbums,
          setIsOpenSelectAlbums,
          isSelectedAllAlbums,
          setIsSelectedAllAlbums,
          listOptions,
          setListOptions,
          closeAllOptions,
          handlOptionAlbum
        }}
      >
        {children}
      </ContextAlbum.Provider>
    </>
  );
};
export const useContexAlbums = () => useContext(ContextAlbum);

export default AlbumContextProvider;
