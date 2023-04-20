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
if(doorOn == "true")
doorOn = "ON";
else
doorOn = "OFF";

if(wifiOn == "true")
wifiOn = "ON";
else
wifiOn = "OFF";

if(!wifiString)
wifiString = "";

if(!doorString)
doorString = "";

if(doorOn == "ON"){
  doorString = " - ";
}

if(!temperature)
temperature = 25;

if(!humidity){
  humidity = 25;
}
if(!co2){
  co2 = 25;
}
if(!bright){
  bright=0;
}

if(!electric){
  electric = 0;
}

if(lightOn == "true")
lightOn = "ON";
else
lightOn = "OFF";
if(lightOn == "OFF")
bright = 0;

if(wifiOn == "ON"){
  wifiString = " - ";
}
speakerRoot.innerHTML += '<h4 style="color: red;">' + smartOn + '</h4>'
speakerRoot.innerHTML += '<h4 style="color: red;">' + "Volume: " + smartLevel + '</h4>'


tempRoot.innerHTML += '<h3 style="color: red;">' + temperature + '</h3>';
wifiRoot.innerHTML +=  '<h4 style="color: red;">' + " Open Between : " + wifiString + '</h4>';
humRoot.innerHTML += '<h3 style="color: red;">' + humidity + '</h3>';
co2Root.innerHTML += '<h3 style="color: red;">' + co2 + '</h3>';
wifiRoot.innerHTML +=  '<h3 style="color: red;">' + wifiOn + '</h3>';
brightRoot.innerHTML += '<h3 style="color: red;">' + "Brightness is % " +  bright + '</h3>';
doorRoot.innerHTML += '<h4 style="color: red;"' + " Open Between : " + doorString + '</h4>';
doorRoot.innerHTML += '<h3 style="color: red;">' + doorOn + '</h3>'
electricRoot.innerHTML += '<h3 style="color: red;">' +  electric + " kWh"+ '</h3>';
colorCard.style.backgroundColor = color;
brightRoot.innerHTML += '<h3 style="color: red;">' + lightOn + '</h3>';