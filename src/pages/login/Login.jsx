import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import { loginRequest } from "../../api/api";
import { useContextAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [alert, setAlert] = useState(null);
  const [credencials, setCredencials] = useState({
    email: "",
    password: "",
  });

  const valuesContextAuth=useContextAuth();
  const navigate=useNavigate();

  const handlerInputsLogin = (e) => {
    setCredencials({ ...credencials, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      if (credencials.email === "" || credencials.password === "") {
        setAlert({ type: 0, message: "Debes completar el formulario." });
      } else {
        const responseRequest = await loginRequest(credencials);
        console.log(responseRequest);
        if (responseRequest.response === false) {
          setAlert({ type: 0, message: responseRequest.message });
        } else {
          const {data}=responseRequest;
          console.log(data);
          if(!data.accessToken || !data.refressToken || !data.user){
            setAlert({type:0,message:"Se produjo un error al iniciar sesión."});
          }else{
            valuesContextAuth.saveUser(data);
            navigate("/dashboard");
          }
          setAlert(null);
        }
      }
    } catch (error) {
      console.log(error);
      setAlert({ type: 0, message: "Ocurrió un error." });
    }
  };
  
  useEffect(()=>{
    if(valuesContextAuth.isAuthenticated===true){
      navigate("/dashboard");
    }
  })

  return (
    <div className="section__login">
      <Nav />
      <div className="login">
        <form className="login__form">
          <h2 className="login__title">Inicia sesión</h2>
          <p className="login__text__alt">
            Ingrese las credenciales correctas para acceder
          </p>
          {alert === null ? (
            ""
          ) : (
            <p
              style={{ color: alert.type === 1 ? "green" : "red" }}
              className="auth__alert"
            >
              {alert.message}
            </p>
          )}
          <div className="login__content__form">
            <div className="login__input__email box__form">
              <label className="login__label" htmlFor="email">
                Correo
              </label>
              <input
                type="email"
                onInput={(e) => handlerInputsLogin(e)}
                id="email"
                name="email"
                className="login__input"
                placeholder="Ingrese su correo"
              />
            </div>
            <div className="login__input__password box__form">
              <label className="login__label" htmlFor="password">
                Contraseña
              </label>
              <input
                onInput={(e) => handlerInputsLogin(e)}
                type="password"
                name="password"
                id="password"
                className="login__input"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <a className="login__forgot__password" href="#">
              ¿Olvidaste tu contraseña?
            </a>
            <a className="login__forgot__password" href="#">
              ¿Confirmaste tu cuenta?
            </a>
            <button onClick={(e) => login(e)} className="login__btn__init">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
