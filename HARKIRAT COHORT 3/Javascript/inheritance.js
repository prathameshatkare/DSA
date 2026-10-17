const vehicle = {
  start() {
    console.log("Vehicle started");
  },
};

vehicle.start(); // Vehicle started

const car = Object.create(vehicle);

car.drive = () => {
  console.log("Yes car can drive");
};

car.drive();
car.start();
const vehicle = {
  wheels: 4,
};

const car = Object.create(vehicle);

console.log(Object.getPrototypeOf(car) === Object.getPrototypeOf(vehicle));
// true

const vehicle = {
  start() {
    console.log("Started");
  },
};

const car = [];

Object.setPrototypeOf(car, vehicle);

car.start(); // Started
