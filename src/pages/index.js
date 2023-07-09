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
import {initialCards, selectors} from "../utils/constants.js";
import Section from "../components/Section.js";


// Create instances of classes
const cardSection = new Section({
  renderer: (item) => {
    const cardElement = new Card(item, selectors.cardTemplate);
    cardSection.addItem(cardElement.generateCard());
  },
  selector: selectors.cardList,
});


// Initialize all class instances
cardSection.renderItems(initialCards);
