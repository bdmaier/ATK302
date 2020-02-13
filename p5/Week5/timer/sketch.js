var timer = 200;
function setup() {
createCanvas(800, 800);
background('green');
  // put setup code here
}

function draw() {

  // put drawing code here
timer = timer - 1;
//timer-- works //
  if(timer <= 0) {
background(random(256), random(256), random(256));
timer = 200;
  }
}
