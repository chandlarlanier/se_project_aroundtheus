import Popup from "./Popup.js";
import { api, catchError } from "../pages/index.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._confirmButton = this._popupElement.querySelector(".popup__button");
  }

  setSubmitAction(submitAction) {
    this._submitAction = submitAction;
  }

  open(card, cardId) {
    super.open();
    this._card = card;
    this._cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();

    this.setSubmitAction(() => {
      api.deleteCard(this._cardId)
        .then(() => {
          this._card.removeCard();
          this.close();
        })
        .catch(catchError)
    });

    this._confirmButton.addEventListener("click", this._submitAction);
  }
}
