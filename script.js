const page = document.querySelector(".page");
const profileEditButton = page.querySelector(".profile__edit-button");
const popupCloseProfile = page.querySelector(".popup__close-profile");
const popupSaveProfile = page.querySelector(".popup__save-profile");
const content = page.querySelector(".content");
const popupProfile = page.querySelector(".popup-profile");
const popupFormProfile = page.querySelector(".popup__form-profile");
const popupName = page.querySelector(".popup__name");
const popupDesription = page.querySelector(".popup__description");
const profileName = page.querySelector(".profile__name");
const profileDesription = page.querySelector(".profile__description");
/* Конец модального окна профиля */

const profileAddButton = page.querySelector(".profile__add-button");
const popupCard = page.querySelector(".popup-card");
const popupFormСard = page.querySelector(".popup__form-card");
const popupLinkCard = page.querySelector(".popup__link-card");
const popupNameCard = page.querySelector(".popup__name-card");
const popupSaveCard = page.querySelector(".popup__save-card");
const popupCloseCard = page.querySelector(".popup__close-card");
const elementPhoto = page.querySelector(".element__photo");
const elementName = page.querySelector(".element__name");
const elementTemplate = page.querySelector(".element-template");
const elements = page.querySelector(".elements");
console.log(elements);
/* Конец модального окна новой карточки */

const popupPhoto = page.querySelector(".popup__photo");
const popupNamePhoto = page.querySelector(".popup__name-photo");
const popupMapEnlargement = page.querySelector(".popup-map-enlargement");
const popupCloseСontainerPhoto = page.querySelector(
  ".popup__close-container-photo"
);
/* Конец модального окна "Увеличение карточки" */

/* Функции открыть/закрыть модалку */
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
/* Функции открыть/закрыть модалку */

/* Закрыть увеличенную карточку */
popupCloseСontainerPhoto.addEventListener("click", () =>
  closePopup(popupMapEnlargement)
);
/* Закрыть увеличенную карточку */

/* Сохранить/закрыть модальное окно профиля*/
popupCloseProfile.addEventListener("click", () => closePopup(popupProfile));
/* Сохранить/закрыть модальное окно профиля*/

/* Сохранить/закрыть модальное окно карточек*/
profileAddButton.addEventListener("click", () => openPopup(popupCard));
popupCloseCard.addEventListener("click", () => closePopup(popupCard));
/* Сохранить/закрыть модальное окно карточек*/

/* Начало модального окна профиля */

/* Открываем модалку */
profileEditButton.addEventListener("click", () => {
  openPopup(popupProfile);
  popupName.value = profileName.textContent;
  popupDesription.value = profileDesription.textContent;
});
/* Открываем модалку */

/* Функция замены данных профиля */
function editProfile(name, description) {
  profileName.textContent = name;
  profileDesription.textContent = description;
}
/* Функция замены данных профиля */

/* Форма */
function editProdile(evt) {
  evt.preventDefault();
  editProfile(popupName.value, popupDesription.value);

  closePopup(popupProfile);
}

popupFormProfile.addEventListener("submit", editProdile);
/* Форма */

/* Конец модального окна профиля */

/* Начало модального окна новой карточки */

/* Функция с template */
function createCard(nameInput, linkInput) {
  const finiteElement = elementTemplate.content;
  const cardElement = finiteElement.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__name").textContent = nameInput;
  cardElement.querySelector(".element__photo").src = linkInput;
  cardElement.querySelector(".element__photo").src = linkInput;
  /* Функция с template */

  /* Кнопка лайк */
  cardElement
    .querySelector(".element__icon-heart")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__icon-heart_active");
    });
  /* Кнопка лайк */

  /* Кнопка урны */
  cardElement
    .querySelector(".element__urn")
    .addEventListener("click", function (evt) {
      evt.target.parentNode.remove();
    });
  /* Кнопка урны */

  /* Увеличение карточки */
  cardElement.querySelector(".element__photo").addEventListener("click", () => {
    openPopup(popupMapEnlargement);
    popupPhoto.src = linkInput;
    popupNamePhoto.textContent = nameInput;
  });
  /* Увеличение карточки */
  return cardElement;
}

/* Форма карточки */
function addCard(evt) {
  evt.preventDefault();
  elements.prepend(createCard(popupNameCard.value, popupLinkCard.value));
  popupNameCard.value = "";
  popupLinkCard.value = "";
  closePopup(popupCard);
}

popupFormСard.addEventListener("submit", addCard);
/* Форма карточки */

/* Конец модального окна новой карточки */

/* Начало 6ти готовых карточек */
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

/* Клонирую элементы из массива и добавляю в картчоки */
initialCards.forEach(function (element) {
  elements.prepend(createCard(element.name, element.link));
});
/* Клонирую элементы из массива и добавляю в картчоки */
/* Конец 6ти готовых карточек */
