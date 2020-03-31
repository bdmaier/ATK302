var cars = [];
var frogPos;
var myState = 0;
var maxCars = 20;
var maxTimer = 25*60;
var timer = maxTimer;
function setup() {
  createCanvas(800, 800);

  // put setup code here
  //spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car);
  }

  frogPos = createVector(400, height - 100);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  switch (myState) {

    case 0: //menu
      background('red');
      fill('white');
      textSize(42);
      text("Welcome to my game, click to proceed", width / 2, height / 2);
      break;


    case 1: //game state
    timer = timer - 1;
    if(timer<= 0){
      timer = maxTimer;
      myState = 3;
    }
      game();
      break;

    case 2: //win statement
      background('orange');
      fill('black');
      text("You WON!", width / 2, height / 2);
      break;

    case 3: //lose statement
      background('purple');
      fill('pink');
      text("Aw noo, You LOST, try again!", width / 2, height / 2);
      break;


  }

}
function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
    //reset timer
      timer = maxTimer;
    //respawn cars
    cars = [];
    for (var i = 0; i < maxCars; i++) {
      cars.push(new Car);
    }
      myState = 0;
      break;

    case 3:
    //reset Timer
    timer = maxTimer;
    //respawn cars
    cars = [];
    for (var i = 0; i < maxCars; i++) {
      cars.push(new Car);
    }
      myState = 0;
      break;
  }
}
//game
function game() {
  background('lightblue');
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 40) {
      cars.splice(i, 1);
    }
  }
  if (cars.length ==0)
  {
    myState = 2;
  }
  // put drawing code here
  fill('red');
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

//frogPos

function checkForKeys() {

  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;


}

function Car() {
  //atributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.w = random(15, 60);
  //methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, this.w, this.w);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    //Normal= code phrase 1
    //Spider-Man= code phrase 2
    //Making Videos with friends code phrase 3
    //Oh, she means add another attribute
    //Pizza= code phrase 4
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
