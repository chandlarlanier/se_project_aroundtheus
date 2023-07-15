import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {initialCards, selectors, renderCard, validationSettings, profileEditForm, addCardForm, userNameElement, userJobElement, nameInput, aboutInput} from "../utils/constants.js";


// Create card and card image popup instances
export const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
export const cardSection = new Section({ renderer: renderCard }, selectors.cardList);


// Create form and user info instances
const userInfo = new UserInfo({nameSelector: selectors.nameElement, aboutMeSelector: selectors.descriptionElement});

const editProfilePopup = new PopupWithForm(selectors.editProfilePopup, () => {
  userInfo.setUserInfo({name: nameInput.value, about: aboutInput.value});
});

const addCardPopup = new PopupWithForm(selectors.addCardPopup, () => {
  const cardTitleInput = document.querySelector(".popup__input_type_title");
  const cardUrlInput = document.querySelector(".popup__input_type_url");
  renderCard({name: cardTitleInput.value, link: cardUrlInput.value});
});


// Form validation
const editFormValidator = new FormValidator(validationSettings, profileEditForm);
const cardFormValidator = new FormValidator(validationSettings, addCardForm);


// Initialize all class instances
cardSection.renderItems(initialCards);
cardPreviewPopup.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
editFormValidator.enableValidation();
cardFormValidator.enableValidation();


// Add event listeners to buttons
const profileEditButton = document.querySelector(".profile__edit-button");
profileEditButton.addEventListener("mousedown", () => {
  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  aboutInput.value = info.about;
  profileEditForm.querySelector(".popup__button").classList.add("popup__button_disabled");
  profileEditForm.querySelector(".popup__button").disabled = true;
  editProfilePopup.open();
});

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("mousedown", () => {
  addCardPopup.open();
});
