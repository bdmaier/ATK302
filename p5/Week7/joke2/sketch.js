var myState = 0;
var timer = 0;

function setup() {
  createCanvas(800, 800);
  // put setup code here
}

function draw() {
  background('black');
  switch(myState)
  {
  case 0:
  fill('red');
  textSize(24);
  text("How did Chicago get started?", 200, 200);
  timer++;
  if (timer > 200){
    myState = 1;
    timer = 0;
  }
  break;

  case 1:
  fill('red');
  textSize(24);
  text("'A bunch of people in New York said, 'Gee, I’m enjoying the crime", 30, 200);
  text("and the poverty, but it just isn’t cold enough.'' — Richard Jeni", 45, 220);
timer++;
if (timer > 350){
  myState = 0;
  timer = 0;
}
  break;

  }
  // put drawing code here
}
function mouseReleased() {
myState = myState + 1;
if (myState > 1){
  myState = 0;
}
}
