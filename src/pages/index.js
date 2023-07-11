// import FormValidator from "../components/FormValidator.js";
// import Card from "../components/Card.js";
// import {
//   openPopupWindow,
//   closePopupWindow,
//   closePopupOnRemoteClick,
// } from "../utils/utils.js";
// import {
//   initialCards,
//   cardTemplate,
//   cardList,
//   profileEditPopup,
//   addCardPopup,
//   previewImagePopup,
//   openEditFormButton,
//   openCardFormButton,
//   profileTitle,
//   profileDescription,
//   profileTitleInput,
//   profileDescriptionInput,
//   cardTitleInput,
//   cardImageInput,
// } from "../utils/constants.js";

// const renderCard = (data, wrap) => {
//   const card = new Card(data, "#card-template").generateCard();
//   wrap.prepend(card);
// };


// // Event Handlers
// const handleEditFormSubmit = (evt) => {
//   evt.preventDefault();
//   profileTitle.textContent = profileTitleInput.value;
//   profileDescription.textContent = profileDescriptionInput.value;
//   closePopupWindow();
// };

// const handleCardFormSubmit = (evt) => {
//   evt.preventDefault();
//   renderCard(
//     { name: cardTitleInput.value, link: cardImageInput.value },
//     cardList
//   );
//   closePopupWindow();
//   addCardForm.reset();
//   addFormValidator.toggleButtonState();
// };


// // Event Listeners
// profileEditPopup.addEventListener("submit", handleEditFormSubmit);
// addCardPopup.addEventListener("submit", handleCardFormSubmit);

// openEditFormButton.addEventListener("mousedown", () => {
//   profileTitleInput.value = profileTitle.textContent;
//   profileDescriptionInput.value = profileDescription.textContent;
//   openPopupWindow(profileEditPopup);
// });

// openCardFormButton.addEventListener("mousedown", () => {
//   openPopupWindow(addCardPopup);
// });

// profileEditPopup.addEventListener("mousedown", closePopupOnRemoteClick);

// addCardPopup.addEventListener("mousedown", closePopupOnRemoteClick);

// previewImagePopup.addEventListener("mousedown", closePopupOnRemoteClick);

// // Add Initial Cards
// initialCards.forEach((data) => {
//   renderCard(data, cardList);
// });

// // Validation
// const profileEditForm = document.forms["popup__form_type_edit-profile"];
// const addCardForm = document.forms["popup__form_type_add-card"];

// const validationSettings = {
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// };

// const editFormValidator = new FormValidator(
//   validationSettings,
//   profileEditForm
// );
// editFormValidator.enableValidation();

// const addFormValidator = new FormValidator(validationSettings, addCardForm);
// addFormValidator.enableValidation();


//////////////////////////////
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
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
