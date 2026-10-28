"use strict";

const productForm = document.querySelector("#product-form");
const productInput = document.querySelector("#product-input");
const productList = document.querySelector("#product-list");
const productStatus = document.querySelector("#product-status");

function createProductItem(productName) {
  const item = document.createElement("li");
  item.className = "product-item";

  const label = document.createElement("span");
  label.className = "product-label";
  label.textContent = productName;

  const actions = document.createElement("span");
  actions.className = "item-actions";
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.dataset.action = "edit";
  editButton.textContent = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.dataset.action = "delete";
  deleteButton.className = "button-quiet";
  deleteButton.textContent = "Delete";
  actions.append(editButton, deleteButton);
  item.append(label, actions);
  return item;
}

productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const productName = productInput.value.trim();
  if (!productName) return;

  productList.append(createProductItem(productName));
  productInput.value = "";
  productInput.focus();
  productStatus.textContent = `${productName} added.`;
});

function saveProductEdit(item) {
  const editor = item.querySelector(".product-editor");
  if (!editor) return;

  const label = document.createElement("span");
  label.className = "product-label";
  label.textContent = editor.value.trim() || editor.dataset.originalValue;
  editor.replaceWith(label);
  delete item.dataset.editing;
}

function startProductEdit(item) {
  if (item.dataset.editing === "true") return;
  const label = item.querySelector(".product-label");
  const editor = document.createElement("input");
  editor.className = "product-editor";
  editor.type = "text";
  editor.value = label.textContent;
  editor.dataset.originalValue = label.textContent;
  editor.setAttribute("aria-label", "Edit product name");
  item.dataset.editing = "true";
  label.replaceWith(editor);
  editor.focus();
  editor.select();
  editor.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveProductEdit(item);
    }
    if (event.key === "Escape") {
      editor.value = editor.dataset.originalValue;
      saveProductEdit(item);
    }
  });
  editor.addEventListener("blur", () => saveProductEdit(item), { once: true });
}

// One list listener handles controls on both starting items and newly added ones.
productList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const item = button.closest(".product-item");

  if (button.dataset.action === "delete") {
    const editor = item.querySelector(".product-editor");
    const label = item.querySelector(".product-label");
    const name = editor?.value.trim() || label?.textContent || "Product";
    item.remove();
    productStatus.textContent = `${name} deleted.`;
  }
  if (button.dataset.action === "edit") startProductEdit(item);
});

// Clicking outside the active item saves its current text.
document.addEventListener("click", (event) => {
  const editingItem = productList.querySelector('[data-editing="true"]');
  if (editingItem && !editingItem.contains(event.target)) saveProductEdit(editingItem);
});
