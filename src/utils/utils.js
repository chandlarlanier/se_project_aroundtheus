export const ESC_KEYCODE = 27;

export const openPopupWindow = (popupWindow) => {
  popupWindow.classList.add("popup_opened");
  document.addEventListener("keyup", handleEscUp);
};

export const closePopupWindow = () => {
  const activePopup = document.querySelector(".popup_opened");
  if (activePopup) {
    activePopup.classList.remove("popup_opened");
    document.removeEventListener("keyup", handleEscUp);
  }
};

export const handleEscUp = (evt) => {
  if (evt.which === ESC_KEYCODE) {
    closePopupWindow();
  }
};

export const closePopupOnRemoteClick = (evt) => {
  if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-button")) {
    closePopupWindow();
  }
};
