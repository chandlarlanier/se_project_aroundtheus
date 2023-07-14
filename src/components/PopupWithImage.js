import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popupElement.querySelector(".popup__image");
    this._imageCaption = this._popupElement.querySelector(
      ".popup__heading_type_preview-image"
    );
  }

  open(data) {
    this._imageCaption.textContent = data.name;
    this._imageElement.src = data.link;
    this._imageElement.alt = `Photo of ${data.name}`;
    super.open();

    console.log(this);
  }
}
