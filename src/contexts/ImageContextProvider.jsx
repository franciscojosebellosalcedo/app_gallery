import React, { useContext, createContext, useState } from "react";

export const ContextImagens = createContext();
const ImageContextProvider = ({ children }) => {
  const [imagens, setImagens] = useState([]);
  return (
    <>
    <p>ombee</p>
      <ContextImagens.Provider value={{ imagens, setImagens }}>
        {children}
      </ContextImagens.Provider>
    </>
  );
};

export const useContexImagens=()=>useContext(ContextImagens);

export default ImageContextProvider;
