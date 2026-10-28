"use strict";

const multiStepForm = document.querySelector("#multi-step-form");
const stepPanels = [...document.querySelectorAll("[data-step-panel]")];
const stepIndicators = [...document.querySelectorAll("[data-step-indicator]")];
const stepBackButton = document.querySelector("#step-back");
const stepNextButton = document.querySelector("#step-next");
const stepError = document.querySelector("#step-error");
const stepSummary = document.querySelector("#step-summary");
let activeStep = 0;

function renderStep() {
  stepPanels.forEach((panel, index) => { panel.hidden = index !== activeStep; });
  stepIndicators.forEach((indicator, index) => indicator.classList.toggle("is-current", index === activeStep));
  stepBackButton.hidden = activeStep === 0;
  stepNextButton.textContent = activeStep === stepPanels.length - 1 ? "Show summary" : "Next";
  stepError.textContent = "";
}

function isActiveStepValid() {
  // Validate only the visible field before letting the user continue.
  const currentInput = stepPanels[activeStep].querySelector("input");
  const value = currentInput.value.trim();
  if (!value) {
    stepError.textContent = "This field is required.";
    currentInput.focus();
    return false;
  }
  if (currentInput.type === "email" && !currentInput.checkValidity()) {
    stepError.textContent = "Enter a valid email address.";
    currentInput.focus();
    return false;
  }
  if (currentInput.type === "password" && value.length < 6) {
    stepError.textContent = "Use at least 6 characters for the password.";
    currentInput.focus();
    return false;
  }
  return true;
}

function addSummaryLine(label, value) {
  const line = document.createElement("p");
  line.textContent = `${label}: ${value}`;
  stepSummary.append(line);
}

stepNextButton.addEventListener("click", () => {
  if (!isActiveStepValid()) return;
  if (activeStep < stepPanels.length - 1) {
    activeStep += 1;
    renderStep();
    stepPanels[activeStep].querySelector("input").focus();
    return;
  }

  const formData = new FormData(multiStepForm);
  const heading = document.createElement("strong");
  heading.textContent = "You're all set.";
  stepSummary.replaceChildren(heading);
  addSummaryLine("Name", formData.get("name"));
  addSummaryLine("Email", formData.get("email"));
  addSummaryLine("Password", "saved");
  stepSummary.hidden = false;
  multiStepForm.hidden = true;
});

stepBackButton.addEventListener("click", () => {
  if (activeStep === 0) return;
  activeStep -= 1;
  renderStep();
  stepPanels[activeStep].querySelector("input").focus();
});

multiStepForm.addEventListener("input", () => { stepError.textContent = ""; });
renderStep();
