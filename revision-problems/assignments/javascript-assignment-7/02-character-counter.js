"use strict";

const characterInput = document.querySelector("#character-input");
const characterCounter = document.querySelector("#character-counter");
const characterReset = document.querySelector("#character-reset");
const characterLimit = 100;

function updateCharacterCounter() {
  const remaining = characterLimit - characterInput.value.length;
  characterCounter.textContent = `${remaining} ${remaining === 1 ? "character" : "characters"} left`;
  characterCounter.classList.toggle("is-warning", remaining > 0 && remaining <= 20);
  characterCounter.classList.toggle("is-limit", remaining === 0);
}

// Only printable input is blocked at the limit, so navigation and deletion still work.
characterInput.addEventListener("keydown", (event) => {
  const isModifiedKey = event.ctrlKey || event.metaKey || event.altKey;
  const isTextKey = event.key.length === 1 || event.key === "Enter";
  const selectedLength = characterInput.selectionEnd - characterInput.selectionStart;
  if (isTextKey && !isModifiedKey && characterInput.value.length - selectedLength >= characterLimit) event.preventDefault();
});

characterInput.addEventListener("paste", (event) => {
  const pastedText = event.clipboardData.getData("text");
  const selectedLength = characterInput.selectionEnd - characterInput.selectionStart;
  if (characterInput.value.length - selectedLength + pastedText.length > characterLimit) event.preventDefault();
});

characterInput.addEventListener("input", () => {
  if (characterInput.value.length > characterLimit) characterInput.value = characterInput.value.slice(0, characterLimit);
  updateCharacterCounter();
});

characterReset.addEventListener("click", () => {
  characterInput.value = "";
  updateCharacterCounter();
  characterInput.focus();
});

updateCharacterCounter();
