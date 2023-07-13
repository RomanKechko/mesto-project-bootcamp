import {
  elementTemplate,
  popupPhoto,
  popupNamePhoto,
  popupMapEnlargement,
  popupProfile,
  profileName,
  profileDesription,
  profileUrl,
  elements,
  popupAvatar,
  popupCard,
} from "./const.js";
import { openPopup, closePopup } from "./modal.js";
import { deleteCard, addALike, removeALike } from "./api.js";

/* установка карточки в начало */
function addCard(data, profileId) {
  const cardElement = createCard(data, profileId);
  elements.prepend(cardElement);
  closePopup(popupCard);
}
/* установка карточки в начало */

/* Огромная функция создания карточки */
function createCard(data, profileId) {
  /* беру template и клонирую внутренности*/
  const finiteElement = elementTemplate.content;
  const cardElement = finiteElement.querySelector(".element").cloneNode(true);
  /* беру template и клонирую внутренности*/
  const likeButton = cardElement.querySelector(".element__icon-heart");
  const numberOfLikes = cardElement.querySelector(".element__number-of-likes");

  /* Подставляю в карточку данные с сервера */
  cardElement.querySelector(".element__name").textContent = data.name;
  cardElement.querySelector(".element__photo").src = data.link;
  cardElement.querySelector(".element__photo").alt = data.name;
  numberOfLikes.textContent = data.likes.length;
  /* Подставляю в карточку данные с сервера */

  /* Кнопка лайк */
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__icon-heart_active");

    if (evt.target.classList.contains("element__icon-heart_active")) {
      addALike(data._id).then((data) => {
        numberOfLikes.textContent = data.likes.length;
        console.log(addALike);
      });
    } else {
      removeALike(data._id).then((data) => {
        numberOfLikes.textContent = data.likes.length;
      });
    }
  });
  for (const like of data.likes) {
    if (like._id === profileId) {
      likeButton.classList.toggle("element__icon-heart_active");
    }
  }
  /* Кнопка лайк */

  /* Кнопка урны */
  if (data.owner._id === profileId) {
    cardElement
      .querySelector(".element__urn")
      .classList.add("element__urn_hidden");
    cardElement
      .querySelector(".element__urn")
      .addEventListener("click", function (evt) {
        deleteCard(data._id)
          .then(() => {
            evt.target.parentNode.remove();
          })
          .catch((err) => console.log(err));
      });
  }
  /* Кнопка урны */

  /* Увеличение карточки */
  cardElement.querySelector(".element__photo").addEventListener("click", () => {
    openPopup(popupMapEnlargement);
    popupPhoto.src = data.link;
    popupPhoto.alt = data.name;
    popupNamePhoto.textContent = data.name;
  });
  /* Увеличение карточки */

  return cardElement;
}

/* Функция замены данных с сервера */
function editProfile(data) {
  profileName.textContent = data.name;
  profileDesription.textContent = data.about;
  closePopup(popupProfile);
}
/* Функция замены данных с сервера */

/* Функция замены аватара с сервера */
function avatarСhange(data) {
  profileUrl.setAttribute("src", data.avatar);
  closePopup(popupAvatar);
}
/* Функция замены аватара с сервера */
export { createCard, editProfile, addCard, avatarСhange };
