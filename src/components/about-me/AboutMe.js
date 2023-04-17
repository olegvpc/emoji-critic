import React from 'react';
import { useState } from 'react';
import './AboutMe.css';
import MyStory from "./MyStory";
import Hobbies from "./Hobbies";
// import Contact from "./Contact";

import { Link, Route, useRouteMatch } from 'react-router-dom'

function AboutMe () {
  const [cookieGet, setCookieGet ] = useState({mesage: "NULL"});


    function getCookie () {
    console.log("launched function get cookie")
    fetch('http://localhost:3000/get-cookie', {
    method: 'GET',
    credentials: 'include', // теперь куки посылаются вместе с запросом
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   },
    })
      .then(res => {
        return res.json()})
      .then(res => {
        setCookieGet(res);
        console.log(cookieGet, typeof(cookieGet))})
      .catch((err) => console.log(err.message));
  }

  function setCookie () {
    console.log("launched function set cookie")
    return fetch('http://localhost:3000/set-cookie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(res => {
        console.log(res, res.headers.get('Content-Type'), res.headers.get('Set-Cookie'), res.type)
        // console.log(res.headers.get('Date'))
        // return res.json()
      return res.text()
    })
      .then(res => {
        setCookieGet(res)
        console.log(cookieGet)})
      .catch((err) => console.log(err.message));
  }

    const { path, url } = useRouteMatch();
    // console.log(url, path) // /about-me /about-me

    return (
    // <div className="about">
    //   <p>
    //    Я человек простой. Вижу эмодзи - пишу ревью.
    //   </p>
    // </div>
      <div>
        <ul className="links">
          <li>
              {/*браузер откроет страницу с адресом localhost:3000/my-story. */}
              {/*А по задумке браузер должен перенаправить нас */}
              {/*на localhost:3000/about-me/my-story.*/}
              {/*Чтобы всё работало правильно, нужно применить хук в компонентах Link и Route. */}
            <Link to={`${url}/my-story`}>Моя история</Link>
          </li>
          <li>
            <Link to={`${url}/hobbies`}>Хобби</Link>
          </li>
          <li>
            <Link to={`${url}/contact`}>Контактная информация</Link>
          </li>
        </ul>
        <Route exact path={`${path}/my-story`}>
          <MyStory />
        </Route>
        <Route exact path={`${path}/hobbies`}>
          <Hobbies />
        </Route>
        {/*<Route exact path={`${path}/contact`}>*/}
        {/*  <Contact />*/}
        {/*</Route>*/}
        <button onClick={getCookie}>Get cookie</button>
        <button onClick={setCookie}>Set cookie</button>
        <p>РЕАЛЬНЫЕ КУКИ полученные <b>document.cookie:</b> {document.cookie}</p>
        {/*<p> State Cookie: '{cookieGet.message}'</p>*/}
        {/*<p>State Cookie: {Object.entries(cookieGet).join(", ")}</p>*/}
        <p>State Cookie: {JSON.stringify(cookieGet)}</p>
        {/* <p>message: {cookieGet.message}</p>*/}


      </div>
    )
}

export default AboutMe;