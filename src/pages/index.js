import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { selectors, validationSettings, profileEditForm, addCardForm, editAvatarForm, nameInput, aboutInput } from "../utils/constants.js";

const api = new Api({baseUrl: "https://around-api.en.tripleten-services.com/v1", authToken: "70864e59-72d8-4dfd-aa6b-d8a11da17a1d"});

api.getUserInfo()
  .then(res => {
    document.querySelector(".profile__title").textContent = res.name;
    document.querySelector(".profile__description").textContent = res.about;
    document.querySelector(".profile__image").src = res.avatar;
  });

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

const editAvatarPopup = new PopupWithForm(selectors.editAvatarPopup, (data) => {
  UserInfo.setUserInfo(data);

  //above needs to be changed
});


// Form validation
const editFormValidator = new FormValidator(validationSettings, profileEditForm);
const cardFormValidator = new FormValidator(validationSettings, addCardForm);
const avatarFormValidator = new FormValidator(validationSettings, editAvatarForm);


// Initialize all class instances
// cardSection.renderItems(initialCards);
cardPreviewPopup.setEventListeners();
editProfilePopup.setEventListeners();
editAvatarPopup.setEventListeners();
addCardPopup.setEventListeners();
editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();


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

const editAvatarImage = document.querySelector(".profile__edit-image");
editAvatarImage.addEventListener("mousedown", () => {
  avatarFormValidator.disableButton();
  editAvatarPopup.open();
})
