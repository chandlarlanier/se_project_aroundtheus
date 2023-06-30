import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { openPopupWindow, closePopupWindow, closePopupOnRemoteClick } from "../../utils/utils.js";
import initialCards from "../../utils/constants.js";


// Card Template
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");


// Wrappers
const cardList = document.querySelector(".cards__list");
const profileEditPopup = document.querySelector(".popup_type_edit-profile");
const addCardPopup = document.querySelector(".popup_type_add-card");
const previewImagePopup = document.querySelector(".popup_type_preview-image");


// Buttons and Other Home Components
const openEditFormButton = document.querySelector(".profile__edit-button");
const openCardFormButton = document.querySelector(".profile__add-button");


// DOM Profile Nodes
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");


// Form Data and Form Elements
const profileTitleInput = profileEditPopup.querySelector(".popup__input_type_name");
const profileDescriptionInput = profileEditPopup.querySelector(".popup__input_type_description");
const cardTitleInput = addCardPopup.querySelector(".popup__input_type_title");
const cardImageInput = addCardPopup.querySelector(".popup__input_type_url");

const renderCard = (data, wrap) => {
  const card = new Card(data, "#card-template").generateCard();
  wrap.prepend(card);
};

const handleEditFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopupWindow();
};

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  renderCard(
    {name: cardTitleInput.value,
    link: cardImageInput.value},
    cardList);
  closePopupWindow();
  addCardForm.reset();
  addFormValidator.toggleButtonState();
};


// Event Listeners
profileEditPopup.addEventListener("submit", handleEditFormSubmit);
addCardPopup.addEventListener("submit", handleCardFormSubmit);

openEditFormButton.addEventListener("mousedown", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopupWindow(profileEditPopup);
});

openCardFormButton.addEventListener("mousedown", () => {
  openPopupWindow(addCardPopup);
});

profileEditPopup.addEventListener("mousedown", closePopupOnRemoteClick);

addCardPopup.addEventListener("mousedown", closePopupOnRemoteClick);

previewImagePopup.addEventListener("mousedown", closePopupOnRemoteClick);


// Add Initial Cards
initialCards.forEach((data) => {
  renderCard(data, cardList);
});


// Validation
const profileEditForm = document.forms["popup__form_type_edit-profile"];
const addCardForm = document.forms["popup__form_type_add-card"];

const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const editFormValidator = new FormValidator(validationSettings, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationSettings, addCardForm);
addFormValidator.enableValidation();
