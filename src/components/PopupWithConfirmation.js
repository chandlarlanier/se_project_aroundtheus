import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    // this._handleConfirm = handleConfirm;
    this._confirmButton = this._popupElement.querySelector(".popup__button");
  }

  setSubmitAction(submitAction) {
    this._confirmButton.addEventListener("mousedown", () => {
      return submitAction(this._card);
    });
  }

  open(card) {
    super.open();
    this._card = card;
  }

}
