export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
  },
  {
    name: "Grand Canyon",
    link: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
  },
  {
    name: "Space Needle",
    link: "https://images.unsplash.com/photo-1594664233467-708a77a3299f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BhY2UlMjBuZWVkbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
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
    link: "https://images.unsplash.com/photo-1613048998814-4af1bd82fb01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvbGRlbiUyMGdhdGUlMjBicmlkZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  }
];

// Card Template
export const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");


// Wrappers
export const cardList = document.querySelector(".cards__list");
export const profileEditPopup = document.querySelector(".popup_type_edit-profile");
export const addCardPopup = document.querySelector(".popup_type_add-card");
export const previewImagePopup = document.querySelector(".popup_type_preview-image");


// Buttons and Other Home Components
export const openEditFormButton = document.querySelector(".profile__edit-button");
export const openCardFormButton = document.querySelector(".profile__add-button");


// DOM Profile Nodes
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");


// Form Data and Form Elements
export const profileTitleInput = profileEditPopup.querySelector(".popup__input_type_name");
export const profileDescriptionInput = profileEditPopup.querySelector(".popup__input_type_description");
export const cardTitleInput = addCardPopup.querySelector(".popup__input_type_title");
export const cardImageInput = addCardPopup.querySelector(".popup__input_type_url");

