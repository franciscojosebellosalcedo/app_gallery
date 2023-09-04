import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import { createUserRequest } from "../../api/apiAuth";
const imageDefault = require("../../assets/imgs/img-default-user.png");

const Register = () => {
  const [alert, setAlert] = useState(null);
  const [file, setFile] = useState(null);
  const [userNew, setUseNew] = useState({
    name: "",
    email: "",
  });
  const [credencials, setCredencials] = useState({
    password: "",
    confirm_password: "",
  });

  const getStringBase64File = (e) => {
    const reader = new FileReader();
    reader.onload = function () {
      const stringBase64 = reader.result;
      setFile(stringBase64);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const validationData = () => {
    if (
      userNew.name === "" ||
      userNew.email === "" ||
      credencials.password === "" ||
      credencials.confirm_password === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handlerInputsUser = (e) => {
    setUseNew({ ...userNew, [e.target.name]: e.target.value });
  };

  const handlerInputsCredencials = (e) => {
    setCredencials({ ...credencials, [e.target.name]: e.target.value });
  };

  const saveNewUser = async (e) => {
    try {
      e.preventDefault();
      const responseValidation = validationData();
      const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
      const regexEmail =
        /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
      if (responseValidation) {
        setAlert({ type: 0, message: "Debes completar el formulario." });
      } else if (regexEmail.test(userNew.email) === false) {
        setAlert({ type: 0, message: "Correo electronico no valido." });
      } else if (regexPassword.test(credencials.password) === false) {
        setAlert({
          type: 0,
          message:
            "La contraseña debe de tener:\n-Mayusculas\n-Números\n-Min 8 caracteres\n-Max 16 caracteres.",
        });
      } else if (credencials.password !== credencials.confirm_password) {
        setAlert({ type: 0, message: "Las contraseñas no coinciden." });
      } else {
        const dataUser = {
          ...userNew,
          password: credencials.password,
          confirm_password: credencials.confirm_password,
          string_base: file,
        };
        const data = await createUserRequest(dataUser);
        if (data.response === true) {
          setAlert({ type: 1, message: data.message+"\nHemos enviado un mensaje a tu correo." });
          const listInputs=[...document.querySelectorAll(".login__input")];
          for (let i = 0; i < listInputs.length; i++) {
            const input = listInputs[i];
            input.value="";
          }
          setFile(imageDefault);
        } else {
          setAlert({ type: 0, message: data.message });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFile(imageDefault);
  }, []);

  return (
    <div className="section__register">
      <Nav />
      <div className="login">
        <form className="login__form">
          <h2 className="login__title">Registrate</h2>
          <p className="login__text__alt">
            Ingrese sus datos para crear una cuenta
          </p>
          {alert && (
            <p
              style={{ color: alert.type === 1 ? "green" : "red" }}
              className="auth__alert"
            >
              {alert.message}
            </p>
          )}
          <div className="login__content__form">
            <div className="login__input__email box__form">
              <img
              alt="imagen"
                src={file}
                style={{ objectFit: "cover" }}
                className="image__previw"
              />
              <label className="login__label label__avatar" htmlFor="avatar">
                Seleccione avatar
                <input
                  onInput={(e) => getStringBase64File(e)}
                  type="file"
                  id="avatar"
                  className="login__input "
                  accept="image/jpeg, image/png"
                />
              </label>
            </div>
            <div className="login__input__email box__form">
              <label className="login__label" htmlFor="name">
                Nombre
              </label>
              <input
                onInput={(e) => handlerInputsUser(e)}
                type="text"
                id="name"
                name="name"
                className="login__input"
                placeholder="Ingrese su nombre"
              />
            </div>
            <div className="login__input__email box__form">
              <label className="login__label" htmlFor="email">
                Correo
              </label>
              <input
                onInput={(e) => handlerInputsUser(e)}
                type="email"
                id="email"
                name="email"
                className="login__input"
                placeholder="Ingrese su correo"
              />
            </div>
            <div className="login__input__email box__form">
              <label className="login__label" htmlFor="password">
                Contraseña
              </label>
              <input
                onInput={(e) => handlerInputsCredencials(e)}
                type="password"
                id="password"
                name="password"
                className="login__input"
                placeholder="Ingrese una contraseña"
              />
            </div>
            <div className="login__input__email box__form">
              <label className="login__label" htmlFor="password">
                Repetir contraseña
              </label>
              <input
                onInput={(e) => handlerInputsCredencials(e)}
                type="password"
                name="confirm_password"
                id="repeat_password"
                className="login__input"
                placeholder="Repetir contraseña"
              />
            </div>
            <button
              onClick={(e) => saveNewUser(e)}
              className="login__btn__init"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
