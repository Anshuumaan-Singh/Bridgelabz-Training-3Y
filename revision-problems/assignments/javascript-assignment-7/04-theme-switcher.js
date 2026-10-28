"use strict";

const themeButtons = [...document.querySelectorAll("[data-theme-choice]")];
const themeName = document.querySelector("#theme-name");

function applyTheme(theme) {
  // setAttribute applies the theme class and stores the selected theme on body.
  document.body.setAttribute("class", `theme-${theme}`);
  document.body.setAttribute("data-theme", theme);
  themeName.textContent = theme[0].toUpperCase() + theme.slice(1);
  themeButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.themeChoice === theme)));
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => applyTheme(button.dataset.themeChoice));
});

applyTheme("light");
