var myState = 0;
var timer = 0;
var playing = false;
var button;
var vid;
var vidLoad;
function setup() {
  createCanvas(800, 800);
  // put setup code here\
  vid = createVideo(
    ['assets/video3.mp4'],
    vidLoad
  );

  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
   centerButton();
}

function draw() {
  // put drawing code here

switch(myState){
  case 0:
  vid.hide();
  button.hide();
  background('red');
  textSize(28);
  text("Hello, welcome to my story. Here's where we begin...", 100, 250);
  //timer++; //=timer= timer + 1;
  //if (timer > 300){
  //  myState = 1;
  // timer = 0;
  //}

  break;

  case 1:

  background('green');
  textSize(28);
  text("There was once a boy named Ben.", 100, 250);
  timer++; //=timer= timer + 1;
  if (timer > 300){
    myState = 2;
    timer = 0;
}
  break;

  case 2:
  background('pink');
  textSize(28);
  text("He lived in a different town than he currently does.", 100, 250);
  timer++; //=timer= timer + 1;
  if (timer > 300){
    myState = 3;
    timer = 0;
  }
  break;


  case 3:
  background('purple');
  textSize(28);
  text("Then he moved.", 100, 250);
  timer++; //=timer= timer + 1;
  if (timer > 300){
    myState = 4;
    timer = 0;
  }
  break;

  case 4:
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
  if (myState > 4){
    myState = 0;
  }

}
}
function toggleVid() {

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
}
