const initialCards = [
{
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
},
{
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
},
{
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"
},
{
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"
},
{
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"
},
{
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"
}
];


// Elements
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_type_edit-profile");
const profileEditCloseButton = profileEditPopup.querySelector(".popup__close-button");
const profileEditForm = document.forms["popup__form_type_edit-profile"];
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = profileEditPopup.querySelector(".popup__input_type_name");
const profileDescriptionInput = profileEditPopup.querySelector(".popup__input_type_description");

const addCardButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector(".popup_type_add-card");
const addCardCloseButton = addCardPopup.querySelector(".popup__close-button");
const addCardForm = document.forms["popup__form_type_add-card"];
const cardTitleInput = addCardPopup.querySelector(".popup__input_type_title");
const cardImageInput = addCardPopup.querySelector(".popup__input_type_url");

const previewImagePopup = document.querySelector(".popup_type_preview-image");
const previewImageCloseButton = previewImagePopup.querySelector(".popup__close-button");
const previewImage = previewImagePopup.querySelector(".popup__image");
const previewImageHeading = previewImagePopup.querySelector(".popup__heading");

const closeButtons = document.querySelectorAll(".popup__close-button");

const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");

// Functions
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__description");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    previewImage.setAttribute("src", cardData.link);
    previewImage.setAttribute("alt", cardData.name);
    previewImageHeading.textContent = cardTitle.textContent;
    openPopup(previewImagePopup);
  });

  cardImage.setAttribute("src", cardData.link);
  cardImage.setAttribute("alt", cardData.name);
  cardTitle.textContent = cardData.name;
  return cardElement;
}

function clickOutPopup(e) {
  if (e.target.classList.contains("popup")) {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditPopup);
}

function handleAddCardSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardImageInput.value;
  renderCard({name, link}, cardList);
  closePopup(addCardPopup);
  cardTitleInput.value = "";
  cardImageInput.value = "";
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  popupInputs = popup.querySelectorAll(".popup__input");
  popupInputs.forEach((input) => {
    input.classList.remove("popup__input_type_error");
  });
  popupErrors = popup.querySelectorAll(".popup__error");
  popupErrors.forEach((error) => {
    error.classList.remove("popup__error_visible");
  });
  if (popup.classList.contains("popup_type_add-card")) {
    cardTitleInput.value = "";
    cardImageInput.value = "";
  }
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

// Form Listeners
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardForm.addEventListener("submit", handleAddCardSubmit);

// Other Event Listeners
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditPopup);
});
addCardButton.addEventListener("click", () => openPopup(addCardPopup));

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
});

profileEditPopup.addEventListener("click", clickOutPopup);
addCardPopup.addEventListener("click", clickOutPopup);
previewImagePopup.addEventListener("click", clickOutPopup);



// Add Initial Cards
initialCards.forEach((cardData) => renderCard(cardData, cardList));
