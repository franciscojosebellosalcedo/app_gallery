import React, { useContext, createContext, useState } from "react";

export const ContextImagens = createContext();

export const useContexImagens=()=>useContext(ContextImagens);

export default ImageContextProvider;
