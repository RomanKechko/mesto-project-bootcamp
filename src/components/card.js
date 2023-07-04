import {
  elements,
  elementTemplate,
  popupLinkCard,
  popupNameCard,
  popupPhoto,
  popupNamePhoto,
  popupMapEnlargement,
  popupProfile,
  popupName,
  popupDesription,
  profileName,
  profileDesription,
  popupCard,
} from "./const.js";

/* Функции открыть/закрыть модалку */
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
/* Функции открыть/закрыть модалку */

/* Начало модального окна новой карточки */
/* Функция с template */
function createCard(nameInput, linkInput) {
  const finiteElement = elementTemplate.content;
  const cardElement = finiteElement.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__name").textContent = nameInput;
  cardElement.querySelector(".element__photo").src = linkInput;
  cardElement.querySelector(".element__photo").alt = nameInput;
  /* Функция с template */

  /* Кнопка лайк */
  cardElement
    .querySelector(".element__icon-heart") /*  */
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
    popupPhoto.alt = nameInput;
    popupNamePhoto.textContent = nameInput;
  });
  /* Увеличение карточки */
  return cardElement;
}

/* Форма карточки */
function addCard(evt) {
  evt.preventDefault();
  elements.prepend(createCard(popupNameCard.value, popupLinkCard.value));
  evt.target.reset();
  closePopup(popupCard);
}
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
initialCards.forEach(function (element) {
  elements.prepend(createCard(element.name, element.link));
});

/* Клонирую элементы из массива и добавляю в картчоки */

export { addCard, editProdile, openPopup, closePopup };
