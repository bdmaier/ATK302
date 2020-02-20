var myState = 0;
var timer = 0;
function setup() {
  // put setup code here\
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
switch(myState){
  case 0:
  background('red');
  textSize(28);
  text("Hello, welcome to my story. Here's where we begin...", 100, 250);
  timer++; //=timer= timer + 1;
  if (timer > 300){
    myState = 1;
    timer = 0;
  }


  break;

  case 1:
  background('green');
  textSize(28);
  text("There was once a boy named Ben.", 100, 250);
  timer++; //=timer= timer + 1;
  if (timer > 300){
    myState = 2;
    timer = 0;
}
  break;

  case 2:
  background('pink');
  textSize(28);
  text("He lived in a different town than he currently does.", 100, 250);
  timer++; //=timer= timer + 1;
  if (timer > 300){
    myState = 3;
    timer = 0;
  }
  break;


  case 3:
  background('purple');
  textSize(28);
  text("Then he moved.", 100, 250);
  timer++; //=timer= timer + 1;
  if (timer > 300){
    myState = 4;
    timer = 0;
  }
  break;

  case 4:
  background('yellow');
  textSize(28);
  text("The end.", 100, 250);
  timer++; //=timer= timer + 1;
  if (timer > 300){
    myState = 0;
    timer = 0;
  }
  break;

}
}
function mouseReleased(){
  if ((mouseX >0) && (mouseX <800) && (mouseY >0) && (mouseY <800)){

  myState = myState + 1;
  if (myState > 4){
    myState = 0;
  }
}
}
