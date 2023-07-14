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
  popups,
  elements,
  popupLinkCard,
  popupNameCard,
  saveButtons,
  buttonCard,
  buttonAvatar,
  profileAvatarReplacementHidden,
  popupAvatar,
  popupFormAvatar,
  popupLinkAvatar,
  profileUrl,
} from "../components/const.js";
import { enableValidation } from "../components/validate";
import { createCard, addCard } from "../components/card.js";
import { openPopup, closePopup } from "../components/modal.js";
import {
  getInitialCards,
  sendInitialedCards,
  sendProfileData,
  getProfileData,
  addAvatarToServer,
} from "../components/api.js";
import { disableButton, enableButton } from "../components/utils";

/* Добавление карточек и профиля с сервера */
Promise.all([getInitialCards(), getProfileData()])
  .then(([cards, profile]) => {
    cards.forEach((card) => {
      const cardElement = createCard(card, profile._id);
      elements.append(cardElement);
    });
    profileName.textContent = profile.name;
    profileDesription.textContent = profile.about;
    profileUrl.setAttribute("src", profile.avatar);

    /* Форма добавления карточек */
    popupFormСard.addEventListener("submit", function (evt) {
      evt.preventDefault();
      saveButtons.saveCardButton.textContent = "Сохранение...";
      disableButton(buttonCard); /* откл. кнопки сохр. */
      sendInitialedCards(popupNameCard.value, popupLinkCard.value)
        .then((data) => {
          addCard(data, profile._id);

          evt.target.reset();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          saveButtons.saveCardButton.textContent = "Сохранить";
          enableButton(buttonCard);
        });
    });
    /* Форма добавления карточек */
  })
  .catch((err) => {
    console.log(err);
  });
/* Форма изменения профиля */
popupFormProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  saveButtons.saveProfileButton.textContent = "Сохранение...";
  sendProfileData(popupName.value, popupDesription.value)
    .then((data) => {
      editProfile(data); /* Функция заполнения данных на странице */
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      saveButtons.saveProfileButton.textContent = "Сохранить";
    });
});
/* Форма изменения профиля */

/* Функция замены данных с сервера */
function editProfile(data) {
  profileName.textContent = data.name;
  profileDesription.textContent = data.about;
  closePopup(popupProfile);
}
/* Функция замены данных с сервера */

/* Форма изменения аватара */
popupFormAvatar.addEventListener("submit", function (evt) {
  evt.preventDefault();
  saveButtons.saveAvatarButton.textContent = "Сохранение...";
  disableButton(buttonAvatar); /* откл. кнопки сохр. */
  addAvatarToServer(popupLinkAvatar.value)
    .then((data) => {
      changeAvatar(data);
      evt.target.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      saveButtons.saveAvatarButton.textContent = "Сохранить";
      enableButton(buttonAvatar);
    });
});
/* Форма изменения аватара */

/* Функция замены аватара с сервера */
function changeAvatar(data) {
  profileUrl.setAttribute("src", data.avatar);
  closePopup(popupAvatar);
}
/* Функция замены аватара с сервера */

/* Кнопка "закрыть модалку" для всех крестиков */
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});
/* Кнопка "закрыть модалку" для всех крестиков*/

/* Нажать вне модалки, чтобы закрыть ее*/
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});
/* Нажать вне модалки, чтобы закрыть ее*/

/* Открыть модальное окно карточек*/
profileAddButton.addEventListener("click", () => {
  openPopup(popupCard);
  disableButton(buttonCard); /* откл. кнопки сохр. */
});
/* Открыть модальное окно карточек*/

/* Открываем модалку профиля*/
profileEditButton.addEventListener("click", () => {
  openPopup(popupProfile);
  popupName.value = profileName.textContent;
  popupDesription.value = profileDesription.textContent;
});
/* Открываем модалку профиля*/

/* Открываем модалку аватарки*/
profileAvatarReplacementHidden.addEventListener("click", () => {
  openPopup(popupAvatar);
  disableButton(buttonAvatar); /* откл. кнопки сохр. */
});
/* Открываем модалку аватарки*/

/* Запуск валидации */
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__filler",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_inactive",
  inputErrorClass: "popup__filler_type_error",
  errorClass: "popup__input-error_active",
});
/* Запуск валидации */
