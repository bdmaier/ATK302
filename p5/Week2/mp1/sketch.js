function setup() {
  // put setup code here
createCanvas(1000, 800);
rectMode(CENTER);
}

function draw() {
  // put drawing code here
  background(100);
  //stuff tat we always want to show
  if (mouseIsPressed) {
    //stuff that shows when the mouse is pressed

fill(0);
quad(420, 270, 580, 270, 630, 610, 370, 610);
    fill(255, 0, 0);
    fill('red');
    rect(500, 370, 160, 200);
    noStroke();
fill('#011160');
ellipse(500, 200, 90, 90);
rect(500, 253, 40, 35);
    fill('#E6D67E')
    arc(500, 212, 52, 42, TWO_PI, PI);

    ellipse(480, 190, 13, 13);
    ellipse(520, 190, 13, 13);
    quad(663, 133, 673, 117, 714, 138, 704, 153);
    quad(327, 117, 286, 138, 296, 153, 337, 133);
fill('red');
  arc(500, 214, 45, 35, TWO_PI, PI);


fill('red');
quad(675, 138, 695, 148, 600, 289, 570, 276);
quad(325, 138, 305, 148, 400, 289, 430, 276);
ellipse(615, 238, 80, 80);
ellipse(652, 188, 64, 64);
ellipse(385, 238, 80, 80);
ellipse(348, 188, 64, 64);
    fill('red');
    quad(579, 256, 612, 279, 580, 314, 567, 270);
    quad(388, 279, 421, 256, 433, 270, 420, 314);

fill('black');
    rect(472, 352, 14, 80);
    rect(530, 352, 14, 80);
    rect(500, 314, 120, 14);
    text("3.14", 470, 435);
    ellipse(480, 190, 8, 8);
    ellipse(520, 190, 8, 8);
    fill(255);
    arc(500, 215, 40, 30, TWO_PI, PI);

fill(0);
    rect(500, 270, 140, 10);
    fill('black');
    ellipse(625, 680, 110, 40);
    ellipse(370, 680, 110, 40);
fill('#011160');
  quad(530, 470, 580, 470, 610, 660, 570, 675);
  quad(470, 470, 420, 470, 385, 660, 425, 675);
  ellipse(560, 515, 90, 90);
  ellipse(572, 580, 75, 75);
  ellipse(440, 515, 90, 90);
  ellipse(428, 580, 75, 75);
stroke(0);
line(678, 128, 682, 121);
line(684, 142, 693, 127);
line(694, 148, 704, 133);
line(668, 124, 688, 134);
line(664, 132, 686, 140);

line(322, 128, 318, 121);
line(316, 142, 307, 127);
line(306, 148, 296, 133);
line(332, 124, 312, 134);
line(336, 132, 314, 140);
 } else {
   //when the mouse isn't pressed
fill(255, 0, 0);

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


 }
 fill(0);
 textSize(30);
  text(mouseX.toFixed(0) + ", " + mouseY.toFixed(0), mouseX + 50, mouseY + 50);

}
function mouseReleased() {
console.log(mouseX.toFixed(0) + "," + mouseY.toFixed(0));


}
