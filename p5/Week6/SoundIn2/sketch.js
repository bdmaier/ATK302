var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('red');
push();
translate(y, 0);
fill('yellow');
rect(500, 370, 160, 200);
noStroke();
fill('#E6D67E')
ellipse(500, 200, 90, 90);
rect(500, 253, 40, 35);

 quad(550, 289, 580, 272, 685, 430, 665, 440);
 quad(420, 272, 450, 289, 345, 440, 325, 430 );

 quad(685, 429, 705, 434, 702, 437, 680, 432);
 quad(680, 432, 705, 442, 703, 445, 675, 435);
 quad(675, 435, 700, 451, 697, 454, 670, 437);
 quad(670, 436, 692, 457, 689, 460, 665, 439);
 quad(667, 437, 679, 458, 674, 462, 664, 438);

 quad(305, 434, 325, 429, 330, 432, 307, 437);
 quad(303, 442, 330, 432, 335, 435, 305, 445);
 quad(307, 451, 335, 435, 340, 437, 309, 454);
 quad(318, 458, 339, 437, 345, 439, 321, 460);
 quad(334, 459, 341, 439, 347, 437, 339, 461);

fill('yellow');
 quad(545, 286, 580, 270, 619, 322, 587, 344);
 quad(420, 270, 451, 287, 414, 348, 382, 328);
fill(0);
 ellipse(480, 190, 8, 8);
 ellipse(520, 190, 8, 8);
 fill('red');
   arc(500, 214, 45, 35, TWO_PI, PI);
 fill(255);
  arc(500, 215, 40, 30, TWO_PI, PI);

      fill('#8D4B01');
      ellipse(625, 680, 110, 40);
      ellipse(370, 680, 110, 40);
  fill(50);
    quad(530, 470, 580, 470, 610, 660, 570, 675);
    quad(470, 470, 420, 470, 385, 660, 425, 675);

  pop();
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
