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
  const elementPhoto = cardElement.querySelector(".element__photo");
  const likeButton = cardElement.querySelector(".element__icon-heart");
  const numberOfLikes = cardElement.querySelector(".element__number-of-likes");
  const elementUrn = cardElement.querySelector(".element__urn");

  /* Подставляю в карточку данные с сервера */
  cardElement.querySelector(".element__name").textContent = data.name;
  elementPhoto.src = data.link;
  elementPhoto.alt = data.name;
  numberOfLikes.textContent = data.likes.length;
  /* Подставляю в карточку данные с сервера */

  /* Кнопка лайк */
  likeButton.addEventListener("click", function (evt) {
    if (!evt.target.classList.contains("element__icon-heart_active")) {
      addALike(data._id)
        .then((data) => {
          numberOfLikes.textContent = data.likes.length;
          evt.target.classList.toggle("element__icon-heart_active");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      removeALike(data._id)
        .then((data) => {
          numberOfLikes.textContent = data.likes.length;
          evt.target.classList.toggle("element__icon-heart_active");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  for (const like of data.likes) {
    if (like._id === profileId) {
      likeButton.classList.add("element__icon-heart_active");
      break;
    }
  }
  /* Кнопка лайк */

  /* Кнопка урны */
  if (data.owner._id === profileId) {
    elementUrn.classList.add("element__urn_hidden");
    elementUrn.addEventListener("click", function (evt) {
      deleteCard(data._id)
        .then(() => {
          evt.target.closest(".element").remove();
        })
        .catch((err) => console.log(err));
    });
  }
  /* Кнопка урны */

  /* Увеличение карточки */
  elementPhoto.addEventListener("click", () => {
    openPopup(popupMapEnlargement);
    popupPhoto.src = data.link;
    popupPhoto.alt = data.name;
    popupNamePhoto.textContent = data.name;
  });
  /* Увеличение карточки */

  return cardElement;
}

export { createCard, addCard };
