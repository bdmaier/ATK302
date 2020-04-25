var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var temperature = 0;
var srtime;
var sstime;


function setup() {
  background('lightblue');
  createCanvas(700, 700);
  ellipseMode(CENTER);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61741,us&units=imperial&';
  var myIDString = 'appid=ef4bcaeffd5ba5f8e0ee7102d8537d7c'; // Take out the x’s and ADD YOUR ID!!! Done
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  temperature = weather.main.temp;
  srtime = weather.sys.sunrise;
  sstime = weather.sys.sunset;
  //weathdes = weather.weather.description;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:

//Thank you to John Slegers on stackoverflow.com for the code on how to convert the timestamps given for sunrise and sunset times from Open Weather to a readable 24-hour format time.
    var convertTime = function(srtime, separator) {
    var pad = function(input) {return input < 10 ? "0" + input : input;};
    var date = srtime ? new Date(srtime * 1000) : new Date();
    return [
        pad(date.getHours()),
        pad(date.getMinutes()),
        pad(date.getSeconds())
    ].join(typeof separator !== 'undefined' ?  separator : ':' );
}
var convertTime2 = function(sstime, separator) {
var pad = function(input) {return input < 10 ? "0" + input : input;};
var date = sstime ? new Date(sstime * 1000) : new Date();
return [
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds())
].join(typeof separator !== 'undefined' ?  separator : ':' );
}
      fill('black');
      background('lightblue');
      textSize(38);
      textAlign(CENTER);
      text("How does the weather look today?!?", 350, 40);
      textSize(30);
      text("Weather in " + weather.name + ", " + weather.sys.country, 350, 80);
      textSize(20);
      textAlign(LEFT);
      text("The temperature is currently " + weather.main.temp + "° Fahrenheit, with a high of \n" + weather.main.temp_max + "° and a low of " + weather.main.temp_min + "°.", 30, 250);
      text("It currently FEELS like " + weather.main.feels_like + "° Fahrenheit though.", 30, 300);
      text("The humidity level is " + weather.main.humidity + "%.", 30, 330);
      text("The wind speed is " + weather.wind.speed + "mph, with gusts of up to " + weather.wind.gust + "mph.", 30, 360);
      text("Sunrise time: " + convertTime(srtime) + ".", 30, 390);
      text("Sunset time: " + convertTime2(sstime) + ".", 30, 420);
      text("Weather is: " + weather.weather[0].description, 30, 450);
      text("Coordinates of " + weather.name + ": " + weather.coord.lon + ", " + weather.coord.lat, 30, 480);
      text("ID of " + weather.name + ": " + weather.sys.id, 30, 510);
      fill('white');
      noStroke();
      ellipse(x, 140, 100, 50);
      ellipse(x + 32, 160, 100, 50);
      ellipse(x - 32, 160, 100, 50);
      ellipse(x, 180, 100, 50);


      x = x + ws / 4;
      if (x > width) x = -100;
      //fill('red');
      //var tmp = 0;
      //tmp = map(temperature, -20, 100, 2, height - 40);
      //rect(width - 40, height - 10, 30, -tmp);

      if (temperature <= 49) {
        fill('blue');
        var tmp = 0;
        tmp = map(temperature, -20, 100, 2, height - 80);
        rect(width - 50, height - 10, 30, -tmp);
        ellipse(width-35, 670, 60, 60);

      } else if (temperature >= 50) {
        fill('red');
        var tmp = 0;
        tmp = map(temperature, -20, 100, 2, height - 80);
        rect(width - 50, height - 10, 30, -tmp);
        ellipse(width-35, 670, 60, 60);


        //var s = new Date(sstime).toLocaleTimeString("en-US")
        // expected output "3:19:27 PM"
        //console.log(s)
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        //var date = new Date(sstime * 1000);
        // Hours part from the timestamp
        //var hours = date.getHours();
        // Minutes part from the timestamp
        //var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        //var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        //var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        //console.log(formattedTime);
      }
      // parse the weather object and put some text or images using at least 3 different weather data!
      break;

  }
}
