var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1piCrfM4I2BW-5qDXccWNqDLk_4RKDfW7YFYa00aRH7Y'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Name, data[i].Pill));
  }

}


function draw() {
  background('yellow');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my circle class
function Circle(myName, myPill) {
  this.pos = createVector(random(width-50), random(height-50));
  this.name = myName;
  this.pill = myPill;
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  this.display = function() {
  //  fill(this.r, this.g, this.b);
  //  ellipse(this.pos.x, this.pos.y, 100, 100, );

    if (myPill == "Red") {
      fill('red');
      ellipse(this.pos.x, this.pos.y, 75, 38);
      fill('white');
      text(myName, this.pos.x, this.pos.y);
    }
    else if(myPill == "Blue"){
      fill('blue');
      ellipse(this.pos.x, this.pos.y, 75, 38);
      fill('white');
      text(myName, this.pos.x, this.pos.y);
    }



    // put an ellipse here


  }

}
