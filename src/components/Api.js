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
    });
  }

  addInitialCards() {
    fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        "authorization": this._authToken,
        "content-type": "application/json"
      },
      body: [
        {
              "createdAt": "2023-07-05T08:10:57.741Z",
          "isLiked": false,
              "link": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
              "name": "Yosemite Valley",
              "owner": {
                  "about": "Sailor, researcher",
                  "avatar": "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg",
                "name": "Jacques Cousteau",
                "_id": "e20537ed11237f86bbb20ccb"
              },
          "_id": "5d1f0611d321eb4bdcd707dd"
        },
          {
              "createdAt": "2023-07-05T08:11:58.324Z",
          "isLiked": false,
              "link": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
              "name": "Lake Louise",
              "owner": {
                  "about": "Sailor, researcher",
                  "avatar": "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg",
                "name": "Jacques Cousteau",
                "_id": "e20537ed11237f86bbb20ccb"
              },
          "_id": "5d1f064ed321eb4bdcd707de"
        }
      ]
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

}
