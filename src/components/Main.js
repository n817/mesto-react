import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Card from './Card';
import avatarEditIcon from '../images/edit-button_big.svg';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  // Загружаем карточки с сервера
  React.useEffect(() => {
      api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });

    }, []);


  return (
    <main id="content">
        <section className="profile page__section" aria-label="Профиль">
          <div className="profile__content">
            <img src={currentUser.avatar} alt="Аватар профиля" className="profile__avatar"/>
            <button type="button"  className="profile__avatar-edit-button" onClick={onEditAvatar}>
              <img src={avatarEditIcon} alt="" className="profile__avatar-edit-icon"/>
            </button>
            <div className="profile__title">
              <h1 id="no_id" className="profile__name">{currentUser.name}</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button type="button" className="profile__add-button" aria-label="Добавить" onClick={onAddPlace}></button>
        </section>

        <section className="cards page__section" aria-label="Места">

          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}/>
            )
          )}

        </section>
      </main>
  );
}

export default Main;
