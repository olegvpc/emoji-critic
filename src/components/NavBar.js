// NavBar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
// import { withRouter } from 'react-router-dom'
import './NavBar.css';

function NavBar () {

  return (
    <nav className="menu">
      <NavLink exact to="/" activeClassName="menu__link_active" className="menu__link">Домой</NavLink>
      <NavLink to="/reviews" activeClassName="menu__link_active" className="menu__link">Обзоры эмодзи</NavLink>
      <NavLink to={`/about-me`} activeClassName="menu__link_active" className="menu__link">Тестирование записи и чтения cookie</NavLink>
      <NavLink to="/information-zone" activeClassName="menu__link_active" className="menu__link">Video YouTube</NavLink>
      <NavLink to="/interview" activeClassName="menu__link_active" className="menu__link">Interview</NavLink>
      <NavLink to="/interview-minin" activeClassName="menu__link_active" className="menu__link">Interview Минин Владлен</NavLink>
      <NavLink to="/capture" activeClassName="menu__link_active" className="menu__link">Capturing</NavLink>
      <NavLink to="/redis" activeClassName="menu__link_active" className="menu__link">Redis</NavLink>
      <NavLink to="/rtsp" activeClassName="menu__link_active" className="menu__link">RTSP-stream</NavLink>
      <NavLink to="/electron" activeClassName="menu__link_active" className="menu__link">Electron FrameWork</NavLink>
      <NavLink to="/laravel" activeClassName="menu__link_active" className="menu__link">Laravel</NavLink>
      <NavLink to="/about-us" activeClassName="menu__link_active" className="menu__link">О нас</NavLink>
      <NavLink to="/cards" activeClassName="menu__link_active" className="menu__link">Фотки</NavLink>
      <NavLink to="/upload" activeClassName="menu__link_active" className="menu__link">Загрузка файла</NavLink>
      <NavLink to="/users" activeClassName="menu__link_active" className="menu__link">Загруженные пользователи</NavLink>
      {/*<NavLink exact to="/" className={classNameFunc}>Домой</NavLink>*/}
      {/*<NavLink to="/reviews" className={classNameFunc}>Обзоры эмодзи</NavLink>*/}
      {/*<NavLink to={`/about-me`} className={classNameFunc}>Тестирование записи и чтения cookie</NavLink>*/}
      {/*<NavLink to="/information-zone" className={classNameFunc}>Video YouTube</NavLink>*/}
      {/*<NavLink to="/about-us" className={classNameFunc}>О нас</NavLink>*/}
      {/*<NavLink to="/cards" className={classNameFunc}>Фотки</NavLink>*/}
    </nav>
  )
}

// NavBar = withRouter(NavBar)
export default NavBar;