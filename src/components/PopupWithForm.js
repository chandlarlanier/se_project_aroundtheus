import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
    // this._popupForm.reset();
  }

  _getInputValues() {
    const inputElements = this._popupForm.querySelectorAll(".popup__input");
    const inputValues = {title: inputElements[0], info: inputElements[1]};
    return inputValues;
  }


  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
      this.close();
    });
  }
}
