"use strict";

const galleryModal = document.querySelector("#gallery-modal");
const galleryDialog = galleryModal.querySelector(".gallery-dialog");
const galleryLargeImage = document.querySelector("#gallery-large-image");
const galleryCaption = document.querySelector("#gallery-caption");
const galleryCloseButton = document.querySelector("#gallery-close");

function closeGalleryModal() {
  galleryModal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll(".gallery-image").forEach((image) => {
  image.addEventListener("click", () => {
    galleryLargeImage.src = image.src.replace("w=600", "w=1400");
    galleryLargeImage.alt = image.alt;
    galleryCaption.textContent = image.alt;
    galleryModal.hidden = false;
    document.body.style.overflow = "hidden";
    galleryDialog.focus();
  });
});

galleryCloseButton.addEventListener("click", closeGalleryModal);
galleryModal.addEventListener("click", closeGalleryModal);
galleryDialog.addEventListener("click", (event) => event.stopPropagation());
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !galleryModal.hidden) closeGalleryModal();
});
