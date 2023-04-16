const saveButton = document.getElementById("save-button");
const closeButton = document.querySelector(".close-button");
const popup = document.getElementById("popup");
const sendButton = document.getElementById("send-button");
const minInput = popup.querySelector("#min");
const maxInput = popup.querySelector("#max");
const input = popup.querySelector("#input");
const humidityPopup = document.getElementById("humidity-popup");
const closeHumidityPopupButton = document.getElementById("close-humidity-popup-button");
const humiditySetButton = document.getElementById("set-humidity-button");
const humidityInput = document.getElementById("humidity-input");
const humiditySaveButton = document.getElementById("humidity-save-button");
const humiditySendButton = document.getElementById("humidity-send-button");
const co2Popup = document.getElementById("co2-popup");
const closeco2PopupButton = document.getElementById("close-co2-popup-button");
const co2SetButton = document.getElementById("set-co2-button");
const co2Input = document.getElementById("co2-input");
const co2SaveButton = document.getElementById("co2-save-button");
const co2SendButton = document.getElementById("co2-send-button");
const lightPopup = document.getElementById("light-popup");
const closelight = document.getElementById("close-light-popup-button");
const lightSet = document.getElementById("set-light-button");
const lightInput = document.getElementById("light-input");
const lightSave = document.getElementById("light-save-button");
const lightSend = document.getElementById("light-send-button");
const deleteBtnLight = document.querySelector('#light-delete');
const deleteBtnWifi = document.querySelector('#wifi-delete')
const card = document.querySelector('.card');
const wifiSet = document.getElementById("wifi-set");
const wifiPopup = document.getElementById("wifi-popup");
const closeWifiPopupButton = document.getElementById("close-wifi-popup-button");
const wifiSaveButton = document.getElementById("wifi-save-button");
const wifiSendButton = document.getElementById("wifi-send-button");
const wifiOnTimeInput = document.getElementById("wifi-on-time");
const wifiOffTimeInput = document.getElementById("wifi-off-time");
const wifiToggleSwitch = document.getElementById("wifi-toggle-switch");

let intervalId;

function startWifiTimer(onTime, offTime) {
  clearInterval(intervalId);
  
  const now = new Date();
  const onTimeParts = onTime.split(":");
  const onDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(onTimeParts[0]), parseInt(onTimeParts[1]), 0);
  const offTimeParts = offTime.split(":");wifiToggleSwitch.onchange = function() {
    wifiSendButton.disabled = true;
  }
  const offDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(offTimeParts[0]), parseInt(offTimeParts[1]), 0);
  
  if (onDateTime > now) {
    intervalId = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= onDateTime) {
        clearInterval(intervalId);
        alert("Wifi is turned on!");
      }
    }, 1000);
  } else if (offDateTime > now) {
    intervalId = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= offDateTime) {
        
        clearInterval(intervalId);
        alert("Wifi is turned off!");
      }
    }, 1000);
   
  } 
   else {
    alert("Invalid time settings.");
  }
}




function openWifiPopup() {
  wifiPopup.style.display = "block";
}

closeWifiPopupButton.onclick = function() {
  wifiPopup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == wifiPopup) {
    wifiPopup.style.display = "none";
  }
}

wifiSaveButton.onclick = function() {
  const wifiOnTime = wifiOnTimeInput.value;
  const wifiOffTime = wifiOffTimeInput.value;
  
  if (wifiToggleSwitch.checked) {
    alert("Wifi is already turned on!");
    return; }
    else{
    const offTime = new Date();
    offTime.setHours(parseInt(wifiOffTime.split(":")[0]));
    offTime.setMinutes(parseInt(wifiOffTime.split(":")[1]));
    offTime.setSeconds(0);
    
    const now = new Date();
    const remainingSeconds = (offTime.getTime() - now.getTime()) / 1000;
    
    setTimeout(function() {
      wifiToggleSwitch.checked = false;
      wifiSendButton.disabled = false;
    }, remainingSeconds * 1000); }
 
    // Set timer for turning on wifi
    const onTime = new Date();
    onTime.setHours(parseInt(wifiOnTime));
    onTime.setMinutes(0);
    onTime.setSeconds(0);
    
    const now = new Date();
    const remainingSeconds = (onTime.getTime() - now.getTime()) / 1000;
    
    setTimeout(function() {
      
      wifiSendButton.disabled = false;
    }, remainingSeconds * 1000);
  
  wifiSendButton.disabled = false;
}




