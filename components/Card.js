const imagePopupWindow = document.querySelector(".popup_type_preview-image");
const imageElement = imagePopupWindow.querySelector(".popup__image");
const imageCaption = imagePopupWindow.querySelector(".popup__heading_type_preview-image");
const ESC_KEYCODE = 27;

const openPopupWindow = (popupWindow) => {
  popupWindow.classList.add("popup_opened");
  document.addEventListener("keyup", handleEscUp);
}

const closePopupWindow = (popupWindow) => {
  popupWindow.classList.remove("popup_opened");
  document.removeEventListener("keyup", handleEscUp);
}

// need to delete handleEscUp and figure out how to add new event listener to document for ESC

// const handleEscUp = (evt) => {
//   evt.preventDefault();
//   isEscEvent(evt, closePopupWindow);
// }

const isEscEvent = (evt, action) => {
  const activePopup = document
    .querySelector(".popup_opened");
  if (evt.which === ESC_KEYCODE) {
    action(activePopup);
  }
}


class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handlePreviewImage() {
    imageElement.src = data.link;
    imageElement.alt = data.name;
    imageCaption.textContent = data.name;
    // openPopupWindow(image);
  }

  _setEventListeners() {
    this._cardElement.querySelector(".card__like-button").addEventListener("click", this._handleLikeIcon);
    this._cardElement.querySelector(".card__delete-button").addEventListener("click", this._handleDeleteCard);
    this._cardElement.querySelector(".card__image").addEventListener("click", this._handlePreviewImage);
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();

    this._cardElement.querySelector(".card__image").style.backgroundImage = `url(${this._link})`;
    this._cardElement.querySelector(".card__description").textContent = this._name;

    return this._cardElement;
  }
}

export default Card;
