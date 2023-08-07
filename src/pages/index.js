import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { selectors, validationSettings, profileEditForm, addCardForm, editAvatarForm, nameInput, aboutInput } from "../utils/constants.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation";


// Catch error function
export function catchError(err) {
  console.error(err);
}



// Initialize api
export const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "9ef0145a-4550-4d8d-9dc2-252c6d573e29",
    "content-type": "application/json"
  }
});



// create delete card popup
const deleteCardPopup = new PopupWithConfirmation({
  popupSelector: selectors.deleteCardPopup
});



// Card renderer function
const renderCard = (data) => {
  const cardElement = new Card(
    {
      data: data,
      handleImageClick: (imgData) => {
        cardPreviewPopup.open(imgData);
      },
      handleDelete: (card, cardId) => {
        deleteCardPopup.open(card, cardId);
        // deleteCardPopup.setSubmitAction((card) => {
        //   api.deleteCard(card.getId())
        //     .then(() => {
        //       card.removeCard();
        //     })
        //     .catch(catchError)
        //     .finally(() => {
        //       deleteCardPopup.close();
        //     })
        // });
      },
      confirmPopup: deleteCardPopup,
      api: api
    },
    selectors.cardTemplate
  );
  cardSection.addItem(cardElement.generateCard());
}



// Create card and card image popup instances
export const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
export const cardSection = new Section({ renderer: renderCard }, selectors.cardList);



// Get initial user data and cards
 Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    cards.reverse().forEach((card) => {
      renderCard(card);
    })
  })
  .catch(catchError);



// Create user info class
const userInfo = new UserInfo({nameSelector: selectors.nameElement, aboutMeSelector: selectors.descriptionElement, avatarSelector: selectors.avatarElement});



// Create popups with forms
const editProfilePopup = new PopupWithForm(selectors.editProfilePopup, (data) => {
  return api.updateProfileInfo(data)
    .then(() => {
      userInfo.setUserInfo(data);
    })
    .catch(catchError);
});

const addCardPopup = new PopupWithForm(selectors.addCardPopup, (data) => {
  return api.addCard(data)
    .then((res) => {
      renderCard(res);
    })
    .catch(catchError);
});

const editAvatarPopup = new PopupWithForm(selectors.editAvatarPopup, (data) => {
  return api.updateAvatar(data)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch(catchError);
});



// Form validators
const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  })
}

enableValidation(validationSettings);



// Initialize popups
cardPreviewPopup.setEventListeners();
editProfilePopup.setEventListeners();
editAvatarPopup.setEventListeners();
addCardPopup.setEventListeners();
deleteCardPopup.setEventListeners();



// Add event listeners to buttons and profile image
const profileEditButton = document.querySelector(".profile__edit-button");
profileEditButton.addEventListener("mousedown", () => {
  editProfilePopup.setInputValues(userInfo.getUserInfo());
  formValidators[profileEditForm.getAttribute('name')].disableButton();
  editProfilePopup.open();
});

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("mousedown", () => {
  formValidators[addCardForm.getAttribute('name')].disableButton();
  addCardPopup.open();
});

const editAvatarImage = document.querySelector(".profile__edit-image");
editAvatarImage.addEventListener("mousedown", () => {
  formValidators[editAvatarForm.getAttribute('name')].disableButton();
  editAvatarPopup.open();
})
