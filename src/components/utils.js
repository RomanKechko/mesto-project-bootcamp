/* проверка ответа с сервера */
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  Promise.reject(`Ошибка: ${res.status}`);
}
/* проверка ответа с сервера */

/* Блокировка кнкопки схранить в попап, где не введены данные */
function disableButton(button, config) {
  button.classList.add("popup__save_inactive");
  button.setAttribute("disabled", true);
}
/* Блокировка кнкопки схранить в попап, где не введены данные */

function enableButton(button, config) {
  button.classList.remove("popup__save_inactive");
  button.removeAttribute("disabled");
}

export { checkResponse, disableButton, enableButton };
