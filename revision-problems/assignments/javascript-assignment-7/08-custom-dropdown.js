"use strict";

const customDropdown = document.querySelector("#custom-dropdown");
const dropdownTrigger = document.querySelector("#dropdown-trigger");
const dropdownOptions = document.querySelector("#dropdown-options");
const dropdownSelection = document.querySelector("#dropdown-selection");

function setDropdownOpen(isOpen) {
  dropdownOptions.hidden = !isOpen;
  dropdownTrigger.setAttribute("aria-expanded", String(isOpen));
}

dropdownTrigger.addEventListener("click", () => {
  setDropdownOpen(dropdownOptions.hidden);
});

dropdownOptions.addEventListener("click", (event) => {
  const option = event.target.closest("button[data-dropdown-value]");
  if (!option) return;
  dropdownTrigger.textContent = option.dataset.dropdownValue;
  dropdownSelection.textContent = `${option.dataset.dropdownValue} selected`;
  setDropdownOpen(false);
});

document.addEventListener("click", (event) => {
  if (!customDropdown.contains(event.target)) setDropdownOpen(false);
}, true);
