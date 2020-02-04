var font1 ;
 function preload() {
   font1 = loadFont("assets/font1.otf")
 }

function setup() {
  createCanvas(800, 880);
  // put setup code here
}

function draw() {
fill('red');
  textFont(font1, 58);
  text("Why is this happening?", 100, 200);
  // put drawing code here
}
