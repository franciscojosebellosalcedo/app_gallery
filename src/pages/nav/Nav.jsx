import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="home__header">
    <nav className="home__nav">
      <NavLink to="/app_gallery" className="home__logo">
        <i class="uil uil-images icon"></i>App Gallery
      </NavLink>
      <ul className="home__nav__list">
        <li className="home__list__item">
          <NavLink className={({isActive})=>isActive===true?"a__active":"home__list__item__a" }  to="/iniciar-sesion">Iniciar</NavLink>
        </li>
        <li className="home__list__item">
          <NavLink className={({isActive})=>isActive===true?"a__active":"home__list__item__a" }  to="/registrate">Registrate</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Nav