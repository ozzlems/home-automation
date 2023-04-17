const tempRoot = document.getElementById("tempRoot");
const wifiRoot = document.getElementById("wifi-buttons");
const doorRoot = document.getElementById("door-buttons")
const humRoot = document.getElementById("humRoot");
const co2Root = document.getElementById("co2Root");
const brightRoot = document.getElementById("brightRoot");
const electricRoot = document.getElementById("electricRoot");
var temperature = localStorage.getItem("temperature");
var wifiString = localStorage.getItem("wifiTime");
var doorString = localStorage.getItem("doorTime");
var humidity = localStorage.getItem("humidity");
var co2 = localStorage.getItem("co2");
var wifiOn = localStorage.getItem("wifiCheck");
var bright = localStorage.getItem("bright");
var electric = localStorage.getItem("electric");


if(!wifiOn)
wifiOn = "false";

if(!wifiString)
wifiString = "";

if(!doorString)
doorString = "";

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

tempRoot.innerHTML += '<h3>' + temperature + '</h3>';
wifiRoot.innerHTML +=  '<h4>' + " Open Between : " + wifiString + '</h4>';
humRoot.innerHTML += '<h3>' + humidity + '</h3>';
co2Root.innerHTML += '<h3>' + co2 + '</h3>';
wifiRoot.innerHTML +=  '<h3>' + wifiOn + '</h3>';
brightRoot.innerHTML += '<h3>' + "Brightness is % " +  bright + '</h3>';
doorRoot.innerHTML += '<h4>' + " Open Between : " + doorString + '</h4>';
electricRoot.innerHTML += '<h3>' +  electric + " kWh"+ '</h3>';