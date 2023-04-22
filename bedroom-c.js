const tempRoot = document.getElementById("tempRoot");
const wifiRoot = document.getElementById("wifi-buttons");
const doorRoot = document.getElementById("door-buttons")
const humRoot = document.getElementById("humRoot");
const co2Root = document.getElementById("co2Root");
const brightRoot = document.getElementById("brightRoot");
const electricRoot = document.getElementById("electricRoot");
const speakerRoot = document.getElementById("speaker-root");
const colorCard = document.getElementById("speaker-card");
var temperature = localStorage.getItem("be-temperature");
var wifiString = localStorage.getItem("be-wifiTime");
var doorString = localStorage.getItem("be-doorTime");
var humidity = localStorage.getItem("be-humidity");
var co2 = localStorage.getItem("be-co2");
var wifiOn = localStorage.getItem("be-wifiCheck");
var bright = localStorage.getItem("be-bright");
var electric = localStorage.getItem("be-electric");
var doorOn = localStorage.getItem("be-doorCheck");
var lightOn = localStorage.getItem("be-lightCheck");
var color = localStorage.getItem("colorBedroom")
var smartOn = localStorage.getItem("smartOn");
var smartLevel = localStorage.getItem("smartLevel");

if(smartOn == "true")
smartOn = "ON"
else
smartOn = "OFF"

if(!smartLevel)
smartLevel = 0;

if(!color)
color = "#fff";
if(!doorOn)
doorOn = "OFF";
else
doorOn = "ON";

if(!wifiOn)
wifiOn = "OFF";
else
wifiOn = "ON";

if(!wifiString)
wifiString = "";

if(!doorString)
doorString = "";

if(doorOn == "ON"){
  doorString = " - ";
}

if(!temperature)
temperature = 0;

if(!humidity){
  humidity = 0;
}
if(!co2){
  co2 = 0;
}
if(!bright){
  bright=0;
}

if(!electric){
  electric = 0;
}

if(!lightOn)
lightOn = "OFF";
else
lightOn = "ON";
if(lightOn == "OFF")
bright = 0;

if(wifiOn == "ON"){
  wifiString = " - ";
}

tempRoot.innerHTML += '<h3>' + temperature + '</h3>';
wifiRoot.innerHTML +=  '<h4>' + " Open Between : " + wifiString + '</h4>';
humRoot.innerHTML += '<h3>' + humidity + '</h3>';
co2Root.innerHTML += '<h3>' + co2 + '</h3>';
wifiRoot.innerHTML +=  '<h3>' + wifiOn + '</h3>';
brightRoot.innerHTML += '<h3>' + "Brightness is % " +  bright + '</h3>';
doorRoot.innerHTML += '<h4>' + " Open Between : " + doorString + '</h4>';
doorRoot.innerHTML += '<h3>' + doorOn + '</h3>'
electricRoot.innerHTML += '<h3>' +  electric + " kWh"+ '</h3>';
brightRoot.innerHTML += '<h3>' + lightOn + '</h3>';
colorCard.style.backgroundColor = color;
speakerRoot.innerHTML += '<h4>' + smartOn + '</h4>'
speakerRoot.innerHTML += '<h4>' + "Volume: " + smartLevel + '</h4>'