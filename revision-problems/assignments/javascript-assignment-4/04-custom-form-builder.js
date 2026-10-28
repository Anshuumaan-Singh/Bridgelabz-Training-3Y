"use strict";

class FormBuilder {
  constructor(fields, targetElement) {
    this.fields = fields;
    this.targetElement = targetElement;
  }

  build() {
    const controls = this.fields.map((field, index) => {
      const id = `generated-field-${index}`;
      const required = field.required ? "required" : "";
      return `<label for="${id}">${field.label}</label><input id="${id}" name="${field.name}" type="${field.type}" ${required}>`;
    }).join("");
    this.targetElement.innerHTML = `<form id="generated-form">${controls}<button type="submit">Submit generated form</button></form><p id="generated-status" aria-live="polite"></p>`;

    const form = this.targetElement.querySelector("#generated-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = this.getFormData();
      this.targetElement.querySelector("#generated-status").textContent = JSON.stringify(formData);
      console.log("Generated form values:", formData);
    });
  }

  getFormData() {
    const form = this.targetElement.querySelector("#generated-form");
    return Object.fromEntries(new FormData(form).entries());
  }
}

if (typeof document !== "undefined") {
  const formTarget = document.querySelector("#generated-form-container");
  if (formTarget) {
    const builder = new FormBuilder([
      { type: "text", label: "Username", name: "username", required: true },
      { type: "email", label: "Email", name: "email", required: true }
    ], formTarget);
    builder.build();
  }
} else {
  console.log("Custom FormBuilder is ready; open index.html in a browser to use the generated form.");
}
