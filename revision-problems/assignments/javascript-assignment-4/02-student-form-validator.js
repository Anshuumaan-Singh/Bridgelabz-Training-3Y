"use strict";

function validateStudent(values) {
  return {
    name: /^[A-Za-z ]+$/.test(values.name.trim()),
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(values.email.trim()),
    phone: /^\d{10}$/.test(values.phone.trim()),
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(values.password)
  };
}

function attachStudentForm() {
  const form = document.querySelector("#student-registration-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    const results = validateStudent(values);
    let isFormValid = true;

    for (const [fieldName, isValid] of Object.entries(results)) {
      const input = form.elements.namedItem(fieldName);
      const error = form.querySelector(`[data-error="${fieldName}"]`);
      input.classList.toggle("valid", isValid);
      input.classList.toggle("invalid", !isValid);
      error.textContent = isValid ? "" : error.dataset.message;
      isFormValid &&= isValid;
    }

    form.querySelector("[data-form-status]").textContent = isFormValid ? "Registration details look good." : "Please correct the highlighted fields.";
  });
}

if (typeof document !== "undefined") attachStudentForm();
else console.log(`Student validation sample: ${JSON.stringify(validateStudent({ name: "Anshuman Singh", email: "anshuman@example.com", phone: "9876543210", password: "Football9!" }))}`);
