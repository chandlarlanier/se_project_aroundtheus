import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";

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
const previewImage = previewImagePopup.querySelector(".popup__image");
const previewImageCaption = previewImagePopup.querySelector(".popup__heading_type_preview-image");

const getCardElement = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.style.backgroundImage = `url(${data.link})`;
  cardElement.querySelector(".card__description").textContent = data.name;

  likeButton.addEventListener("click", handleLikeIcon);
  deleteButton.addEventListener("click", handleDeleteCard);
  cardImage.addEventListener("click", () => handlePreviewImage(data));
  return cardElement;
};

const isEscEvent = (evt, action) => {
  const activePopup = document.querySelector(".popup_opened");
  if (evt.which === ESC_KEYCODE) {
    action(activePopup);
  }
};

const openPopupWindow = (popupWindow) => {
  popupWindow.classList.add("popup_opened");
  document.addEventListener("keyup", handleEscUp);
};

const closePopupWindow = (popupWindow) => {
  popupWindow.classList.remove("popup_opened");
  document.removeEventListener("keyup", handleEscUp);
};

const renderCard = (data, wrap) => {
  const card = new Card(data, "#card-template").generateCard();
  wrap.prepend(getCardElement(data));
};


// Handlers
const handleLikeIcon = (evt) => {
  evt.target.classList.toggle("card__like-button_active");
};

const handleDeleteCard = (evt) => {
  evt.target.closest(".card").remove();
};

const handlePreviewImage = (data) => {
  previewImage.src = data.link;
  previewImage.alt = data.name;
  previewImageCaption.textContent = data.name;
  openPopupWindow(previewImagePopup);
};

const handleEscUp = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closePopupWindow);
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopupWindow(profileEditPopup);
};

const cardFormSubmitHandler = (evt) => {
  evt.preventDefault();
  renderCard({
    name: cardTitleInput.value,
    link: cardImageInput.value
  },
  cardList);
  closePopupWindow(addCardPopup);
};


// Event Listeners
profileEditPopup.addEventListener("submit", formSubmitHandler);
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
    closePopupWindow(addCardPopup);
  }
});

previewImagePopup.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close-button")) {
    closePopupWindow(previewImagePopup);
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








    // likeButton.addEventListener("click", () => {
    //   likeButton.classList.toggle("card__like-button_active");
    // });
    // deleteButton.addEventListener("click", () => {
    //   cardElement.remove();
    // });

    // cardImage.addEventListener("click", () => {
    //   previewImage.setAttribute("src", cardData.link);
    //   previewImage.setAttribute("alt", cardData.name);
    //   previewImageHeading.textContent = cardTitle.textContent;
    //   openPopup(previewImagePopup);
    // });

    // cardImage.setAttribute("src", cardData.link);
    // cardImage.setAttribute("alt", cardData.name);
    // cardTitle.textContent = cardData.name;
    // return cardElement;





// // Elements

// const profileEditCloseButton = profileEditPopup.querySelector(".popup__close-button");

// const addCardCloseButton = addCardPopup.querySelector(".popup__close-button");
// const addCardSubmitButton = addCardPopup.querySelector(".popup__button");

// const previewImageCloseButton = previewImagePopup.querySelector(".popup__close-button");

// const popups = document.querySelectorAll(".popup");

// const closeButtons = document.querySelectorAll(".popup__close-button");



// // Functions
//

// function closeByEscape(e) {
//   if (e.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_opened");
//     closePopup(openedPopup);
//   }
// }

// function handleProfileEditSubmit(e) {
//   e.preventDefault();
//   profileName.textContent = profileNameInput.value;
//   profileDescription.textContent = profileDescriptionInput.value;
//   closePopup(profileEditPopup);
// }

// function handleAddCardSubmit(e) {
//   e.preventDefault();
//   const name = cardTitleInput.value;
//   const link = cardImageInput.value;
//   renderCard({name, link}, cardList);
//   closePopup(addCardPopup);
//   e.target.reset();
// }

// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closeByEscape);
// }

// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closeByEscape);
// }

// function renderCard(cardData, wrapper) {
//   const cardElement = getCardElement(cardData);
//   wrapper.prepend(cardElement);
// }
