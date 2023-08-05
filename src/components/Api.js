export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify({
        isLiked: true
      })
    })
      .then(this._checkResponse);
  }

  unlikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  updateProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: document.querySelector(".profile__title").textContent,
        about: document.querySelector(".profile__description").textContent
      })
    })
      .then(this._checkResponse);
  }

  updateAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(this._checkResponse);
  }

}
