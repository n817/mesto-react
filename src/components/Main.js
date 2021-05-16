import avatarEditIcon from '../images/edit-button_big.svg';

function Main({onEditAvatar, onEditProfile, onAddPlace}) {

  return (
    <main id="content">
        <section className="profile page__section" aria-label="Профиль">
          <div className="profile__content">
            <img src="#" alt="Аватар профиля" className="profile__avatar"/>
            <button type="button"  className="profile__avatar-edit-button" onClick={onEditAvatar}>
              <img src={avatarEditIcon} alt="" className="profile__avatar-edit-icon"/>
            </button>
            <div className="profile__title">
              <h1 id="no_id" className="profile__name">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
          <button type="button" className="profile__add-button" aria-label="Добавить" onClick={onAddPlace}></button>
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
  );
}

export default Main;
