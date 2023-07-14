import { disabledButton } from "./utils";

const showInputError = (formElement, element, errorMessage, config) => {
  const popupError = formElement.querySelector(`.${element.id}-error`);
  element.classList.add(config.inputErrorClass);
  popupError.textContent = errorMessage;
  popupError.classList.add(config.errorClass);
};

const hideInputError = (formElement, element, config) => {
  const popupError = formElement.querySelector(`.${element.id}-error`);

  element.classList.remove(config.inputErrorClass);
  popupError.textContent = "";
  popupError.classList.remove(config.errorClass);
};

const checkInput = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  /*  toggleButtonState(inputList, buttonElement, config);
  formElement.addEventListener("reset", () => {
    disabledButton(buttonElement, config);
  }); */

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInput(formElement, inputElement, config);

      toggleButtonState(inputList, buttonElement, config);
    });
  });
};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

export { enableValidation };
