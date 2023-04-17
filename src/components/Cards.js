import React from 'react';
import './Cards.css';
import { Link } from "react-router-dom";

function Cards (props) {
  return (
    // <div className="review">
    //   <div className="review__item">
    //     <h3>Обзор:</h3>
    //     <p>Текст:</p>
    //     <p className="review__rating">Рейтинг:</p>
    //   </div>
    // </div>
      // ----------динамическая маршрутизация ----
          // необходимо изменить код внутри метода map
    <>
      <ul className="cards">
        {props.cards && props.cards.map((card)=>{
          return (
              <li key={card._id} className="cards__item">
                  <Link to={`/cards/${card._id}`}>
                    <img className="card__image" src={card.link} alt={card.name}/>
                  </Link>
                  <p>{card.name}</p>
                  <span>Лайков {card.likes.length}</span>
              </li>
          )
        })}
      </ul>
    </>
  );
}

export default Cards;