import React, { useEffect, useState } from "react";
import { useContextAuth } from "../../../contexts/AuthContextProvider";
import { NavLink } from "react-router-dom";
import "./dashboard.css";
import HomeDashboard from "./home/HomeDashboard";
import AlbumDashboard from "./album/AlbumDashboard";
import ImageDashboard from "./imagen/ImageDashboard";
import FavoriteDashboard from "./favorite/FavoriteDashboard";
import RecicleDashboard from "./recicle/RecicleDashboard";
import Alert from "../../../alert/Alert";

const Dashboard = () => {
  const [views, setWiews] = useState({
    home: true,
    album: false,
    imagen: false,
    favorites: false,
    recicle: false,
  });
  const [isOpenMenuUser,setIsOpenMenuUser]=useState(false);
  const [time, setTime] = useState({
    days: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "viernes",
      "Sabado",
    ],
    months: [
      "Enero",
      "Ferbrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    indexDay: null,
    indexMonth:null,
    numberDay:null,
    year: "",
    hour: "",
    minutes: "",
    seconds: "",
    format: "",
  });
  const valuesContextAuth = useContextAuth();

  const getCurrentTime = () => {
    const date = new Date();
    let hourTime = date.getHours();
    let minutesTime = date.getMinutes();
    let secondsTime = date.getSeconds();
    let day = date.getDay() ;
    let yearTime=date.getFullYear();
    let numberDayTime = date.getDate();
    let monthYear=date.getMonth();
    if (hourTime < 10) {
      hourTime = `0${hourTime}`;
    } 
    if (minutesTime < 10) {
      minutesTime = `0${minutesTime}`;
    } 
    if (numberDayTime < 10) {
      numberDayTime = `0${numberDayTime}`;
    } 
    setTime({
      ...time,
      hour: hourTime,
      minutes: minutesTime,
      seconds: secondsTime,
      format: hourTime < 12 || hourTime === 24 ? "am" : "pm",
      indexDay:day,
      year:yearTime,
      numberDay:numberDayTime,
      indexMonth:monthYear
    });
  };

  useEffect(() => {
    getCurrentTime();

    setInterval(() => {
      getCurrentTime();
    }, 1000);

  });


  return (
    <div className="dashboard">
      <aside className="aside">
        <div className="logo">
          <i class="uil uil-images icon__app__dashboard icon"></i>
          <h1>
            App <span className="strong__text">Gallery</span>
          </h1>
        </div>
        <nav className="nav">
          <div className="nav__item">
            <div
              style={{
                color: views.home === true ? "blue" : "",
                transform: views.home === true ? "translateX(5px)" : "",
              }}
              className="item"
              onClick={() =>{
                setWiews({...views,home: true,album: false,imagen: false,recicle: false,favorites: false})
              }}
            >
              <i class="uil uil-estate nav__icon"></i>
              Inicio
            </div>
          </div>
          <div className="nav__item">
            <div
              style={{
                color: views.album === true ? "blue" : "",
                transform: views.album === true ? "translateX(5px)" : "",
              }}
              className="item"
              onClick={() =>{
                setWiews({...views,home: false,album: true,imagen: false,recicle: false,favorites: false})
              }
              }
            >
              <i class="uil uil-document-layout-right nav__icon"></i>
              Álbum
            </div>
          </div>
          <div className="nav__item">
            <div
              style={{
                color: views.imagen === true ? "blue" : "",
                transform: views.imagen === true ? "translateX(5px)" : "",
              }}
              className="item"
              onClick={() =>{
                setWiews({...views,home: false,album: false,imagen: true,recicle: false,favorites: false})
              }
              }
            >
              <i class="uil uil-image nav__icon"></i>
              Imagenes
            </div>
          </div>
          <div className="nav__item">
            <div
              className="item"
              style={{
                color: views.favorites === true ? "blue" : "",
                transform: views.favorites === true ? "translateX(5px)" : "",
              }}
              onClick={() =>{
                setWiews({...views,home: false,album: false,imagen: false,recicle: false,favorites: true})
              }
              }
            >
              <i class="uil uil-favorite nav__icon"></i>
              Favorito
            </div>
          </div>
          <div className="nav__item">
            <div
              className="item"
              style={{
                color: views.recicle === true ? "blue" : "",
                transform: views.recicle === true ? "translateX(5px)" : "",
              }}
              onClick={() =>{
                setWiews({...views,home: false,album: false,imagen: false,recicle: true,favorites: false})
              }
              }
            >
              <i class="uil uil-trash nav__icon"></i>
              Reciclaje
            </div>
          </div>
        </nav>
      </aside>

      <div className="user">
        <div className="date">
          <p>{time.days[time.indexDay]} {time.numberDay} de</p>
          <p>{time.months[time.indexMonth]} de {time.year}</p>
        </div>
        <div className="time">
          <p>
            {time.hour}:{time.minutes}:{time.seconds} {time.format}
          </p>
        </div>
        <div className="greeting">
          <p>Hola {valuesContextAuth.user?.name}</p>
        </div>
        <div className="photo">
          <img onClick={()=>setIsOpenMenuUser(!isOpenMenuUser)}
            className="user__photo"
            draggable={false}
            src={valuesContextAuth.user.imageBase64}
            alt="foto"
          />
          {isOpenMenuUser===false?"":
          <nav className="user__nav">
            <div className="nav__item__user">
              <NavLink className="item__user">
                <i class="uil uil-user icon__menu__user"></i>
                Cuenta
              </NavLink>
            </div>
            <div className="nav__item__user">
              <NavLink className="item__user">
                <i class="uil uil-setting icon__menu__user"></i>
                Ajuste
              </NavLink>
            </div>
            <div className="nav__item__user">
              <NavLink className="item__user">
                <i class="uil uil-signout icon__menu__user"></i>
                Salir
              </NavLink>
            </div>
          </nav>}

        </div>
      </div>
      {views.home === true ? (
        <HomeDashboard  views={views} setViews={setWiews} />
      ) : views.album === true ? (
        <AlbumDashboard />
      ) : views.imagen === true ? (
        <ImageDashboard />
      ) : views.favorites === true ? (
        <FavoriteDashboard />
      ) : views.recicle === true ? (
        <RecicleDashboard />
      ) : (
        ""
      )}
    <Alert/>
    </div>
  );
};

export default Dashboard;
