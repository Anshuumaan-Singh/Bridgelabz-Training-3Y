"use strict";

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function () {
  return `${this.movieName} · seat ${this.seatNo} · ticket ₹${this.price.toFixed(2)}`;
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

registerExercise("08", () => {
  const ticket = new OnlineTicket("The Last Journey", "B12", 250, 30);
  showOutput("08", [
    ticket.printTicket(),
    `Convenience fee: ₹${ticket.convenienceFee.toFixed(2)}`,
    `Total amount: ₹${ticket.getTotalAmount().toFixed(2)}`,
    `Prototype chain reaches MovieTicket.prototype: ${MovieTicket.prototype.isPrototypeOf(ticket)}`
  ]);
});
