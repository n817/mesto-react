import React from 'react';
import api from '../utils/api';
import Card from './Card';
import avatarEditIcon from '../images/edit-button_big.svg';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userName, setUserName] = React.useState('Имя');
  const [userDescription, setUserDescription] = React.useState('Описание');
  const [userAvatar, setUserAvatar] = React.useState('#');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
      .then((res) => {
        const [userData, initialCards] = res;
        // Загружаем данные пользователя с сервера
        //userId = userData._id;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        // Загружаем карточки с сервера
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });

    }, []);


  return (
    <main id="content">
        <section className="profile page__section" aria-label="Профиль">
          <div className="profile__content">
            <img src={userAvatar} alt="Аватар профиля" className="profile__avatar"/>
            <button type="button"  className="profile__avatar-edit-button" onClick={onEditAvatar}>
              <img src={avatarEditIcon} alt="" className="profile__avatar-edit-icon"/>
            </button>
            <div className="profile__title">
              <h1 id="no_id" className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{userDescription}</p>
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
