"use strict";

const validationForm = document.querySelector("#validation-form");
const formSuccess = document.querySelector("#form-success");
const validationFields = {
  name: document.querySelector("#validation-name"),
  email: document.querySelector("#validation-email"),
  password: document.querySelector("#validation-password"),
};
const validationMessages = {
  name: document.querySelector("#validation-name-error"),
  email: document.querySelector("#validation-email-error"),
  password: document.querySelector("#validation-password-error"),
};

function getFieldError(fieldName) {
  const value = validationFields[fieldName].value.trim();
  if (!value) return "This field is required.";
  if (fieldName === "email" && !value.includes("@")) return "Email must contain @.";
  if (fieldName === "password" && value.length < 6) return "Password must be at least 6 characters.";
  return "";
}

function updateFieldError(fieldName) {
  const message = getFieldError(fieldName);
  validationMessages[fieldName].textContent = message;
  validationFields[fieldName].setAttribute("aria-invalid", String(Boolean(message)));
  return !message;
}

Object.keys(validationFields).forEach((fieldName) => {
  validationFields[fieldName].addEventListener("input", () => {
    updateFieldError(fieldName);
    formSuccess.textContent = "";
  });
});

validationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const isValid = Object.keys(validationFields).map(updateFieldError).every(Boolean);
  if (isValid) {
    formSuccess.textContent = "Form Submitted Successfully";
    validationForm.reset();
    Object.keys(validationFields).forEach((fieldName) => validationFields[fieldName].removeAttribute("aria-invalid"));
  } else {
    formSuccess.textContent = "";
    validationForm.querySelector('[aria-invalid="true"]')?.focus();
  }
});
