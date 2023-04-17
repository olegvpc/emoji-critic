import './Users.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import {
  getAllUsers,
  getCurrentUser
} from '../utils/mainApi'

function Users ({ users }) {
  console.log(users)
  // const [usersWithImage, setUsersWithImage] = useState([])
  // //
  // useEffect(() => {
  //   console.count("users-effect")
  //   users.forEach(user => {
  //     if (user.imageId === "no Image") {
  //       const newUser = {...user, imageUrl: user.imageId}
  //       setUsersWithImage(prev => [...prev, newUser])
  //     } else {
  //       getCurrentUser(user.imageId)
  //       .then((blob) => {
  //         const url = URL.createObjectURL(blob);
  //         return {...user, imageUrl: url}
  //       })
  //       .then((newUser) => setUsersWithImage(prev => [...prev, newUser]))
  //       .catch((err) => console.log(`Ошибка загрузки картинки- ${err}`))
  //     }
  //   })
  // },[])
  //


  return (
      <ul className="users">
        {users?.map((user)=>{
          return (
            <li key={user._id}
                className="users__item">
              {user.imageId !== "no Image" ?
                  <Link to={`/users/${user.imageId}`}
                // <Link to={ { pathname: `/users/${user.imageId}`, selectUser: user } }
                >
                  <p>Посмотреть аватар</p>
                  <img className="user__image" src={user.imageUrl} alt={`Avatar- ${user.name}`}/>
                </Link> :
                <>
                  <p>"Нет аватара"</p>
                  <div className="user__image"></div>

                </>
              }
            <p>{user.name}</p>
            </li>
          )
        })}
      </ul>
  );
}

export default Users;