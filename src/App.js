import logo from './logo.svg';
import './index.css';

function App() {
  return (
    <div className="page">

      <header className="header page__section">
        <img src="<%=require('./images/logo.svg')%>" alt="Логотип" className="header__logo"/>
      </header>

      <main id="content">
        <section className="profile page__section" aria-label="Профиль">
          <div className="profile__content">
            <img src="#" alt="Аватар профиля" className="profile__avatar"/>
            <button type="button"  className="profile__avatar-edit-button">
              <img src="<%=require('./images/edit-button_big.svg')%>" alt="" className="profile__avatar-edit-icon"/>
            </button>
            <div className="profile__title">
              <h1 id="no_id" className="profile__name">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать"></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
          <button type="button" className="profile__add-button" aria-label="Добавить"></button>
        </section>

        <section className="cards page__section" aria-label="Места">
          <template className="card-template">
            <figure className="card">
              <button className="card__image-button">
                <img src="#" alt="Фотография места" className="card__image"/>
              </button>
              <figcaption className="card__caption">
                <p className="card__title"></p>
                <div className="card__like-block">
                  <button type="button" className="card__like-button" aria-label="Нравится"></button>
                  <p className="card__likes-counter">0</p>
              </div>
              </figcaption>
              <button type="button" className="card__trash-button" aria-label="Удалить"></button>
            </figure>
          </template>
        </section>
      </main>

      <footer className="footer page__section">
        <p className="footer__content">&copy; 2021 Mesto Russia</p>
      </footer>

      <section className="popup popup_type_profile-edit" aria-label="Редактирование профиля">
        <form className="form" name="edit" novalidate>
          <button type="button" className="popup__close-button" aria-label="Закрыть попап"></button>
          <h2 className="form__title">Редактировать профиль</h2>
          <label className="form__field">
            <input type="text" id="username-input" className="form__input" name="username" placeholder="Имя" minlength="2" maxlength="40" required/>
            <span className="form__input-error username-input-error"></span>
          </label>
          <label className="form__field">
            <input type="text" id="description-input" className="form__input" name="description" placeholder="О себе" minlength="2" maxlength="200" required/>
            <span className="form__input-error description-input-error"></span>
          </label>
          <button type="submit" className="form__submit-button">Сохранить</button>
        </form>
      </section>

      <section className="popup popup_type_avatar-edit" aria-label="Редактирование аватара профиля">
        <form className="form" name="avatar" novalidate>
         <button type="button" className="popup__close-button" aria-label="Закрыть попап"></button>
          <h2 className="form__title">Обновить аватар</h2>
          <label className="form__field">
          <input type="url" id="avatar-input" className="form__input form__input-url" name="url" placeholder="Ссылка на картинку с аватаром" required/>
            <span className="form__input-error avatar-input-error"></span>
          </label>
         <button type="submit" className="form__submit-button">Сохранить</button>
       </form>
      </section>

      <section className="popup popup_type_card-add" aria-label="Добавление нового места">
        <form className="form" name="add" novalidate>
          <button type="button" className="popup__close-button" aria-label="Закрыть попап"></button>
          <h2 className="form__title">Новое место</h2>
          <label className="form__field">
            <input type="text" id="title-input" className="form__input" name="cardname" placeholder="Название" minlength="1" maxlength="30" required/>
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
        <form className="form" name="confirm" novalidate>
          <button type="button" className="popup__close-button" aria-label="Закрыть попап"></button>
          <h2 className="form__title">Вы уверены?</h2>
          <button type="submit" className="form__submit-button">Да</button>
        </form>
      </section>

    </div>
  );
}

export default App;
