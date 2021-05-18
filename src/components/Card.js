import React from 'react';

function Card({name, link, likes}) {
  return (
    <div>
      <figure className="card">
        <button className="card__image-button">
          <img src={link} alt={name} className="card__image"/>
        </button>
        <figcaption className="card__caption">
          <p className="card__title">{name}</p>
          <div className="card__like-block">
            <button type="button" className="card__like-button" aria-label="Нравится"></button>
            <p className="card__likes-counter">{likes}</p>
          </div>
        </figcaption>
        <button type="button" className="card__trash-button" aria-label="Удалить"></button>
      </figure>
    </div>
  )
}

export default Card;
