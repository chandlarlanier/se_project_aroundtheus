export const ESC_KEYCODE = 27;

// export const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
//   },
//   {
//     name: "Grand Canyon",
//     link: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
//   },
//   {
//     name: "Space Needle",
//     link: "https://images.unsplash.com/photo-1594664233467-708a77a3299f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BhY2UlMjBuZWVkbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"
//   },
//   {
//     name: "Arches National Park",
//     link: "https://images.unsplash.com/photo-1615046727544-8fd9ac9836cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//   },
//   {
//     name: "Golden Gate Bridge",
//     link: "https://images.unsplash.com/photo-1613048998814-4af1bd82fb01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvbGRlbiUyMGdhdGUlMjBicmlkZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
//   }
// ];

export const initialCardList2 = [
  {
        "createdAt": "2023-07-05T08:10:57.741Z",
    "isLiked": false,
        "link": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
        "name": "Yosemite Valley",
        "owner": {
            "about": "Sailor, researcher",
            "avatar": "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg",
          "name": "Jacques Cousteau",
          "_id": "e20537ed11237f86bbb20ccb"
        },
    "_id": "5d1f0611d321eb4bdcd707dd"
  },
    {
        "createdAt": "2023-07-05T08:11:58.324Z",
    "isLiked": false,
        "link": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
        "name": "Lake Louise",
        "owner": {
            "about": "Sailor, researcher",
            "avatar": "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg",
          "name": "Jacques Cousteau",
          "_id": "e20537ed11237f86bbb20ccb"
        },
    "_id": "5d1f064ed321eb4bdcd707de"
  }
];

export const userNameElement = document.querySelector(".profile__title");
export const userJobElement = document.querySelector(".profile__description");
export const nameInput = document.querySelector(".popup__input_type_name");
export const aboutInput = document.querySelector(".popup__input_type_description");

// Selectors
export const selectors = {
  cardList: ".cards__list",
  cardTemplate: ".card-template",
  previewPopup: ".popup_type_preview-image",
  editProfilePopup: ".popup_type_edit-profile",
  addCardPopup: ".popup_type_add-card",
  nameElement: ".profile__title",
  descriptionElement: ".profile__description"
}

// Validation Settings
export const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Forms
export const profileEditForm = document.forms["popup__form_type_edit-profile"];
export const addCardForm = document.forms["popup__form_type_add-card"];
