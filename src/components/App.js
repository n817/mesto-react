import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import Footer from './Footer';
import api from '../utils/api'
import '../index.css';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

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

  // Загружаем данные пользователя с сервера
  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setCurrentUser(res);
      })
    .catch((err) => {
       console.log(err);
      });

  }, []);


  function handleUpdateUser({name, about}) {
    api.setUserInfo({name, about})
    .then((res) => {
      setCurrentUser(res);
      })
    .catch((err) => {
       console.log(err);
      })
    .finally(() => {
      closeAllPopups();
    })
  }


  // Реализуем закрытие popup кнопкой Esc
  React.useEffect(() => {

    function handleEscClose(evt) {
      if (evt.key ==='Escape') {
        closeAllPopups();
      }
    }
    // Список действий внутри одного хука
    document.addEventListener('keyup', handleEscClose);

    // Возвращаем функцию, которая удаляет эффекты
    return () => {
      document.removeEventListener('keyup', handleEscClose);
    }

  },[]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main onEditAvatar = {handleEditAvatarClick}
              onEditProfile = {handleEditProfileClick}
              onAddPlace = {handleAddPlaceClick}
              onCardClick = {handleCardClick}/>
        <Footer />

        <PopupWithForm
          name="avatar-edit"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
            <label className="form__field">
            <input type="url" id="avatar-input" className="form__input form__input-url" name="url" placeholder="Ссылка на картинку с аватаром" required/>
             <span className="form__input-error avatar-input-error"></span>
            </label>
        </PopupWithForm>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

        <PopupWithForm
          name="card-add"
          title="Новое место"
          buttonText="Создать"
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
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
