"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };

function updateUserFromValues(currentUser, values) {
  const age = Number(values.age);
  if (!Number.isInteger(age) || age < 0) throw new RangeError("Age must be a non-negative whole number.");
  currentUser.name = values.name.trim();
  currentUser.email = values.email.trim();
  currentUser.age = age;
  return currentUser;
}

function attachUserUpdater() {
  const form = document.querySelector("#user-edit-form");
  const display = document.querySelector("#updated-user");
  if (!form || !display) return;
  for (const [key, value] of Object.entries(user)) form.elements[key].value = value;
  display.textContent = JSON.stringify(user, null, 2);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      updateUserFromValues(user, values);
      display.textContent = JSON.stringify(user, null, 2);
      document.querySelector("#user-update-status").textContent = "User details updated.";
      console.log("Updated user:", user);
    } catch (error) {
      document.querySelector("#user-update-status").textContent = error.message;
    }
  });
}

if (typeof document !== "undefined") attachUserUpdater();
else console.log("Initial user object:", user);
