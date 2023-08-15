import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import { useContextAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import Loader from "../../loader/Loader";

const Home = () => {
  const [isLoader, setIsLoader] = useState(true);
  const valuesContextAuth = useContextAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (valuesContextAuth.isAuthenticated === true) {
      navigate("/dashboard");
      setIsLoader(false);
    }else{
      setIsLoader(false);
    }
  });

  return (
    <div className="home section__home">
      {isLoader === true ? (
        <Loader/>
      ) : (
        <>
          <Nav />
          <div className="home__content">
            <div className="container__left">
              <h1 className="home__title">ALMACENA TUS MEJORES IMAGENES EN</h1>
              <h1 className="home__title strong__title">APP GALLERY</h1>
              <p className="home__description">
                App Gallery, aplicación en la cual podrás administrar todas la
                imagenes que tu desees almacenar, creación de album,
                configuración de tu cuenta y muchas funcionalidades más que te
                van a encantar.
              </p>
            </div>
            <img
              draggable={false}
              className="container__right"
              src={require("../../assets/imgs/img-home-2.png")}
              alt="image"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
