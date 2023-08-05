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

// Initialize api
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "9ef0145a-4550-4d8d-9dc2-252c6d573e29",
    "content-type": "application/json"
  }
});


// create delete card popup
const deleteCardPopup = new PopupWithConfirmation({
  popupSelector: selectors.deleteCardPopup,
  handleConfirm: (cardId) => {
    api.deleteCard(cardId);
  }
});

// Card renderer function
const renderCard = (data) => {
  const cardElement = new Card(
    {
      data: data,
      handleImageClick: (imgData) => {
        cardPreviewPopup.open(imgData);
      },
      handleDelete: (card) => {
        deleteCardPopup.open(card);
        deleteCardPopup.setSubmitAction((card) => {
          api.deleteCard(card.getId());
          card.removeCard();
        });
      },
      confirmPopup: deleteCardPopup,
      api: api
    },
    selectors.cardTemplate
  );
  cardSection.addItem(cardElement.generateCard());
}



// Get initial user information and cards
api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo(res);
  })
  .catch((err) => {
    console.error(err);
  });

api.getInitialCards()
  .then(res => {
    res.reverse().forEach((card) => {
      renderCard(card);
    });
  })
  .catch((err) => {
    console.error(err);
  });



// Create card and card image popup instances
export const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
export const cardSection = new Section({ renderer: renderCard }, selectors.cardList);



// Create form and user info instances
const userInfo = new UserInfo({nameSelector: selectors.nameElement, aboutMeSelector: selectors.descriptionElement, avatarSelector: selectors.avatarElement});

const editProfilePopup = new PopupWithForm(selectors.editProfilePopup, (data) => {
  userInfo.setUserInfo(data);
  return api.updateProfileInfo()
    .catch((err) => {
      console.error(err);
    });
});

const addCardPopup = new PopupWithForm(selectors.addCardPopup, (data) => {
  return api.addCard(data)
    .then((res) => {
      renderCard(res);
    })
    .catch((err) => {
      console.error(err);
    });
});

const editAvatarPopup = new PopupWithForm(selectors.editAvatarPopup, (data) => {
  return api.updateAvatar(data)
    .then((res) => {
      document.querySelector(".profile__image").src = res.avatar;
    })
    .catch((err) => {
      console.error(err);
    })
});




// Form validation
const editFormValidator = new FormValidator(validationSettings, profileEditForm);
const cardFormValidator = new FormValidator(validationSettings, addCardForm);
const avatarFormValidator = new FormValidator(validationSettings, editAvatarForm);



// Initialize popups
cardPreviewPopup.setEventListeners();
editProfilePopup.setEventListeners();
editAvatarPopup.setEventListeners();
addCardPopup.setEventListeners();
deleteCardPopup.setEventListeners();



// Initialize form validators
editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();



// Add event listeners to buttons and profile image
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
