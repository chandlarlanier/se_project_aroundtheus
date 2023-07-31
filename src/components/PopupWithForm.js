import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._submitButton = this._popupElement.querySelector(".popup__button");
    this._handleFormSubmit = handleFormSubmit;
  }

  handleLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Saving...";
    } else {
      this._submitButton.textContent = "Save";
    }
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  open() {
    this.handleLoading(false);
    super.open();
  }

  _getInputValues() {
    const inputList = [...this._popupForm.querySelectorAll(".popup__input")];
    const inputValues = {};
    for (const input of inputList) {
      inputValues[input.name] = input.value;
    }
    return inputValues;
  }


  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleLoading(true);
      this._handleFormSubmit(this._getInputValues())
        .then(() => {
          this.close();
        })
    });
  }
}
