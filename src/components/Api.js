export default class Api {
  constructor({baseUrl, authToken}) {
    this._baseUrl = baseUrl;
    this._authToken = authToken;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._authToken
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error getting user info: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authToken,
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error adding card: ${res.status}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: this._authToken
      }
    });
  }

  updateProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authToken,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: document.querySelector(".profile__title").textContent,
        about: document.querySelector(".profile__description").textContent
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error updating profile info: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
