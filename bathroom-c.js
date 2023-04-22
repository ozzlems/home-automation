const tempRoot = document.getElementById("tempRoot");
const wifiRoot = document.getElementById("wifi-buttons");
const doorRoot = document.getElementById("door-buttons")
const humRoot = document.getElementById("humRoot");
const co2Root = document.getElementById("co2Root");
const brightRoot = document.getElementById("brightRoot");
const electricRoot = document.getElementById("electricRoot");
const waterRoot = document.getElementById("waterRoot");
var temperature = localStorage.getItem("ba-temperature");
var wifiString = localStorage.getItem("ba-wifiTime");
var doorString = localStorage.getItem("ba-doorTime");
var humidity = localStorage.getItem("ba-humidity");
var co2 = localStorage.getItem("ba-co2");
var wifiOn = localStorage.getItem("ba-wifiCheck");
var bright = localStorage.getItem("ba-bright");
var electric = localStorage.getItem("ba-electric");
var doorOn = localStorage.getItem("ba-doorCheck");
var lightOn = localStorage.getItem("ba-lightSet");
var water = localStorage.getItem("ba-water");

if(!water)
water = 0;

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
electricRoot.innerHTML += '<h3>' +  electric + " kWh"+ '</h3>';
doorRoot.innerHTML += '<h3>' + doorOn + '</h3>';
brightRoot.innerHTML += '<h3>' + lightOn + '</h3>'
waterRoot.innerHTML += '<h3>' + water + ' kWh' + '</h3>'