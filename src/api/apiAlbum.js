const urlbase=process.env.REACT_APP_URL_BASE_APIS;

export const getAllAlbumByIdUserRequest = async (idUser,token) => {
    const response=await fetch(urlbase+"get-all-album/"+idUser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization":`bearer ${token}`
      },
    });
    return await response.json();
  };

  export const createAlbumRequest = async (body,token) => {
    const response=await fetch(urlbase+"create-album", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization":`bearer ${token}`
      },
      body:JSON.stringify({...body})
    });
    return await response.json();
  };