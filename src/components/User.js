import './User.css';
import {useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getCurrentUser} from '../utils/mainApi';
// import { BreadcrumbItem } from "react-bootstrap"
// import { useLocation } from 'react-router-dom'

function User ({ users }) {

  const [imageFileUrl, setImageFileUrl] = useState()

  const { id } = useParams();

  const user = users.find((item) => item.imageId === id)

  useEffect(() => {
    getCurrentUser(id)
      .then((blob) => setImageFileUrl(URL.createObjectURL(blob)))
      .catch((err) => console.log(`Ошибка загрузки картинки- ${err}`))
  }, [])
  // console.log(imageFileUrl)
  const history = useHistory();

  return (
    <div className="card__user">
      <p>АВАТАР</p>
        <img className="user__image" src={imageFileUrl} alt={id}/>

      <p>{user.name}</p>
      <button className="button button_type_back"
              onClick={() => history.goBack()}>Back
      </button>
    </div>

  )
  // users && users.map((user) =>
  //               user.imageId === id.toString() ? (
  //                 <div className="card__user">
  //                   <p>тут будет картинка</p>
  //                   {/*<img className="card__image" src={card.link} alt={card.name}/>*/}
  //                   <p>{user.name}</p>
  //                   <button className="button button_type_back"
  //                           onClick={() => history.goBack()}>Back
  //                   </button>
  //                 </div>
  //               ) : "")
  //         return userData

}

export default User;
