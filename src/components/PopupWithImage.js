import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor() {

  }

  open({ link, name }) {
    this._popupElement.querySelector(".popup__heading_type_preview-image").textContent = name;
    const image = this._popupElement.querySelector(".popup__image");
    image.src = link;
    image.alt = `Photo of ${name}`;
    super.open()
  }
}
