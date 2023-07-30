import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleConfirm }) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
    this._confirmButton = this._popupElement.querySelector(".popup__button");
  }

  close() {
    super.close();
    this._confirmButton.removeEventListener("mousedown", this._handleConfirmClick);
  }

  open(card, cardId, handleDelete) {
    this._card = card;
    this._cardId = cardId;
    this._handleDelete = handleDelete;
    super.open();
    this._confirmButton.addEventListener("mousedown", () => {
      this._handleConfirm(this._cardId);
      this._handleDelete(this._card);
      this.close();
    });
  }
}
