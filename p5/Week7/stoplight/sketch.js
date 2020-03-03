var myState = 0;
var timer = 0;
var x = 0;
var velocity = 10;
function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  background('turquoise');
  // put setup code here
}

function draw() {
fill('#E4E422');
  rect(width/2, height/2, 150, 400);
  rect(x, height-100, 50, 25);

  x = x + velocity;
  if(x > width){
    x=0;
  }
  //put drawing code Here
  //yellow rectangle
  switch(myState)
  {


  case 0:
  fill('green');
ellipse(width/2, 500, 80, 80);
fill('grey');
  ellipse(width/2, 382, 80, 80);
  ellipse(width/2, height/3, 80, 80);
velocity = 10;
    timer++;
     if (timer > 150){
       myState = 1;
       timer = 0;
     }
   //red light

  break;

  case 1: //green light
fill('grey');
  ellipse(width/2, 500, 80, 80);
fill('yellow');
    ellipse(width/2, 382, 80, 80);
fill('grey');
    ellipse(width/2, height/3, 80, 80);
velocity = 4;
    timer++;
     if (timer > 150){
       myState = 2;
       timer = 0;
     }
break;

  case 2: //yellow light
fill('grey');
  ellipse(width/2, 500, 80, 80);
    ellipse(width/2, 382, 80, 80);
fill('red');
    ellipse(width/2, height/3, 80, 80);
    velocity= 0;
  timer++;
   if (timer > 150){
     myState = 0;
     timer = 0;
   }

  break;
}
//end of switch statement


}
