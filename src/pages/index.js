import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {initialCards, selectors, validationSettings, profileEditForm, addCardForm, userNameElement, userJobElement, nameInput, jobInput} from "../utils/constants.js";


// Create card and card image popup instances
const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
const cardSection = new Section(
  {
    renderer: (data) => {
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
    },
  },
  selectors.cardList
);


// Create form and user info instances
const userInfo = new UserInfo(userNameElement.textContent, userJobElement.textContent);
const editProfilePopup = new PopupWithForm(selectors.editProfilePopup, () => {
  userInfo.setUserInfo();
});

const addCardPopup = new PopupWithForm(selectors.addCardPopup, () => {
  const cardTitleInput = document.querySelector(".popup__input_type_title").value;
  const cardUrlInput = document.querySelector(".popup__input_type_url").value;
  const newCardData = {name: cardTitleInput, link: cardUrlInput};
  const newCard = new Card({data: newCardData, handleImageClick: (imgData) => {
    cardPreviewPopup.open(imgData);
  }},
  selectors.cardTemplate);
  cardSection.addItem(newCard.generateCard());
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
  const openUserInputValues = userInfo.getUserInfo();
  nameInput.value = openUserInputValues.name;
  jobInput.value = openUserInputValues.job;
  editProfilePopup.open();
});

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("mousedown", () => {
  addCardPopup.open();
});
