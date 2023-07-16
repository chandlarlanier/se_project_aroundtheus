import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {initialCards, selectors, validationSettings, profileEditForm, addCardForm, nameInput, aboutInput} from "../utils/constants.js";

// Card renderer function
const renderCard = (data) => {
  const cardElement = new Card(
    {
      data,
      handleImageClick: (imgData) => {
        cardPreviewPopup.open(imgData);
      }
    },
    selectors.cardTemplate
  );
  cardSection.addItem(cardElement.generateCard());
}


// Create card and card image popup instances
export const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
export const cardSection = new Section({ renderer: renderCard }, selectors.cardList);


// Create form and user info instances
const userInfo = new UserInfo({nameSelector: selectors.nameElement, aboutMeSelector: selectors.descriptionElement});

const editProfilePopup = new PopupWithForm(selectors.editProfilePopup, (data) => {
  userInfo.setUserInfo(data);
});

const addCardPopup = new PopupWithForm(selectors.addCardPopup, (data) => {
  renderCard(data);
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
  editFormValidator.disableButton();
  editProfilePopup.open();
});

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("mousedown", () => {
  cardFormValidator.disableButton();
  addCardPopup.open();
});
