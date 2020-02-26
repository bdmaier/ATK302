var vid;
var button;
var playing = false;
function setup() {
  noCanvas();

  vid = createVideo(
    ['assets/video3.mp4'],
    vidLoad
  );

  vid.size(800, 550);

  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
  }

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(10);
}


// plays or pauses the video depending on current state
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
