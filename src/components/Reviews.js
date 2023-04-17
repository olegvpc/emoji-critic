import React from 'react';
import './Reviews.css';
import { Link } from "react-router-dom";

function Review (props) {
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
      <ul className="reviews">
        {props.reviews && props.reviews.map((review)=>{
          return (
              <li key={review.id} className="reviews__item">
                  <Link to={`/reviews/${review.id}`}>
                    {review.title}
                  </Link>
              </li>
          )
        })}
      </ul>
    </>
  );
}

export default Review;