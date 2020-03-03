var font1 ;
 function preload() {
   font1 = loadFont("assets/coolfont1.ttf")
 }
var myState = 0;
var timer = 0;
var playing = false;
var button;
var vid;
var vidLoad;
var w = 0;
var j = 0;
var nascar;
function setup() {
  createCanvas(800, 800);
  // put setup code here:
  // Video and button inserted with the help of the below website pages:
  //https://p5js.org/reference/#/p5/createVideo
  //https://p5js.org/examples/dom-video.html
  vid = createVideo(
    ['assets/video3.mp4'],
    vidLoad
  );

  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
   centerButton();
   nascar = loadImage("assets/image1.jpg");
}

function draw() {
  // put drawing code here
rectMode(CENTER);
switch(myState){
  case 0:
  textSize(28);
  fill('orange');

  vid.hide();
  button.hide();
  background('lightblue');
textFont(font1, 34);
  fill('black');
  text("Once upon a time there was a boy named Ben. He was a great", 12, 60);
  text("actor and even got to walk on down that red carpet a couple", 25, 90);
  text("of times.", 350, 120);
  textSize(46);
  text("Click the screen to continue", 150, 595);
  fill('red');
  rect(400, 700, 800, 200);

push();
translate(w, 0);
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
  w += 2 ; //or x = x + 5//
  if (w > width ){
  w = -500 ;
  }
  //timer++; //=timer= timer + 1;
  //if (timer > 300){
  //  myState = 1;
  // timer = 0;
  //}

  break;

  case 1:
background('lightblue');
fill('black');
text("But he was sad though. He was not satisfied with the ", 60, 60);
text("fame and fortune.", 275, 90);


  fill('#2F9308');
  rect(400, 700, 800, 200);
  textSize(34);
push();
translate(-85, 0);
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
     arc(500, 228, 45, 35, PI, TWO_PI);
   fill(255);
    arc(500, 227, 40, 30, PI, TWO_PI);

        fill('#8D4B01');
        ellipse(625, 680, 110, 40);
        ellipse(370, 680, 110, 40);
    fill(50);
      quad(530, 470, 580, 470, 610, 660, 570, 675);
      quad(470, 470, 420, 470, 385, 660, 425, 675);
pop();
  timer++; //=timer= timer + 1;
  if (timer > 300){
    myState = 2;
    timer = 0;
}
  break;

  case 2:
  background('yellow');
  textSize(44);
  fill('black');
  text("One day he ate some radioactive waffle fries", 45, 100);
  text("and he gained incredible powers.", 130, 130);
  image(nascar, 195, 200, 400, 400);
  timer++; //=timer= timer + 1;
  if (timer > 300){
    myState = 3;
    timer = 0;
  }
  break;


  case 3:
  background('lightblue');
  fill('black');
  textSize(34);
  text("He became the great Benji-Man,", 14, 200);
  text("protecting the citizens of Blono.", 8, 230);
  text("He hands out waffle fries to des-", 1, 260);
  text("erving children, kind of like Santa", 1, 290);
  text("Claus and how he delivers", 35, 320);
  text("presents to them.", 90, 350);

  fill('#2F9308');
  rect(400, 700, 800, 200);
  push();
  translate(100, j);
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
      //rect(472, 352, 14, 80);
      //rect(530, 352, 14, 80);
      //rect(500, 314, 120, 14);
      //text("3.14", 485, 435);
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
    textSize(28);
    pop();
  j += -4 ; //or x = x + 5//
  if (j < -700){
  j = 1000 ;
  }
  timer++; //=timer= timer + 1;
  if (timer > 650){
    myState = 4;
    timer = 0;
  }
  break;
  case 4:
background('lightblue');
fill('#2F9308');
rect(400, 700, 800, 200);
push();
translate(90, 0);
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
      arc(500, 225, 52, 42, PI, TWO_PI);
      ellipse(480, 190, 13, 13);
      ellipse(520, 190, 13, 13);
      quad(663, 133, 673, 117, 714, 138, 704, 153);
      quad(327, 117, 286, 138, 296, 153, 337, 133);
  fill('red');
    arc(500, 224, 45, 35, PI, TWO_PI);
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
    //  rect(472, 352, 14, 80);
    //  rect(530, 352, 14, 80);
      //rect(500, 314, 120, 14);
      //text("3.14", 485, 435);
      ellipse(480, 190, 8, 8);
      ellipse(520, 190, 8, 8);
      fill(255);
      arc(500, 223, 40, 30, PI, TWO_PI);

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
    pop();
  fill('black');
  textSize(34);
  text("Yet the superhero life was", 15, 170);
  text("also not satisfactory enough", 10, 200);
  text("for Ben...he was lonely. So", 10, 230);
  text("he set out to make more of", 10, 260);
  text("himself, so he wouldn't be so", 10, 290);
  text("lonely. And this is what he", 19, 320);
  text("ended up with...", 76, 350);
  timer++; //=timer= timer + 1;
  if (timer > 700){
    myState = 5;
    timer = 0;
  }
break;
  case 5:
//Video inserted with the help of the below website pages:
//https://p5js.org/reference/#/p5/createVideo
//https://p5js.org/examples/dom-video.html
noCanvas();
vid.show();
button.show();
  function vidLoad() {
    vid.loop();
    vid.volume(0);
  }
  text("Push play to play the video", 400, 600);
  vid.size(800, 550);
  timer++; //=timer= timer + 1;
  if (timer > 1000){
    myState = 0;
    timer = 0;
  }


  //background('yellow');
//  textSize(28);
  //text("The end.", 100, 250);

//  timer++; //=timer= timer + 1;
//  if (timer > 300){
  //  myState = 0;
    //timer = 0;
  break;

}
}
function mouseReleased(){
  if ((mouseX >0) && (mouseX <800) && (mouseY >0) && (mouseY <800)){

  myState = myState + 1;
  if (myState > 5){
    myState = 0;
  }

}
}
function toggleVid() {
  //Video inserted with the help of the below website pages:
  //https://p5js.org/reference/#/p5/createVideo
  //https://p5js.org/examples/dom-video.html
if (playing) {
  vid.pause();
  button.html('play');
} else {
  vid.loop();
  button.html('pause');
}

playing = !playing;
}
var cnv;

function centerButton() {
  var x = 390;
  var y = 505;
  button.position(x, y);
  //Centering of button done with the help of the following website:
  //https://github.com/processing/p5.js/wiki/Positioning-your-canvas
}


//function centerVideo() {
//  var x = 100;
//  var y = 400;
//  vid.position(x, y);
//}
