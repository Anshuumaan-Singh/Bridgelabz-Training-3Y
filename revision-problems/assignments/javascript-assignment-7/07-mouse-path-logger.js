"use strict";

const pathBox = document.querySelector("#path-box");
const mouseCoordinates = document.querySelector("#mouse-coordinates");

pathBox.addEventListener("mousemove", (event) => {
  mouseCoordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

pathBox.addEventListener("dblclick", (event) => {
  // Convert client coordinates into positions relative to the tracking box.
  const boxBounds = pathBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "mouse-dot";
  dot.setAttribute("aria-hidden", "true");
  dot.style.left = `${event.clientX - boxBounds.left}px`;
  dot.style.top = `${event.clientY - boxBounds.top}px`;
  pathBox.append(dot);
});
