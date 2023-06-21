class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._formElement = formElement;
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector
      (`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector
      (`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      hideInputError(inputElement);
    }
  }

  _toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      disableButton(buttonElement, this._inactiveButtonClass);
    } else {
      enableButton(buttonElement, this._inactiveButtonClass);
    }
  }

  _disableButton(buttonElement) {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.disabled = true;
  }

  _enableButton(buttonElement) {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.disabled = false;
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // _setEventListeners() {
  //   this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  //   this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

  //   inputList.forEach((inputElement) => {
  //     inputElement.addEventListener("input", () => {
  //       checkInputValidity(this._formElement, inputElement, rest);
  //       toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  //     });
  //   });
  // }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    // this._setEventListeners();
  }
}

export default FormValidator;
