import React, { createContext, useContext, useState } from "react";

export const ContextAlbum = createContext();

const AlbumContextProvider = ({ children }) => {
  const [albums, setAlbums] = useState([
    // { id: 0, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 1, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 2, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 3, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 4, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 5, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 6, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 7, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 8, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 9, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 10, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 11, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 12, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 13, name: "hola", description: "hola", date: "1:1:1" },
    // { id: 14, name: "hola", description: "hola", date: "1:1:1" },
  ]);
  return (
    <>
      <ContextAlbum.Provider value={{ albums, setAlbums }}>
        {children}
      </ContextAlbum.Provider>
    </>
  );
};
export const useContexAlbums=()=>useContext(ContextAlbum);

export default AlbumContextProvider;
