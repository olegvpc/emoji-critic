
import './App.css';

import React, { lazy, Suspense } from 'react';
import { useEffect, useState } from 'react';
// Добавили компонент Header с логотипом проекта
import { Route, Switch } from 'react-router-dom';
import {
  uploadImage,
  saveProfile,
  getAllUsers,
  getCurrentUser,
} from "../utils/mainApi";
import Header from './Header';
import "./Header.css"
import './App.css';
import Dashboard from "./Dashboard";
import AboutMe from "./about-me/AboutMe";
import Reviews from "./Reviews";
import Review from "./Review";
import AboutUs from './about-us/AboutUs';
import Contact from "./about-me/Contact";
import PageNotFound from "./PageNotFound";
import Cards from "./Cards";
import Card from "./Card";
import Upload from './Upload'
import Users from './Users'
import User from './User'
import Interview from'./Interview'
import InterviewMinin from './Interview-minin'
import Capture from "./Capture";
import Rtsp from "./Rtsp";
import Redis from './Redis';
import Electron from './Electron';
import Laravel from './Laravel';
// import Video from './Video';
const Video = lazy(() => import('./Video'))





function App() {

  const [reviews, setReviews] = useState();
  const [cards, setCards] = useState();



  // этот хук используется единожды, при запуске компонента
  useEffect(() => {
    // получаем данные с сервера
    fetch('https://api.nomoreparties.co/emoji-critic-rus')
        .then((res) => {
          return res.json();
        })
        .then((parsedReviews) => {
          setReviews(parsedReviews);
        })
  }, []);

      // этот хук используется для загрузки Карточек
  useEffect(() => {
    console.count("Use-effect-start")
    // получаем данные с сервера
    fetch('https://mesto.nomoreparties.co/v1/cohort-45/cards', {
      method: 'GET',
      headers: {
        authorization: 'c6ae09bb-60e1-4878-abd8-c5707855c0f1',
            'Content-Type': 'application/json'
      },
    })
        .then((res) => {
          return res.json();
        })
        .then((cards) => {
          setCards(cards);
        })
  }, []);

  const [users, setUsers] = useState([])
  // eslint-disable-next-line 
  const [isloaded, setIsLoaded] = useState(false)

      function getImageUrl(id) {
      return new Promise((resolve, reject) => {
        if(id === 'no Image') {
        resolve('no Image')
      } else {
          getCurrentUser(id)
            .then((blob) => {
              // console.log(blob)
              resolve(URL.createObjectURL(blob))
            })
            .catch(err => {
              console.log`Загрузка URL не прошла - ${err}`;
              reject()
            })
        }
      })
    }

  useEffect(() => {

    getAllUsers()

      .then((users) => {
        users.forEach((item) => {
          getImageUrl(item.imageId)
            .then((res) => {
              setUsers((prev) => [...prev, {...item, imageUrl: res}])
              // console.log(user)
            })
            .catch(err=> console.log(`Ошибка формирования списка - ${err}`))
        })
      })
      .catch((err) => console.log(`Загрузка всех юзеров не удалась - ${err}`))
    setIsLoaded(true)
    // return (setIsLoaded(false))
  },[])

  function handleProfile (name, imageId) {
    console.log(name, imageId)
      saveProfile(name, imageId )
        .then(res => {
          console.log(res)
        })
        .catch((err) => console.log(`Ошибка сохранения профайла - ${err}`))
  }
  function handleSubmit(fileData, name) {
    if (fileData) {
      uploadImage(fileData)
      .then((res) => {
        console.log(res); // {message: 'File uploaded successfully', fieldname: 'avatar', filename: 'kluni.jpg', id: '63a3ca040c0e01b0d0c1bf43'}
        handleProfile(name, res.id)
      })
      .catch(err => console.log(err))
    } else {
      handleProfile(name, 'no Image')
    }

  }
  return (
    <div className="App">
      <Header />
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/reviews/:id">
            <Review reviews={reviews}/>
          </Route>

          <Route exact path="/reviews">
            <Reviews reviews={reviews}/>
          </Route>

          <Route exact path="/information-zone">
            <Video />
          </Route>

          <Route exact path="/interview">
            <Interview />
          </Route>

          <Route exact path="/interview-minin">
            <InterviewMinin />
          </Route>

          <Route exact path="/capture">
            <Capture />
          </Route>

          <Route exact path="/redis">
            <Redis />
          </Route>

          <Route exact path="/rtsp">
            <Rtsp />
          </Route>

          <Route exact path="/electron">
            <Electron />
          </Route>

          <Route exact path="/laravel">
            <Laravel />
          </Route>

          <Route exact path="/upload">
            <Upload onSubmit={handleSubmit}/>
          </Route>

          <Route exact path="/users">
            <Users
              users={users}
            />
          </Route>

          <Route exact path="/users/:id">
            <User
            users={users}
            />
          </Route>

          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/about-me/contact">
            <Contact />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
            <Route exact path="/cards">
                <Cards cards={cards}/>
            </Route>
          <Route exact path="/cards/:id">
            <Card cards={cards}/>
          </Route>
        </Suspense>
          <Route path="*">
              <PageNotFound />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
