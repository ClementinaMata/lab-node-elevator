const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator ();
elevator.update();
elevator.start();
elevator.floorUp ();
elevator.update();
elevator.stop();
elevator.start();
elevator.floorDown();
elevator.update();
elevator.stop();
