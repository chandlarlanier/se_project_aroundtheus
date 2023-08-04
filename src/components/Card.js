export default class Card {
  constructor({ data, handleImageClick, handleDelete, confirmPopup, api }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;

    this._handleImageClick = handleImageClick;

    this._handleDelete = handleDelete;

    this._confirmPopup = confirmPopup;

    this._api = api;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  getId() {
    return this._id;
  }


  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
    if (this._cardElement.querySelector(".card__like-button_active")) {
      this._api.likeCard(this.getId())
        .catch((err) => {
          console.error(err);
        })
    } else {
      this._api.unlikeCard(this.getId())
        .catch((err) => {
          console.error(err);
        })
    }
  }

  _setLike() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    }
  }


  _setEventListeners() {
    this._likeButton.addEventListener("mousedown", () => this._handleLikeIcon());
    this._binIcon.addEventListener("mousedown", () => {
      this._handleDelete(this);
    });

    this._cardImage.addEventListener("mousedown", () => {
      this._handleImageClick({ link: this._link, name: this._name });
    });
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._binIcon = this._cardElement.querySelector(".card__delete-button");
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardDescription = this._cardElement.querySelector(".card__description");

    this._setEventListeners();
    this._setLike();

    this._cardImage.src = this._link;
    this._cardImage.alt = `Photo of ${this._name}`;
    this._cardDescription.textContent = this._name;

    return this._cardElement;
  }
}
