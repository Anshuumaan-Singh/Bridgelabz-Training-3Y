"use strict";

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance, driver) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
    this.driver = driver;
  }

  calculateFare() {
    if (!Number.isFinite(this.distance) || this.distance <= 0) {
      throw new RangeError("Trip distance must be a positive number of kilometres.");
    }
    return 50 + this.distance * 12;
  }
}

registerExercise("05", () => {
  const driver = new Driver("Arjun", 4.9, "Electric sedan");
  const lines = [`Driver: ${driver.name} · ${driver.vehicle} · rating ${driver.rating}/5`];
  try {
    const trip = new Trip("Central Station", "City Park", 8, driver);
    lines.push(`Trip: ${trip.fromLocation} → ${trip.toLocation} (${trip.distance} km)`, `Fare (₹50 base + ₹12/km): ₹${trip.calculateFare()}`);
  } catch (error) {
    lines.push(`Trip error: ${error.message}`);
  }
  for (const invalidDistance of [-2, undefined]) {
    try {
      new Trip("A", "B", invalidDistance, driver).calculateFare();
    } catch (error) {
      lines.push(`Invalid distance handled: ${error.message}`);
    }
  }
  showOutput("05", lines);
});
