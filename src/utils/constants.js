import FormValidator from "../components/FormValidator";

export const ESC_KEYCODE = 27;

export const userNameElement = document.querySelector(".profile__title");
export const userJobElement = document.querySelector(".profile__description");
export const nameInput = document.querySelector(".popup__input_type_name");
export const aboutInput = document.querySelector(".popup__input_type_description");

// Selectors
export const selectors = {
  cardList: ".cards__list",
  cardTemplate: ".card-template",
  previewPopup: ".popup_type_preview-image",
  editProfilePopup: ".popup_type_edit-profile",
  editAvatarPopup: ".popup_type_edit-avatar",
  addCardPopup: ".popup_type_add-card",
  deleteCardPopup: ".popup_type_delete-card",
  nameElement: ".profile__title",
  descriptionElement: ".profile__description",
  avatarElement: ".profile__image"
}

// Validation Settings
export const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};


// Forms
export const profileEditForm = document.forms["popup__form_type_edit-profile"];
export const addCardForm = document.forms["popup__form_type_add-card"];
export const editAvatarForm = document.forms["popup__form_type_edit-avatar"];
