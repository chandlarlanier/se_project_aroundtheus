export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose.bind(this);
    console.log(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    this._popupElement.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
    this._popupElement.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {
    console.log(evt);
    if (evt.key == "Escape") {
      this.close().bind(this);
    }
  }

  setEventListeners() {
    this._popupElement
      .querySelector(".popup__close-button")
      .addEventListener("mousedown", this.close);
    console.log(this);
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
        console.log(this);
      }
    });
  }
}
