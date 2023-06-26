import { ESC_KEYCODE, openPopupWindow, closePopupWindow, isEscEvent, handleEscUp } from "../utils/utils.js";


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
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  };

  _handlePreviewImage() {
    imageElement.src = this._link;
    imageElement.alt = this._name;
    imageCaption.textContent = this._name;
    openPopupWindow(imagePopupWindow);
  };

  _setEventListeners() {
    this._cardElement.querySelector(".card__like-button").addEventListener("click", () => this._handleLikeIcon());
    this._cardElement.querySelector(".card__delete-button").addEventListener("click", () => this._handleDeleteCard());
    this._cardElement.querySelector(".card__image").addEventListener("click", () => this._handlePreviewImage());
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();

    this._cardElement.querySelector(".card__image").setAttribute("src", `${this._link}`);
    this._cardElement.querySelector(".card__image").setAttribute("alt", `Photo of ${this._name}`);
    this._cardElement.querySelector(".card__description").textContent = this._name;

    return this._cardElement;
  };
};

export default Card;
