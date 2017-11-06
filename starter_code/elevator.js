class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.interval = 0;
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.interval = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.interval);

  }

  update() {
    this.log();
    if (this.requests !== 0) {
      this.floor = this.requests[this.requests.length - 1];
      // console.log(this.floor);
    }
  }

  _passengersEnter(person) {
    if (this.waitingList.length > 0) {
      this.passengers.push(person);
      this.waitingList.pop(person);
      this.requests.push(person.destinationFloor);
      console.log(person.name + " has enter the elevator");
    }
  }
  _passengersLeave(person) {
    if (person.destinationFloor == this.floor) {
      this.passengers.pop(person);
      console.log(person.name + " has left the elevator");
    }
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
    } else {
      console.log("You are in the highest floor");
    }
  }

  floorDown() {
    if (this.floor - 1 < 0) {
      console.log("You are in floor 0");
    } else {
      this.floor -= 1;
    }
  }

  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log("direction: " + this.direction + ",floor: " + this.floor);
  }
}




module.exports = Elevator;
