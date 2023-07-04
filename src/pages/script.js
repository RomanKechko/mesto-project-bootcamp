import {
  profileEditButton,
  popupProfile,
  popupFormProfile,
  popupName,
  popupDesription,
  profileName,
  profileDesription,
  profileAddButton,
  popupCard,
  popupFormСard,
  closeButtons,
} from "../components/const.js";
/* ЗАкрыть все модалки */

import {
  addCard,
  editProdile,
  openPopup,
  closePopup,
} from "../components/card.js";

import { popup } from "../components/modal.js";
import { enableValidation } from "../components/validate";

/* Кнопка "закрыть модалку" для всех крестиков */
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});
/* Кнопка "закрыть модалку" для всех */

/* Открыть модальное окно карточек*/
profileAddButton.addEventListener("click", () => openPopup(popupCard));
/* Открыть модальное окно карточек*/

/* Начало модального окна профиля */
/* Открываем модалку */
profileEditButton.addEventListener("click", () => {
  openPopup(popupProfile);
  popupName.value = profileName.textContent;
  popupDesription.value = profileDesription.textContent;
});
/* Открываем модалку */

/* Форма профиля */
popupFormProfile.addEventListener("submit", editProdile);

/* Форма карточки */
popupFormСard.addEventListener("submit", addCard);

/* Валидация */
enableValidation({
  formSelector: ".popup__form-profile",
  inputSelector: ".popup__filler",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_inactive",
  inputErrorClass: "popup__filler_type_error",
  errorClass: "popup__input-error_active",
});

enableValidation({
  formSelector: ".popup__form-card",
  inputSelector: ".popup__filler",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_inactive",
  inputErrorClass: "popup__filler_type_error",
  errorClass: "popup__input-error_active",
});
