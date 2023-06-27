import { openPopupWindow } from "../utils/utils.js";

const imagePopupWindow = document.querySelector(".popup_type_preview-image");
const imageElement = imagePopupWindow.querySelector(".popup__image");
const imageCaption = imagePopupWindow.querySelector(".popup__heading_type_preview-image");

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  };

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  };

  _handlePreviewImage() {
    imageElement.src = this._link;
    imageElement.alt = this._name;
    imageCaption.textContent = this._name;
    openPopupWindow(imagePopupWindow);
  };

  _setEventListeners() {
    this._likeButton.addEventListener("mousedown", () => this._handleLikeIcon());
    this._deleteButton.addEventListener("mousedown", () => this._handleDeleteCard());
    this._cardImage.addEventListener("mousedown", () => this._handlePreviewImage());
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(".card__delete-button");
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardDescription = this._cardElement.querySelector(".card__description");

    this._setEventListeners();

    this._cardImage.setAttribute("src", `${this._link}`);
    this._cardImage.setAttribute("alt", `Photo of ${this._name}`);
    this._cardDescription.textContent = this._name;

    return this._cardElement;
  };
};

export default Card;
