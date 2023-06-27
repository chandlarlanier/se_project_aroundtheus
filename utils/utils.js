const ESC_KEYCODE = 27;

const openPopupWindow = (popupWindow) => {
  popupWindow.classList.add("popup_opened");
  document.addEventListener("keyup", handleEscUp);
};

const closePopupWindow = () => {
  const activePopup = document.querySelector(".popup_opened");
  if (activePopup) {
    activePopup.classList.remove("popup_opened");
    document.removeEventListener("keyup", handleEscUp);
  }
};

const handleEscUp = (evt) => {
  if (evt.which === ESC_KEYCODE) {
    closePopupWindow();
  }
};

const closePopupOnRemoteClick = (evt) => {
  if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-button")) {
    closePopupWindow();
  }
};

export {ESC_KEYCODE, openPopupWindow, closePopupWindow, handleEscUp, closePopupOnRemoteClick};
