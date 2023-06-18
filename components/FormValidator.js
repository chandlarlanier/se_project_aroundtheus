class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
  }

  // toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  //   if (hasInvalidInput(inputList)) {
  //     disableButton(buttonElement, inactiveButtonClass);
  //   } else {
  //     enableButton(buttonElement, inactiveButtonClass);
  //   }
  // }

  showInputError(formElement, inputElement, errorMessage, {errorClass, inputErrorClass}) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }

  hideInputError(formElement, inputElement, {errorClass, inputErrorClass}) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  }

  hasInvalidInput() {

  }

  _setEventListeners() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(this._form, inputElement, rest);
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, rest);
  }
}

const editFormValidator = new FormValidator();
editFormValidator.enableValidation();
