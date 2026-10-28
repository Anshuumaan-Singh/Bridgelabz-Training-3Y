"use strict";

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function getDetails() {
  return `${this.brand} ${this.model}`;
};

const firstCar = new Car("Tata", "Nexon");
const secondCar = new Car("Honda", "City");
console.log(firstCar.getDetails());
console.log(secondCar.getDetails());
console.log(`Both cars share the same prototype method: ${firstCar.getDetails === secondCar.getDetails}`);
