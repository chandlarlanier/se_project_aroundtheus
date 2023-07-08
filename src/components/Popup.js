import { ESC_KEYCODE } from "../utils/utils.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this.classList.add(".popup_opened");
  }

  close() {
    this.classList.remove(".popup_opened");
  }

  _handleEscClose(evt) {
    if (evt.which === ESC_KEYCODE) {
      this.close();
    }
  }

  setEventListeners() {
    this.querySelector(".popup__close-button").addEventListener("click", close);
    this.querySelector(".popup").addEventListener("click", close);
    this.querySelector(".popup").addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
}
