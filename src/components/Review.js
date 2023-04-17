import React from 'react';
import './Review.css';
import { useParams, useHistory } from 'react-router-dom';

function Review (props) {
  let { reviews } = props;
  let { id } = useParams();
  // the object keys start with 0, but the IDs in the API begin at 1
  id = id - 1;
  const history = useHistory();
  return (
    <div className="review">
      <button className="button button_type_back" onClick={() =>
        history.goBack()
        // history.push('/information-zone')
      }>Back
      </button>
      {
        reviews &&
          <div className="review__item">
            <h3>{reviews[id].title}</h3>
            <p>{reviews[id].text}</p>
            <p className="review__rating">Рейтинг:{reviews[id].rating}</p>
          </div>
      }

    </div>
  );
}

export default Review;