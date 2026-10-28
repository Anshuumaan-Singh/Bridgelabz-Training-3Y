"use strict";

const studentSearch = document.querySelector("#student-search");
const studentRows = [...document.querySelectorAll("#student-rows tr")];
const noStudentsMessage = document.querySelector("#no-students");

studentSearch.addEventListener("input", () => {
  // Lowercase both sides so a search matches regardless of letter case.
  const query = studentSearch.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  studentRows.forEach((row) => {
    const matches = row.textContent.toLocaleLowerCase().includes(query);
    row.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  noStudentsMessage.hidden = visibleCount > 0;
});
