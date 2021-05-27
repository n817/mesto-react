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


  // Функция-обработчик лайков
  function handleCardLike(card) {
	  // Проверяем, есть ли уже лайк на этой карточке
	  const isLiked = card.likes.some(i => i._id === currentUser._id);
	  // Отправляем запрос в API и получаем обновлённые данные карточки
	  api.changeLikeCardStatus({
      methodName: `${isLiked ? 'DELETE' : 'PUT'}`,
      cardId: card._id})
      .then((newCard) => {
		// Формируем новый массив на основе имеющегося, подставляя в него новую карточку
	  const newCards = cards.map((c) => c._id === card._id ? newCard : c);
	  // Обновляем стейт
	  setCards(newCards);
	});
}

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
              onCardClick={onCardClick}
              onCardLike={handleCardLike}/>
            )
          )}

        </section>
      </main>
  );
}

export default Main;
