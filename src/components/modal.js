const popup = Array.from(document.querySelectorAll(".popup"));
popup.forEach((element) => {
  element.addEventListener("click", (evt) => {
    evt.target.classList.remove("popup_opened");
  });

  document.addEventListener("keydown", function (evt) {
    if (element.classList.contains("popup_opened") && evt.key === "Escape") {
      element.classList.remove("popup_opened");
    }
  });
});

export { popup };
