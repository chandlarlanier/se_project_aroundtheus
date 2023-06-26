const ESC_KEYCODE = 27;

const openPopupWindow = (popupWindow) => {
  popupWindow.classList.add("popup_opened");
  document.addEventListener("keyup", handleEscUp);
};

const closePopupWindow = () => {
  const activePopup = document.querySelector(".popup_opened");
  activePopup.classList.remove("popup_opened");
  document.removeEventListener("keyup", handleEscUp);
};

const handleEscUp = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closePopupWindow);
};

const isEscEvent = (evt, action) => {
  const activePopup = document
    .querySelector(".popup_opened");
  if (evt.which === ESC_KEYCODE) {
    action(activePopup);
  }
};

const closePopupOnRemoteClick = (evt) => {
  if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-button")) {
    closePopupWindow();
  }
};

export {ESC_KEYCODE, openPopupWindow, closePopupWindow, handleEscUp, isEscEvent, closePopupOnRemoteClick};
