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
import {
  createCard,
  editProfile,
  addCard,
  avatarСhange,
} from "../components/card.js";
import { openPopup, closePopup, buttonDisabled } from "../components/modal.js";
import {
  getInitialCards,
  sendInitialedCards,
  sendProfileData,
  serverProfileData,
  addAvatarToServer,
} from "../components/api.js";

/* Добавление карточек и профиля с сервера */
Promise.all([getInitialCards(), serverProfileData()]).then(
  ([cards, profile]) => {
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

      sendInitialedCards(popupNameCard.value, popupLinkCard.value)
        .then((data) => {
          addCard(data, profile._id);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          saveButtons.saveCardButton.textContent = "Сохранить";
        });
      evt.target.reset();
    });
    /* Форма добавления карточек */
  }
);
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

/* Форма изменения аватара */
popupFormAvatar.addEventListener("submit", function (evt) {
  evt.preventDefault();
  saveButtons.saveAvatarButton.textContent = "Сохранение...";

  addAvatarToServer(popupLinkAvatar.value)
    .then((data) => {
      avatarСhange(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      saveButtons.saveAvatarButton.textContent = "Сохранить";
    });
  evt.target.reset();
});
/* Форма изменения аватара */
/* Кнопка "закрыть модалку" для всех крестиков */
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});
/* Кнопка "закрыть модалку" для всех крестиков*/

/* Нажать вне модалки, чтобы закрыть ее*/
popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
});
/* Нажать вне модалки, чтобы закрыть ее*/

/* Открыть модальное окно карточек*/
profileAddButton.addEventListener("click", () => {
  openPopup(popupCard);
  buttonDisabled(buttonCard); /* откл. кнопки сохр. */
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
  buttonDisabled(buttonAvatar); /* откл. кнопки сохр. */
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
