import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { openPopupWindow, closePopupWindow, isEscEvent, handleEscUp } from "../utils/utils.js";


const ESC_KEYCODE = 27;

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
  },
  {
    name: "Grand Canyon",
    link: "https://images.unsplash.com/photo-1456425712190-0dd8c2b00156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Space Needle",
    link: "https://images.unsplash.com/photo-1542223616-9de9adb5e3e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"
  },
  {
    name: "Arches National Park",
    link: "https://images.unsplash.com/photo-1615046727544-8fd9ac9836cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Golden Gate Bridge",
    link: "https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  }
];


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

const editFormSubmitHandler = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopupWindow();
};

const cardFormSubmitHandler = (evt) => {
  evt.preventDefault();
  renderCard(
    {name: cardTitleInput.value,
    link: cardImageInput.value},
    cardList);
  closePopupWindow();
  addCardForm.reset();
  addCardForm.querySelector(".popup__button").classList.add(validationSettings.inactiveButtonClass);
  addCardForm.querySelector(".popup__button").disabled = true;
};


// Event Listeners
profileEditPopup.addEventListener("submit", editFormSubmitHandler);
addCardPopup.addEventListener("submit", cardFormSubmitHandler);

openEditFormButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopupWindow(profileEditPopup);
});

openCardFormButton.addEventListener("click", () => {
  openPopupWindow(addCardPopup);
});

profileEditPopup.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close-button")) {
    closePopupWindow(profileEditPopup);
  }
});

addCardPopup.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close-button")) {
    closePopupWindow();
  }
});

previewImagePopup.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close-button")) {
    closePopupWindow();
  }
});


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
