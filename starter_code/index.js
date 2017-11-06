const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator ();
let person = new Person (Julia,0,1);


// elevator.update();
elevator.start();
elevator.call(person);
elevator._passengersEnter(person);
// elevator.floorUp ();
// elevator._passengersEnter(person);
// elevator.update();
// elevator._passengersEnter(person);
elevator.stop();


// elevator.start();
// elevator.floorDown();
// elevator.update();
// elevator.stop();
