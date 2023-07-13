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
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    Promise.reject(`Ошибка: ${res.status}`);
  });
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
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return new Promise.reject(`Ошибка: ${res.status}`);
  });
}

/* Данные профиля с сервера */
function serverProfileData() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    Promise.reject(`Ошибка: ${res.status}`);
  });
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
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    new Promise.reject(`Ошибка: ${res.status}`);
  });
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
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    new Promise.reject(`Ошибка: ${res.status}`);
  });
}
/* Отправка на сервер данных аватара */

/* Удаление карточки */
function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    new Promise.reject(`Ошибка: ${res.status}`);
  });
}
/* Удаление карточки */

/* Добавление лайка */
function addALike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    new Promise.reject(`Ошибка: ${res.status}`);
  });
}
/* Добавление лайка */

/* Удаление лайка */
function removeALike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    new Promise.reject(`Ошибка: ${res.status}`);
  });
}
/* Удаление лайка */

export {
  getInitialCards,
  sendInitialedCards,
  sendProfileData,
  serverProfileData,
  addAvatarToServer,
  deleteCard,
  addALike,
  removeALike,
};
