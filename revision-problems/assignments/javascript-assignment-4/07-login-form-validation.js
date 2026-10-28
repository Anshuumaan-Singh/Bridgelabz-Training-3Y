"use strict";

function validateLogin(username, password) {
  const errors = {};
  if (username.trim().length < 5) errors.username = "Username must be at least 5 characters.";
  const passwordRequirements = [
    [password.length >= 8, "Password must be at least 8 characters."],
    [/\d/.test(password), "Password must include a number."],
    [/[A-Z]/.test(password), "Password must include an uppercase letter."],
    [/[a-z]/.test(password), "Password must include a lowercase letter."],
    [/[^A-Za-z0-9]/.test(password), "Password must include a special character."]
  ];
  const unmetPasswordRequirements = passwordRequirements.filter(([isMet]) => !isMet).map(([, message]) => message);
  if (unmetPasswordRequirements.length) errors.password = unmetPasswordRequirements.join(" ");
  return { isValid: Object.keys(errors).length === 0, errors };
}

function attachLoginForm() {
  const form = document.querySelector("#login-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const result = validateLogin(username, password);
    for (const fieldName of ["username", "password"]) {
      const input = form.elements[fieldName];
      const message = form.querySelector(`[data-error="${fieldName}"]`);
      input.classList.toggle("valid", !result.errors[fieldName]);
      input.classList.toggle("invalid", Boolean(result.errors[fieldName]));
      message.textContent = result.errors[fieldName] || "";
    }
    form.querySelector("[data-form-status]").textContent = result.isValid ? "Login details are valid." : "Please fix the errors above.";
  });
}

if (typeof document !== "undefined") attachLoginForm();
else console.log(`Login validation sample: ${JSON.stringify(validateLogin("anshu", "Football9!"))}`);
