var mic;
var vol;
var delayTimer = 0;
var myState = 0;

function touchStarted() {
  getAudioContext().resume();
}
function setup() {
  // put setup code here
  createCanvas(800, 800);
  // load images here
  mic = new p5.AudioIn();
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  // put drawing code here
  background(100);
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this


  // use this to "debounce" the sound input
  if (delayTimer > 0) {
    delayTimer--;
  }

  if ((vol > 9) && (delayTimer == 0)) {  // you may have to change that 9
    delayTimer = 30;
myState = myState +1;
if (myState > 1)
{
  myState = 0;
}
        // do something like advance the state (myState++)

  }

// your switch statement can go here….
switch (myState) {
  case 0:
    background('purple');
    fill('yellow');
    ellipse(57, 89, 30, 40);
    break;

    case 1:
    background('brown');
    fill('green')
    rect(57, 89, 30, 40);
    break;
}


 // put the volume on the screen (for debugging maybe)
  textSize(40);
  fill(0);
  text("My volume is " + vol, 80, 400);
  text("Your Score is  " + score, 80, 600);

}

// you need to click the screen before the mic input will work.
