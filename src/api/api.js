const urlbase = "http://localhost:4000/api/";



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

export const refressTokenRequest = async (token) => {
  const response=await fetch(urlbase+"refress-token", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization":`bearer ${token}`
    },
  });
  return await response.json();
};

export const createUserRequest = async (data) => {
  const response=await fetch(urlbase+"create-user", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return await response.json();
};

export const loginRequest = async (data) => {
  const response=await fetch(urlbase+"login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return await response.json();
};


export const confirmAccotonUserRequest = async (token) => {
  const response=await fetch(urlbase+`confirm-accont-user/${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return await response.json();
};


