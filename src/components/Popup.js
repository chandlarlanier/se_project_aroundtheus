import { ESC_KEYCODE } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    this._popupElement.addEventListener("keyup", this._handleEscClose());
  }

  close() {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
    this._popupElement.removeEventListener("keyup", this._handleEscClose());
  }

  _handleEscClose(evt) {
    if (evt.which === ESC_KEYCODE) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.querySelector(".popup__close-button").addEventListener("mousedown", this.close);
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