wifiSendButton.onclick = function() {
  // Send wifi status to server
  wifiPopup.style.display = "none";
}

deleteBtnLight.addEventListener('click', function() {
  this.closest('.card').remove();
});

deleteBtnWifi.addEventListener('click', function() {
  this.closest('.card').remove();
});


wifiToggleSwitch.addEventListener('change', function() {
  
  wifiSet.disabled = wifiToggleSwitch.checked;
});



saveButton.onclick = function() {
  const minTemp = parseInt(document.getElementById("min").value);
  const maxTemp = parseInt(document.getElementById("max").value);
  if (isNaN(minTemp) || isNaN(maxTemp)) {
    alert("Please enter valid numbers for both min and max temperature!");
    return;
  }
  sendButton.disabled = false;
};
sendButton.onclick = function() {
  let minTemp = document.getElementById("min").value;
  let maxTemp = document.getElementById("max").value;
  let userInput = parseInt(input.value);
  if (userInput < minTemp || userInput > maxTemp) {
    alert("Please enter a value between " + minTemp + " and " + maxTemp);
    return;
  }
  sendButton.disabled = true;
  alert("User input: " + userInput);
};

function openPopup() {
  event.preventDefault();
  popup.style.display = "block";
}

function closePopup() {
  event.preventDefault();
  popup.style.display = "none";
}
window.onload = function() {
  document.getElementById("popup").style.display = "none";
}



humiditySaveButton.onclick = function() {
  let userInput = parseInt(humidityInput.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for humidity!");
    return;
  }
  humiditySendButton.disabled = false;
};

humiditySendButton.onclick = function() {
  let userInput = parseInt(humidityInput.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for humidity!");
    return;
  }
  humiditySendButton.disabled = true;
  alert("User input: " + userInput);
};

humiditySetButton.addEventListener("click", function() {
  humidityPopup.style.display = "block";
});


closeHumidityPopupButton.addEventListener("click", function() {
  humidityPopup.style.display = "none";
});


humidityInput.addEventListener("input", function() {
  if (humidityInput.value !== "" || humidityInput.value < 0) {
    humiditySendButton.disabled = false;
  } 
  humiditySendButton.disabled = true;
});







function openHumidityPopup() {
  
  humidityPopup.style.display = "block";
}

co2SaveButton.onclick = function() {
  let userInput = parseInt(co2Input.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for humidity!");
    return;
  }
  co2SendButton.disabled = false;
};

 lightSave.onclick = function() {
  let userInput = parseInt(lightInput.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for brigtness!");
    return;
  }
 lightSave.disabled = false;
 lightSend.disabled = false;
};


lightSend.onclick = function() {
  let userInput = parseInt(lightInput.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for humidity!");
    return;
  }
 lightSend.disabled = true;
  alert("User input: " + userInput);
};

lightInput.addEventListener("input", function() {
  if (lightInput.value !== "" ||lightInput.value < 0) {
   lightSave.disabled = false; 
  } else {
    lightSave.disabled = true;
  }
});



co2SendButton.onclick = function() {
  let userInput = parseInt(co2Input.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for humidity!");
    return;
  }
  co2SendButton.disabled = true;
  alert("User input: " + userInput);
};





function closeco2Popup(){
  event.preventDefault();
 co2Popup.style.display = "none";
}

closelight.addEventListener("click", function() {
 lightPopup.style.display = "none";
});


closeButton.addEventListener("click", closePopup);
closeco2PopupButton.addEventListener("click" , closeco2Popup);

co2SetButton.addEventListener("click", function() {
  co2Popup.style.display = "block";
});
lightSet.addEventListener("click", function() {
  lightPopup.style.display = "block";
});



co2Input.addEventListener("input", function() {
  if (co2Input.value !== "" || co2Input.value < 0) {
    co2SendButton.disabled = false;
    co2SetButton.disabled = false;
  } else {
   co2SendButton.disabled = true;
   co2SetButton.disabled = true;
  }
});



function openCo2Popup(){
  co2Popup.style.display = "block";
}

function openLightPopup(){
  lightPopup.style.display = "block";
}

closeco2PopupButton.addEventListener("click", function() { co2Popup.style.display = "none"; });

window.onclick = function(event) {
  if (event.target == humidityPopup) {
    humidityPopup.style.display = "none";
  } else if (event.target == co2Popup) {
    co2Popup.style.display = "none";
  }
  else if (event.target == lightPopup) {
  lightPopup.style.display = "none"; }

  
}
