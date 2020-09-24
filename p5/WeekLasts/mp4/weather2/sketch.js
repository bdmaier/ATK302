var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var temperature = 0;
var srtime;
var sstime;
var ctime;
var pressure;
var link1;
var winddir;

function setup() {
  background('lightblue');
  createCanvas(700, 700);
  ellipseMode(CENTER);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61761,us&units=imperial&';
  var myIDString = 'appid=ef4bcaeffd5ba5f8e0ee7102d8537d7c'; // Take out the x’s and ADD YOUR ID!!! Done
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.
  var link1 = createA('https://www.accuweather.com/en/us/normal/61761/weather-radar/2241593', 'Normal, IL Radar', '_blank');
}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  temperature = weather.main.temp;
  srtime = weather.sys.sunrise;
  sstime = weather.sys.sunset;
  ctime = weather.dt;
  pressure = weather.main.pressure;
  winddir = weather.wind.deg;
  vis = weather.visibility;
  mainTemp = weather.main.temp;
  celMaxTemp = weather.main.temp_max;
  celMinTemp = weather.main.temp_min;
  celFeelsLike= weather.main.feels_like;
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
        var pad = function(input) {
          return input < 10 ? "0" + input : input;
        };
        var date = srtime ? new Date(srtime * 1000) : new Date();
        return [
          pad(date.getHours()),
          pad(date.getMinutes()),
          pad(date.getSeconds())
        ].join(typeof separator !== 'undefined' ? separator : ':');
      }
      var convertTime2 = function(sstime, separator) {
        var pad = function(input) {
          return input < 10 ? "0" + input : input;
        };
        var date = sstime ? new Date(sstime * 1000) : new Date();
        return [
          pad(date.getHours()),
          pad(date.getMinutes()),
          pad(date.getSeconds())
        ].join(typeof separator !== 'undefined' ? separator : ':');
      }
      var convertTime3 = function(ctime, separator) {
        var pad = function(input) {
          return input < 10 ? "0" + input : input;
        };
        var date = ctime ? new Date(ctime * 1000) : new Date();
        return [
          pad(date.getHours()),
          pad(date.getMinutes()),
          pad(date.getSeconds())
        ].join(typeof separator !== 'undefined' ? separator : ':');
      }
      //Thanks to Ashish Gupta on stackoverflow.com for the code on how to turn my timestamp into a date and 24-hour time format time.
      var timestamp = ctime; // replace your timestamp
      var date = new Date(timestamp * 1000);
      var formattedDate = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + '  ' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2) + '/' + date.getFullYear();
      //console.log(formattedDate);
      //":" + ('0' + date.getSeconds()).slice(-2) +
      var press = pressure / 68.948;
      var pressmerc = pressure / 33.864;
      var visibility = vis / 1609;
      var sTemp = (mainTemp-32)/1.8;
      var maxTemp = (celMaxTemp-32)/1.8;
      var minTemp = (celMinTemp-32)/1.8;
      var feelsLike = (celFeelsLike-32)/1.8;
      var pressatm = pressure / 1013.25;
      textStyle(BOLD);
      var textTemp = "Temperature: ";
      textStyle(NORMAL);
      fill('black');
      background('lightblue');
      textSize(38);
      textAlign(CENTER);
      text("How does the weather look today?!?", 350, 40);
      textSize(30);
      text("Weather in " + weather.name + ", " + weather.sys.country, 350, 80);
      textSize(20);
      textAlign(LEFT);

      text("Temperature: " + weather.main.temp + "°F("+ sTemp.toFixed(2) + "°C)\n" + "High of: " + weather.main.temp_max + "°F(" + maxTemp.toFixed(2) + "°C)" + "  Low of: " + weather.main.temp_min + "°(" + minTemp.toFixed(2) + "°C)", 30, 250);
      text("FEELS like: " + weather.main.feels_like + "°F(" + feelsLike.toFixed(2) + "°C)", 30, 300);
      text("Humidity: " + weather.main.humidity + "%.", 30, 330);
      text("Wind speed: " + weather.wind.speed + "mph, with gusts of up to " + weather.wind.gust + "mph.", 30, 360);
      text("Sunrise time: " + convertTime(srtime) + ".", 30, 390);
      text("Sunset time: " + convertTime2(sstime) + ".", 30, 420);
      text("Weather: " + weather.weather[0].description, 30, 450);
      text("Pressure: " + press.toFixed(2) + "psi/" + pressmerc.toFixed(2) + "inHg/" + pressure + "mb/" + pressatm.toFixed(4) + "atm", 30, 480);
      text("Visibility: " + visibility.toFixed(2) + "mi", 30, 510);
      text("Coordinates of " + weather.name + ": " + weather.coord.lon + " W LONG, " + weather.coord.lat + " N LAT", 30, 540);
      text("ID of " + weather.name + ": " + weather.sys.id, 30, 570);
      //text('link1', 30, 570);
      text(formattedDate, 30, 670);
      fill('white');
      noStroke();
      ellipse(x, 140, 100, 50);
      ellipse(x + 32, 160, 100, 50);
      ellipse(x - 32, 160, 100, 50);
      ellipse(x, 180, 100, 50);
      fill('black');
      if (winddir > 22.5 && winddir < 67.5) {
        text("Wind From: NE", 30, 600);
      } else
      if (winddir >= 0 && winddir <= 22.5) {
        text("Wind From: N", 30, 600);
      } else
      if (winddir >= 67.5 && winddir <= 112.5) {
        text("Wind From: E", 30, 600);
      } else
      if (winddir > 112.5 && winddir < 157.5) {
        text("Wind From: SE", 30, 600);
      } else
      if (winddir >= 157.5 && winddir <= 202.5) {
        text("Wind From: S", 30, 600);
      } else
      if (winddir > 202.5 && winddir < 247.5) {
        text("Wind From: SW", 30, 600);
      } else
      if (winddir >= 247.5 && winddir <= 292.5) {
        text("Wind From: W", 30, 600);
      } else
      if (winddir > 292.5 && winddir < 337.5) {
        text("Wind From: NW", 30, 600);
      } else
      if (winddir >= 337.5 && winddir <= 360) {
        text("Wind From: N", 30, 600);
      }

      x = x + ws / 5;
      if (x > width) x = -100;
      //fill('red');
      //var tmp = 0;
      //tmp = map(temperature, -20, 100, 2, height - 40);
      //rect(width - 40, height - 10, 30, -tmp);

      if (temperature < 60) {
        fill('blue');
        var tmp = 0;
        tmp = map(temperature, -20, 100, 2, height - 80);
        rect(width - 50, height - 10, 30, -tmp);
        ellipse(width - 35, 670, 60, 60);

      } else if (temperature >= 60) {
        fill('red');
        var tmp = 0;
        tmp = map(temperature, -20, 100, 2, height - 80);
        rect(width - 50, height - 10, 30, -tmp);
        ellipse(width - 35, 670, 60, 60);


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
