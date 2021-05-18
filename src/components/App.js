import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

import Footer from './Footer';
import '../index.css';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});


  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card){
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar = {handleEditAvatarClick}
            onEditProfile = {handleEditProfileClick}
            onAddPlace = {handleAddPlaceClick}
            onCardClick = {handleCardClick}/>
      <Footer />

      <PopupWithForm
        name="avatar-edit"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <label className="form__field">
          <input type="url" id="avatar-input" className="form__input form__input-url" name="url" placeholder="Ссылка на картинку с аватаром" required/>
            <span className="form__input-error avatar-input-error"></span>
          </label>
         <button type="submit" className="form__submit-button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <label className="form__field">
            <input type="text" id="username-input" className="form__input" name="username" placeholder="Имя" minLength="2" maxLength="40" required/>
            <span className="form__input-error username-input-error"></span>
          </label>
          <label className="form__field">
            <input type="text" id="description-input" className="form__input" name="description" placeholder="О себе" minLength="2" maxLength="200" required/>
            <span className="form__input-error description-input-error"></span>
          </label>
          <button type="submit" className="form__submit-button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        name="card-add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <label className="form__field">
            <input type="text" id="title-input" className="form__input" name="cardname" placeholder="Название" minLength="1" maxLength="30" required/>
           <span className="form__input-error title-input-error"></span>
          </label>
         <label className="form__field">
            <input type="url" id="url-input" className="form__input form__input-url" name="url" placeholder="Ссылка на картинку" required/>
            <span className="form__input-error url-input-error"></span>
         </label>
         <button type="submit" className="form__submit-button">Создать</button>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <section className="popup popup_type_confirm-delete">
        <form className="form" name="confirm" noValidate>
          <button type="button" className="popup__close-button" aria-label="Закрыть попап"></button>
          <h2 className="form__title">Вы уверены?</h2>
          <button type="submit" className="form__submit-button">Да</button>
        </form>
      </section>

    </div>
  );
}

export default App;
