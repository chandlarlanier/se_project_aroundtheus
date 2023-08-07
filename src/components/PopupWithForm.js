import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._submitButton = this._popupElement.querySelector(".popup__button");
    this._submitButtonText = this._submitButton.textContent;
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = [...this._popupForm.querySelectorAll(".popup__input")];
  }

  // handleLoading(isLoading) {
  //   if (isLoading) {
  //     this._submitButton.textContent = "Saving...";
  //   } else {
  //     this._submitButton.textContent = "Save";
  //   }
  // }

  renderLoading(isLoading, loadingText="Saving...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  open() {
    this.renderLoading(false);
    super.open();
  }

  _getInputValues() {
    const inputValues = {};
    for (const input of this._inputList) {
      inputValues[input.name] = input.value;
    }
    return inputValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    })
  }


  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._handleFormSubmit(this._getInputValues())
        .finally(() => {
          this.close();
          this.renderLoading(false);
        })
    });
  }
}
