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
const profileEditModal = document.querySelector(".modal_type_edit-profile");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close-button");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = profileEditModal.querySelector(".modal__input_type_name");
const profileDescriptionInput = profileEditModal.querySelector(".modal__input_type_description");

const addCardButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector(".modal_type_add-card");
const addCardCloseButton = addCardModal.querySelector(".modal__close-button");
const addCardForm = addCardModal.querySelector(".modal__form");
const addCardTitleInput = addCardModal.querySelector(".modal__input_type_title");
const addCardImageInput = addCardModal.querySelector(".modal__input_type_url");

const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");



// Functions
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__description");
  cardImageEl.setAttribute("src", cardData.link);
  cardImageEl.setAttribute("alt", cardData.name);
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.prepend(cardElement);
});


// Event Handlers
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  profileEditModal.classList.remove("modal_opened");
}


// function handleAddCardSubmit(e) {
//   e.preventDefault();
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImageEl = cardElement.querySelector(".card__image");
//   const cardTitleEl = cardElement.querySelector(".card__description");
//   cardImageEl.setAttribute("src", addCardImageInput.value);
//   cardImageEl.setAttribute("alt", addCardTitleInput.value);
//   cardTitleEl.textContent = addCardImageInput.value;
//   cardListEl.appendChild(cardElement);
// }

// Event Listeners
profileEditButton.addEventListener("click", function () {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});
profileEditCloseButton.addEventListener("click", function () {
  profileEditModal.classList.remove("modal_opened");
});
profileEditForm.addEventListener("submit", handleProfileEditSubmit);



addCardButton.addEventListener("click", function () {
  addCardModal.classList.add("modal_opened");
});
addCardCloseButton.addEventListener("click", function () {
  addCardModal.classList.remove("modal_opened");
});
