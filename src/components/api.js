import { checkResponse } from "./utils.js";

const config = {
  baseUrl: "https://nomoreparties.co/v1/wbf-cohort-10",
  headers: {
    authorization: "7ca6e575-6c23-4ba6-b3c7-38c09561d9da",
    "Content-Type": "application/json",
  },
};

/* Загрузка карточек с сервера */
function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(checkResponse);
}
/* Загрузка карточек с сервера */

/* Добавление новой карточки на сервер */
function sendInitialedCards(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkResponse);
}

/* Данные профиля с сервера */
function getProfileData() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(checkResponse);
}
/* Данные профиля с сервера */

/* Отправка на сервер новых данных профиля */
function sendProfileData(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(checkResponse);
}
/* Отправка на сервер новых данных профиля */

/* Отправка на сервер данных аватара */
function addAvatarToServer(avata) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avata,
    }),
  }).then(checkResponse);
}
/* Отправка на сервер данных аватара */

/* Удаление карточки */
function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
}
/* Удаление карточки */

/* Добавление лайка */
function addALike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkResponse);
}
/* Добавление лайка */

/* Удаление лайка */
function removeALike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
}
/* Удаление лайка */

export {
  getInitialCards,
  sendInitialedCards,
  sendProfileData,
  getProfileData,
  addAvatarToServer,
  deleteCard,
  addALike,
  removeALike,
};
