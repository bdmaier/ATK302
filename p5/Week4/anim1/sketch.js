var x = 1;
function setup() {
  createCanvas(800, 800);
  // put setup code here
}

function draw() {
  background('red');
  ellipse(x, 100, 100, 100);
//  x = x + 10 ;
 x = (x + 10) % width;
  //or...[if (x > width){
    //x = -300}]

  // put drawing code here
}
