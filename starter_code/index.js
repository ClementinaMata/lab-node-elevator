const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let person = new Person("Julia", 0, 1);


elevator.start();
elevator.call(person);
elevator._passengersEnter(person);
elevator.floorUp();
elevator.update();
elevator._passengersLeave(person);
elevator.stop();
