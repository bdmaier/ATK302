var chicken ;
var chicken2 ;
var chicken3 ;

function setup() {
  // put setup code here
createCanvas(800, 800);
chicken = loadImage("assets/chicken.jpeg");
chicken2 = loadImage("assets/chicken2.jpg");
chicken3 = loadImage("assets/chicken3.jpg");
}

function draw() {
  image(chicken, 0, 0, 200, 200);
  image(chicken2, 0, 200, 200, 200);
  image(chicken3, 0, 400, 200, 200);
    // put drawing code here
}
