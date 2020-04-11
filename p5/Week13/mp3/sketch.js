var cars = [];
var frogPos;
var me;
var seven;
var myState = -1;
var maxCars = 5;
var numCars = 5;
var maxTimer = 25 * 60;
var timer = maxTimer;
var time = 25 * 60;
var level = 1;
var lastLevel = 4;
var avatar;
var chicken;
var face;
var vacuum;
var score = 0;
var startScore = score;
var song2;
var song3;

function preload() {
  song1 = loadSound('assets/SynthVariationsProject.wav');
  song2 = loadSound('assets/song2.wav');
  song3 = loadSound('assets/song3.wav');
  song4 = loadSound('assets/song4.wav');
}

function setup() {
  createCanvas(800, 800);
  //song1.play();
  //song1.loop();
  // put setup code here
  //spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car);
  }

  frogPos = createVector(400, height - 100);
  face = loadImage("assets/face2.jpg");
  me = loadImage("assets/me2.jpg");
  seven = loadImage("assets/seven.jpg");
  avatar = loadImage("assets/avatar2.png");
  chicken = loadImage("assets/chicken.jpeg");
  vacuum = loadImage("assets/vacuum.png");
  textAlign(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  switch (myState) {
case -2:
song4.loop();
myState = 3;
break;

    case -1:
      song1.loop();
      myState = 0;

    case 0: //menu
      //  background('red');
      image(me, 400, 400, 800, 800);
      fill('red');
      textSize(46);
      text("Welcome to VACUUM THE CLONES!!!", width / 2, 145);
      text("Click to proceed!", width / 2, 200);
      textSize(22);
      fill('black');
      textStyle(BOLD); //https://p5js.org/reference/#/p5/textStyle
      text("Note: No Bens were actually harmed in the making.", width / 2, 760);
      textStyle(NORMAL); //https://p5js.org/reference/#/p5/textStyle
      break;


    case 1: //game state
      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = -2;
      }
      game();
      break;

    case 2: //win statement
      background('orange');
      fill('black');
      textSize(68);
      text("You beat level " + level + "!", 400, 350);
      textSize(36);
      text("Click to proceed to the next level!", width / 2, height / 2);
      text("Score: " + score, width / 2, 760);
      if (level == lastLevel) {
        myState = 4;
      }

      break;

    case 3: //lose statement
      song2.stop();
      background('purple');
      image(seven, width / 2, 470, 760, 270);
      fill('pink');
      text("Your final score was " + score + "!", 400, 220);
      text("You couldn't stop Ben from cloning himself!", width / 2, 290);
      text("Click to try again!", width / 2, 650);
      break;
    case 4:
      //background('magenta');
      song2.stop();
      image(face, 400, 400, 800, 800);
      textSize(46);
      text("You beat the game and helped destroy", width / 2, 370);
      text("the Ben clones!", width / 2, 415);
      textSize(74);
      text("Congratulations!", width / 2, 480);
      textSize(32);
      textStyle(BOLD);//https://p5js.org/reference/#/p5/textStyle
      text("Click to play again!", width / 2, 740);
      textSize(46);
      text("Final Score: " + score, width / 2, 680);
      textStyle(NORMAL);

      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      song1.stop();
      song2.loop();
      myState = 1;
      break;

    case 2:
      //increase level number
      level = level + 1;

      //reset timer
      timer = maxTimer;
      //maxTimer = maxTimer + 5*60;
      //reset Score
      //score = startScore;
      //respawn cars
      cars = [];
      maxCars = maxCars + 5;
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car);
      }
      frogPos = createVector(400, height - 100);
      myState = 1;

      break;

    case 3:
    song4.stop();
      //reset level number
      level = 1;
      //reset Timer
      timer = time;
      //reset Score
      score = startScore;
      //respawn cars
      cars = [];
      maxCars = numCars;
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car);
      }
      frogPos = createVector(400, height - 100);
      myState = -1;
      break;
    case 4:
      song3.stop();
      //reset level number
      level = 1;
      //reset Timer
      timer = time;
      //reset Score
      score = startScore;
      //respawn cars
      cars = [];
      maxCars = numCars;
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car);
      }
      frogPos = createVector(400, height - 100);
      myState = -1;
      break;
  }
  //if (song1.isPlaying()){
  //song1.pause(); }
  //else{
  //song1.play();
  //}
}
//game
function game() {
  background('lightblue');
  fill('black');
  textSize(36);
  text("Score: " + score, 700, 80);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 40) {
      cars.splice(i, 1);
      score++;
    }
  }
  //Code for and(&&) statement found at: https://p5js.org/examples/control-logical-operators.html
  if (cars.length == 0 && level == lastLevel) {
    song2.stop();
    song3.play();
    myState = 4;
  } else
  if (cars.length == 0) {
    myState = 2;
  }
  // put drawing code here
  //fill('red');
  //ellipse(frogPos.x, frogPos.y, 50, 50);

  image(vacuum, frogPos.x, frogPos.y, 100, 110);
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
  this.w = random(30, 105);
  //methods
  this.display = function() {
    //fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, this.w, this.w);
    //https://p5js.org/reference/#/p5/tint
    //tint(this.r, this.g, this.b);
    image(avatar, this.pos.x, this.pos.y, this.w, this.w);
    //tint(255, 255, 255);
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

function touchStarted() {
  getAudioContext().resume();
}
