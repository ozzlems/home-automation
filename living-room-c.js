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
var doorOn = localStorage.getItem("doorCheck");
var lightOn = localStorage.getItem("lightCheck");


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

if(lightOn == "true")
lightOn = "ON";
else
lightOn = "OFF";
if(lightOn == "OFF")
bright = 0;

if(wifiOn == "ON"){
  wifiString = " - ";
}

tempRoot.innerHTML += '<h3 style="color: red;">' + temperature + '</h3>';
wifiRoot.innerHTML +=  '<h4 style="color: red;">' + " Open Between : " + wifiString + '</h4>';
humRoot.innerHTML += '<h3 style="color: red;">' + humidity + '</h3>';
co2Root.innerHTML += '<h3 style="color: red;">' + co2 + '</h3>';
wifiRoot.innerHTML +=  '<h3 style="color: red;">' + wifiOn + '</h3>';
brightRoot.innerHTML += '<h3 style="color: red;">' + "Brightness is % " +  bright + '</h3>';
doorRoot.innerHTML += '<h4 style="color: red;"' + " Open Between : " + doorString + '</h4>';
doorRoot.innerHTML += '<h3 style="color: red;">' + doorOn + '</h3>'
electricRoot.innerHTML += '<h3 style="color: red;">' +  electric + " kWh"+ '</h3>';
brightRoot.innerHTML += '<h3 style="color: red;">' + lightOn + '</h3>';