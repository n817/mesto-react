class Api {
  constructor({cardsUrl, userUrl, headers}) {
    this._cardsUrl = cardsUrl;
    this._userUrl = userUrl;
    this._headers = headers;
    this._authorization = headers.authorization;
  }

  // Получение информации о пользователе с сервера
  getUserInfo() {
    return fetch(this._userUrl, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  // Загрузка новой информации о пользователе на сервер
  patchUserInfo(formData) {
    return fetch(this._userUrl, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: formData.username,
      about: formData.description
      })
    })
    .then(this._checkResponse)
  }

  // Загрузка аватара пользователя на сервер
  patchUserAvatar(formData) {
    return fetch(`${this._userUrl}/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: formData.url,
      })
    })
    .then(this._checkResponse)
  }

  // Получение массива карточек с сервера
  getInitialCards() {
    return fetch(this._cardsUrl, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  // Загрузка новой карточки на сервер
  postNewCard(formData) {
    return fetch(this._cardsUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: formData.cardname,
        link: formData.url
        })
    })
    .then(this._checkResponse)
  }

  // Лайк и удаление лайка карточки
  toggleCardLike({methodName, cardId}) {
    return fetch(`${this._cardsUrl}/likes/${cardId}`, {
      method: methodName,
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  // Удаление карточки на сервере
  deleteCard(cardId) {
    return fetch(`${this._cardsUrl}/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

}


// Создаем экземпляр класса взаимодействия с API сервера
const api = new Api({
  cardsUrl: 'https://mesto.nomoreparties.co/v1/cohort-22/cards',
  userUrl: 'https://mesto.nomoreparties.co/v1/cohort-22/users/me',
  headers: {
    authorization: '515ca80d-3822-4c04-8086-34127dceee10',
    'Content-Type': 'application/json'
  }
});


export default api;
