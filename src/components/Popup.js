import { ESC_KEYCODE } from "../utils/utils.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open(popupElement) {
    popupElement.classList.add(".popup_opened");
    popupElement.addEventListener("keyup", this._handleEscClose);
  }

  close(popupElement) {
    popupElement.classList.remove(".popup_opened");
    popupElement.removeEventListener("keyup", () => {
      this._handleEscClose();
    });
  }

  _handleEscClose(evt) {
    if (evt.which === ESC_KEYCODE) {
      this.close();
    }
  }

  setEventListeners() {
    this.querySelector(".popup__close-button").addEventListener("click", close);
    this.querySelector(".popup").addEventListener("click", close);
  }
}
