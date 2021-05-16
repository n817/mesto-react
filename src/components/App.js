import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';


function App() {

  function handleEditAvatarClick(){
    document.querySelector('.popup_type_avatar-edit').classList.add('popup_opened');
  }

  function handleEditProfileClick(){
    document.querySelector('.popup_type_profile-edit').classList.add('popup_opened');
  }

  function handleAddPlaceClick(){
    document.querySelector('.popup_type_card-add').classList.add('popup_opened');
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar = {handleEditAvatarClick}
            onEditProfile = {handleEditProfileClick}
            onAddPlace = {handleAddPlaceClick}/>
      <Footer />

      <section className="popup popup_type_avatar-edit" aria-label="Редактирование аватара профиля">
        <form className="form" name="avatar" noValidate>
         <button type="button" className="popup__close-button" aria-label="Закрыть попап"></button>
          <h2 className="form__title">Обновить аватар</h2>
          <label className="form__field">
          <input type="url" id="avatar-input" className="form__input form__input-url" name="url" placeholder="Ссылка на картинку с аватаром" required/>
            <span className="form__input-error avatar-input-error"></span>
          </label>
         <button type="submit" className="form__submit-button">Сохранить</button>
       </form>
      </section>

      <section className="popup popup_type_profile-edit" aria-label="Редактирование профиля">
        <form className="form" name="edit" noValidate>
          <button type="button" className="popup__close-button" aria-label="Закрыть попап"></button>
          <h2 className="form__title">Редактировать профиль</h2>
          <label className="form__field">
            <input type="text" id="username-input" className="form__input" name="username" placeholder="Имя" minLength="2" maxLength="40" required/>
            <span className="form__input-error username-input-error"></span>
          </label>
          <label className="form__field">
            <input type="text" id="description-input" className="form__input" name="description" placeholder="О себе" minLength="2" maxLength="200" required/>
            <span className="form__input-error description-input-error"></span>
          </label>
          <button type="submit" className="form__submit-button">Сохранить</button>
        </form>
      </section>

      <section className="popup popup_type_card-add" aria-label="Добавление нового места">
        <form className="form" name="add" noValidate>
          <button type="button" className="popup__close-button" aria-label="Закрыть попап"></button>
          <h2 className="form__title">Новое место</h2>
          <label className="form__field">
            <input type="text" id="title-input" className="form__input" name="cardname" placeholder="Название" minLength="1" maxLength="30" required/>
           <span className="form__input-error title-input-error"></span>
          </label>
         <label className="form__field">
            <input type="url" id="url-input" className="form__input form__input-url" name="url" placeholder="Ссылка на картинку" required/>
            <span className="form__input-error url-input-error"></span>
         </label>
         <button type="submit" className="form__submit-button">Создать</button>
        </form>
      </section>

      <section className="popup popup_type_zoom" aria-label="Просмотр фотографий">
        <figure className="zoom">
          <button type="button" className="popup__close-button" aria-label="Закрыть попап"></button>
          <img src="#" alt="Фотография места" className="zoom__image"/>
          <figcaption className="zoom__caption">Каньон Святой Анны</figcaption>
        </figure>
      </section>

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
