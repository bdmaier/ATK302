var song1, song2, song3;
var myState = 0;

function preload() {
  song1 = loadSound('assets/donkey.mp3');
  song2 = loadSound('assets/skate.mp3');
  song3 = loadSound('assets/thrill.mp3');

  song1.loop();//if doesn't work, remove these all these and place them in setup, save, run it, and then put them back in and run them.
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();

}

function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);


}

function draw() {
switch(myState){
  case 0:
    song1.play();  // this is what starts the sound
    myState = 1;
  break;

  case 1: //hang out and listen to song1
  break;

  case 2:
    song2.play();  // this is what starts the sound
    myState = 3;
  break;

  case 3:
  break;

  case 4:
    song3.play();  // this is what starts the sound
    myState = 5;
  break;

  case 5:
  break;

}
}
function mouseReleased(){
  myState = myState + 1;
  if(myState > 5){
    myState = 0;
  }
song1.pause();
song2.pause();
song3.pause();
}

function touchStarted() {
  getAudioContext().resume();
}
