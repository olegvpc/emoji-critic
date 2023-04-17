
import './Card.css';
import {useParams, useHistory } from 'react-router-dom';

function Card ({ cards }) {

  let { id } = useParams();

  const history = useHistory();

  const fullCard = cards && cards.map((card) =>
            card._id === id ? (
                  <div className="card">
                    <img className="card__image" src={card.link} alt={card.name}/>
                    <p>{card.name}</p>
                    <button className="button button_type_back" onClick={() => history.goBack()}>Back</button>
                  </div>
          ) : "")


    return fullCard
        }
  // return (
  //   <div className="card">
  //     <button className="button button_type_back" onClick={() => history.goBack()}>Back</button>
  //     {
  //       cards &&
  //         <div className="card">
  //
  //           {/*<p>{card.name}</p>*/}
  //
  //         </div>
  //     }
  //
  //   </div>
  // );


export default Card;