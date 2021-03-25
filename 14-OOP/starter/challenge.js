'use strict';

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = parseFloat(speed);
// }

// Car.prototype.accelerate = function() {
//     this.speed += 10
//     console.log(this.speed + ' km/h');
// }

// Car.prototype.brake = function() {
//     this.speed -= 5
//     console.log(this.speed + ' km/h');
// }

// const car1 = new Car('BMW', '120 km/h');
// const car2 = new Car('Mercedes', '95 km/h');

// car1.accelerate();
// car1.brake();
// car2.accelerate();
// car2.accelerate();
// car2.brake();

// const EV = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function() {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
// }

// EV.prototype.constructor = EV;

// const tesla = new EV('Tesla', 120, 23);

// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// tesla.accelerate();




class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = parseFloat(speed);
    }

    accelerate() {
        this.speed += 10
        console.log(this.speed + ' km/h');
    }

    brake() {
        this.speed -= 5
        console.log(this.speed + ' km/h');
        return this;
    }

    get speedUS() {
        return this.speed / 1.6 + ' mi/h';
    }

    set speedUS(speed) {
        this.speedMi = parseFloat(speed);
        this.speedKm = parseFloat(speed) * 1.6;
    }
}

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(90).accelerate();
// const car1 = new CarCl('Ford', '120km');
console.log(rivian.speedUS);
// car1.accelerate();
// car1.brake();
// console.log(car1.speedUS);
// car1.speedUS = 78.125;
// console.log(car1.speedKm);
// console.log(car1.speedMi);