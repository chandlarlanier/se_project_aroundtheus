export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    // opens popup
    this.classList.add(".popup_opened");
    
  }

  close() {
    // closes popup
    this.classList.remove(".popup_opened");
  }

  _handleEscClose() {
    // closes popup when the user presses ESC key

  }

  setEventListeners() {
    // add click event listener to close icon and shaded area around popup
    this.querySelector(".popup__close-button").addEventListener("click", close);
    this.querySelector(".popup").addEventListener("click", close);

  }
};
