import React from 'react';

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div>
      <figure className="card">
        <button className="card__image-button" onClick={handleClick}>
          <img src={card.link} alt={card.name} className="card__image"/>
        </button>
        <figcaption className="card__caption">
          <p className="card__title">{card.name}</p>
          <div className="card__like-block">
            <button type="button" className="card__like-button" aria-label="Нравится"></button>
            <p className="card__likes-counter">{card.likes.length}</p>
          </div>
        </figcaption>
        <button type="button" className="card__trash-button" aria-label="Удалить"></button>
      </figure>
    </div>
  )
}

export default Card;
