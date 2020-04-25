var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1eIYRlFIqTbdOi3DY0YuXtqHEg8WiVr3i4aKUeCjREvI'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff
  sausage = loadImage("assets/sausage.png");
  cheese = loadImage("assets/cheese.png");
  pepperoni = loadImage("assets/pepperoni.png");
  bacon = loadImage("assets/bacon.png");

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Name, data[i].Topping));
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
function Circle(myName, myTopping) {
  this.pos = createVector(random(50, 550), random(60, 570));
  this.name = myName;
  this.topping = myTopping;
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  this.display = function() {
  //  fill(this.r, this.g, this.b);
  //  ellipse(this.pos.x, this.pos.y, 100, 100, );
  textSize(30);
  fill('purple');
text("My google form survey results:", width/2, 30);

textSize(12);
    if (myTopping == "Cheese") {
      image(cheese, this.pos.x, this.pos.y, 110, 73);
      //fill('red');
      //ellipse(this.pos.x, this.pos.y, 75, 38);
      fill('white');
      text(myName, this.pos.x, this.pos.y + 10);
    }
    else if(myTopping == "Sausage"){
        image(sausage, this.pos.x, this.pos.y, 100, 63);
      //fill('blue');
      //ellipse(this.pos.x, this.pos.y, 75, 38);
      fill('white');
      text(myName, this.pos.x, this.pos.y + 4);
    }
    else if(myTopping == "Pepperoni"){
        image(pepperoni, this.pos.x, this.pos.y, 124, 73);
      //fill('yellow');
      //ellipse(this.pos.x, this.pos.y, 75, 38);
      fill('white');
      text(myName, this.pos.x, this.pos.y + 10);
    }
    else if(myTopping == "Bacon"){
        image(bacon, this.pos.x, this.pos.y, 100, 63);
      //fill('orange');
      //ellipse(this.pos.x, this.pos.y, 75, 38);
      fill('white');
      text(myName, this.pos.x, this.pos.y);
    }

    // put an ellipse here


  }

}
