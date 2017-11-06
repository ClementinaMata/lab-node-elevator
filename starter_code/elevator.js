class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.interval = 0;
  }

  start() {
    this.interval = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
    this.log();
  }

  _passengersEnter() {}
  _passengersLeave() {}

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor +=1;
    } else {
      console.log("You are in the highest floor");
    }
  }

  floorDown() {
    if (this.floor - 1 < 0) {
      console.log("You are in floor 0");
    } else {
      this.floor -=1;
    }
  }


  call(person) {
this.requests.push(person);
}

  log() {
    console.log("direction: " + this.direction+",floor: " + this.floor);
  }
}




module.exports = Elevator;
