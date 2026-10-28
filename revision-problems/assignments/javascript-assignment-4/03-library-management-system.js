"use strict";

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) return false;
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) return false;
    this.isIssued = false;
    return true;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "9780061122415"),
  new Book("Wings of Fire", "A. P. J. Abdul Kalam", "9788173711466"),
  new Book("The Hobbit", "J. R. R. Tolkien", "9780547928227", true)
];

function renderLibrary() {
  console.log("Available books:");
  for (const book of books.filter((item) => !item.isIssued)) {
    console.log(`${book.title} by ${book.author} | ISBN ${book.isbn}`);
  }
}

function issueBookByIsbn(isbn) {
  const book = books.find((item) => item.isbn === isbn);
  if (!book) return `No book found with ISBN ${isbn}.`;
  if (!book.issueBook()) return `${book.title} is already issued.`;
  renderLibrary();
  return `Issued: ${book.title}`;
}

function attachLibraryForm() {
  const form = document.querySelector("#library-form");
  if (!form) return;
  const availableList = document.querySelector("#available-books");
  const status = document.querySelector("#library-status");

  function updateAvailableList() {
    availableList.innerHTML = books.filter((book) => !book.isIssued)
      .map((book) => `<li><strong>${book.title}</strong> — ${book.author} <span>ISBN ${book.isbn}</span></li>`).join("") || "<li>No books are currently available.</li>";
  }
  updateAvailableList();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isbn = new FormData(form).get("isbn").trim();
    const result = issueBookByIsbn(isbn);
    status.textContent = result;
    updateAvailableList();
  });
}

renderLibrary();
if (typeof document !== "undefined") attachLibraryForm();
