// Homework assignment 

class Rover {
  constructor(name, x, y) {
    this.name = name;
    this.position = {x: x, y: y};
    this.direction = 2;
    this.cardinals = { 0: "NORTH", 1: "EAST", 2: "SOUTH", 3: "WEST" };
    this.travelLog = [[this.position.x, this.position.y]];
  }

  moveForward() {
    switch (this.direction) {
      case 0: // north
        if (this.position.y === 0) {
          this.outOfBounds();
          return;
        }
        this.position.y--;
        this.travelLog.push([this.position.x, this.position.y]);
        console.log(`Moving towards ${this.cardinals[this.direction]} to coordinates ${this.position.x},${this.position.y}`);
        break;
      case 1: // east
        if (this.position.x === 9) {
          this.outOfBounds();
          return;
        }
        this.position.x++;
        this.travelLog.push([this.position.x, this.position.y]);
        console.log(`Moving towards ${this.cardinals[this.direction]} to coordinates ${this.position.x},${this.position.y}`);
        break;
      case 2: // south
        if (this.position.y === 9) {
          this.outOfBounds();
          return;
        }
        this.position.y++;
        this.travelLog.push([this.position.x, this.position.y]);
        console.log(`Moving towards ${this.cardinals[this.direction]} to coordinates ${this.position.x},${this.position.y}`);
        break;
      case 3: // west
        if (this.position.x === 0) {
          this.outOfBounds();
          return;
        }
        this.position.x--;
        this.travelLog.push([this.position.x, this.position.y]);
        console.log(`Moving towards ${this.cardinals[this.direction]} to coordinates ${this.position.x},${this.position.y}`);
        break;    
      default:
        console.log('Rover is lost :(');        
        break;
    }
    //console.log('x:', this.position.x, 'y:', this.position.y);
  }

  turnLeft() {
    switch (this.direction) {
      case 0: // north        
        this.direction = 3; // west
        console.log(`Turning left to face ${this.cardinals[this.direction]}`);
        break;
      case 1:
        this.direction = 0;
        console.log(`Turning left to face ${this.cardinals[this.direction]}`);
      break;
      case 2:
        this.direction = 1;
        console.log(`Turning left to face ${this.cardinals[this.direction]}`);
        break;
      case 3:
        this.direction = 2;
        console.log(`Turning left to face ${this.cardinals[this.direction]}`);
        break;              
      default:
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case 0: // north
        this.direction = 1; // east
        console.log(`Turning right to face ${this.cardinals[this.direction]}`);
        break;
      case 1:
        this.direction = 2;
        console.log(`Turning right to face ${this.cardinals[this.direction]}`);
      break;
      case 2:
        this.direction = 3;
        console.log(`Turning right to face ${this.cardinals[this.direction]}`);
        break;
      case 3:
        this.direction = 0;
        console.log(`Turning right to face ${this.cardinals[this.direction]}`);
        break;              
      default:
        break;
    }
  }

  printPosition() {
    console.log("Currently positioned in", this.position.x, this.position.y);
  }

  printLog() {
    console.log("Travel log:");
    this.travelLog.forEach( (value, index, array) => {
      console.log(`  ${array[index][0]},${array[index][1]}`);
    });
    
  }

  outOfBounds() {
    console.log("Rover can't go out of the boundry!");
  }

  // check coordinates for the map plot
  checkCoordinates(column, row) {
    let check = false;
    let currentPosition = false;
    
    this.travelLog.forEach( (value, index, array) => {
      let x = array[index][0];
      let y = array[index][1];

      if (row === x && column === y) {
        check = true;
        // check if the rover is at its current/resting position
        if (this.position.x === x && this.position.y === y ) {
          currentPosition = true;
        }
      }
    });
    return {check: check, currentPosition: currentPosition};
  }

  printMap() {
    let logPoint = '';
    let count = 0;
    
    for (let column = 0; column < 10; column++) {
      for (let row = 0; row < 10; row++) {
        if (this.checkCoordinates(column, row).check === true) {
          if (this.checkCoordinates(column, row).currentPosition === true) {
            logPoint += "R";
          }
          else {
            logPoint += "x";
          }
        }
        else {
          logPoint += "-";
        }
      }
      logPoint += "\n"; // row has finished 
    }
    console.log(logPoint); // logs the row
  }

}

rover1 = new Rover('Rover One', 5, 0);
rover1.moveForward();
rover1.turnRight();
rover1.moveForward();
rover1.turnLeft();
rover1.moveForward();
rover1.printPosition();
rover1.printLog();
rover1.printMap();

console.log("\nA new rover lands...\n");

rover1 = new Rover('Rover Two', 0, 0);
rover1.turnRight();
rover1.moveForward();
rover1.turnLeft();
rover1.moveForward();
