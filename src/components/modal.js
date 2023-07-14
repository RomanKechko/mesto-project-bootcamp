/* Функции открыть/закрыть модалку */
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}
/* Функции открыть/закрыть модалку */

/* Закрыть на "Esc" */
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup !== null) {
      closePopup(openedPopup);
    }
  }
}
/* Закрыть на "Esc" */

export { openPopup, closePopup };
