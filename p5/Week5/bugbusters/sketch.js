
var state = 0;


function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {

  switch(state) {
    case 0:
    background(255, 0, 0);
    fill('white');
    textSize(100);
    text("case 0", 220, height/2);
    break;

    case 1:
      background(0, 255, 0);
      fill('black');
      textSize(100);
      text("case 1", 220, height/2);
      break;

      case 2:
    background(0, 0, 255);
    fill('gold');
    textSize(100);
    text("case 2", 220, height/2);
break;
    case 3:
  background(0, 255, 255);
  fill('orange');
  textSize(100);
  text("case 3", 220, height/2);
  break;
      case 4:
    background(166, 120, 63);
    fill('magenta');
    textSize(100);
    text("case 4", 220, height/2);
    break;
        case 5:
      background(45, 220, 149);
      fill('purple');
      textSize(100);
      text("case 5", 220, height/2);
}
}

function mouseReleased() {
  // add one to myState
  // if myState got past 2, reset it to 0
  state = state + 1;

  if (state > 5)
   {
    state = 0;
  }

}
