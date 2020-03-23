var cars = [];
function setup() {
  createCanvas(800, 800);

    // put setup code here
    for (var i = 0; i < 20; i ++){
      cars.push(new Car);
    }


}

function draw() {
background('lightblue');
for (var i = 0; i < cars.length; i ++){
cars[i].display();
cars[i].drive();

}
  // put drawing code here

}

function Car(){
//atributes
this.pos= createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5,5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.w = random(20, 240);
//methods
this.display = function (){
  fill(this.r, this.g, this.b);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
}

this.drive = function(){
this.pos.add(this.vel);
    //Normal= code phrase 1
    //Spider-Man= code phrase 2
    //Making Videos with friends code phrase 3
    //Oh, she means add another attribute
    //Pizza= code phrase 4
if(this.pos.x > width) this.pos.x = 0;
if (this.pos.x <0) this.pos.x = width;
if (this.pos.y > height) this.pos.y = 0;
if (this.pos.y <0) this.pos.y = height;

}

}
