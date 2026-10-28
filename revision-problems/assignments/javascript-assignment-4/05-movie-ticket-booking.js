"use strict";

function validateMovieBooking(values) {
  const name = values.name.trim();
  const email = values.email.trim();
  const seats = Number(values.seats);
  const errors = [];
  if (!/^[A-Za-z ]+$/.test(name)) errors.push("Name must contain letters and spaces only.");
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) errors.push("Enter a valid email address.");
  if (!Number.isInteger(seats) || seats < 1 || seats > 10) errors.push("Choose between 1 and 10 seats.");
  return { errors, booking: errors.length === 0 ? { name, email, seats } : null };
}

function attachMovieBookingForm() {
  const form = document.querySelector("#movie-booking-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    const result = validateMovieBooking(values);
    const status = document.querySelector("#booking-status");
    const ticket = document.querySelector("#ticket-details");
    if (result.booking) {
      status.textContent = "Booking confirmed.";
      ticket.textContent = `Movie ticket | Name: ${result.booking.name} | Email: ${result.booking.email} | Seats: ${result.booking.seats}`;
      console.log("Booking confirmed:", result.booking);
    } else {
      status.textContent = result.errors.join(" ");
      ticket.textContent = "";
    }
  });
}

if (typeof document !== "undefined") attachMovieBookingForm();
else console.log(`Movie booking sample: ${JSON.stringify(validateMovieBooking({ name: "Anshuman Singh", email: "anshuman@example.com", seats: "2" }))}`);
