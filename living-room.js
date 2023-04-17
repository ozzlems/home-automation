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
const deleteBtnWifi = document.querySelector('#wifi-delete');
const card = document.querySelector('.card');

const wifiSet = document.getElementById("wifi-set");
const wifiPopup = document.getElementById("wifi-popup");
const closeWifiPopupButton = document.getElementById("close-wifi-popup-button");
const wifiSaveButton = document.getElementById("wifi-save-button");
const wifiSendButton = document.getElementById("wifi-send-button");
const wifiOnTimeInput = document.getElementById("wifi-on-time");
const wifiOffTimeInput = document.getElementById("wifi-off-time");
const wifiToggleSwitch = document.getElementById("wifi-toggle-switch");
const lightSwitch = document.getElementById("light-switch")
const lightSlider = document.getElementById("light-slider");
const deleteDoor = document.querySelector('#door-delete');
const doorPopup = document.getElementById("door-popup");
const closeDoorPopupButton = document.getElementById("close-door-popup-button");


const doorSet = document.getElementById("door-set");
const doorToggleSwitch = document.getElementById("door-toggle-switch");
const doorOnTime = document.getElementById("door-on-time");
const doorOffTime = document.getElementById("door-off-time");
const doorSaveButton = document.getElementById("door-save-button");
const doorSendButton = document.getElementById("door-send-button");


const electricPopup = document.getElementById("electric-popup");
const electricClose = document.getElementById("close-electric-popup-button");
const electricSetButton = document.getElementById("set-electric-button");
const electricInput = document.getElementById("electric-input");
const electricSendButton = document.getElementById("electric-send-button");

console.log(localStorage.getItem("temperature") + " is temperature  ");

electricSetButton.addEventListener("click", function() {
  electricPopup.style.display = "block";
});

electricClose.addEventListener("click", function() {
  electricPopup.style.display = "none";
});


electricSendButton.addEventListener("click", function() {
  // Get the user input from the input field
  const electricAmount = electricInput.value;

  // Do something with the electric amount, such as send it to a server
  console.log(`Sending electric amount of ${electricAmount}`);
 
  // Hide the popup
  electricPopup.style.display = "none";
  localStorage.setItem("electric",electricInput.value);
 
});


console.log(lightSet);
console.log(wifiSet);

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


function startDoorTimer(onTime, offTime) {
  clearInterval(intervalId);
  
  const now = new Date();
  const onTimeParts = onTime.split(":");
  const onDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(onTimeParts[0]), parseInt(onTimeParts[1]), 0);
  const offTimeParts = offTime.split(":");wifiToggleSwitch.onchange = function() {
    doorSendButton.disabled = true;
  }
  const offDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(offTimeParts[0]), parseInt(offTimeParts[1]), 0);
  
  if (onDateTime > now) {
    intervalId = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= onDateTime) {
        clearInterval(intervalId);
        alert("Door is locked on!");
      }
    }, 1000);
  } else if (offDateTime > now) {
    intervalId = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= offDateTime) {
        
        clearInterval(intervalId);
        alert("Wifi is locked off!");
      }
    }, 1000);
   
  } 
   else {
    alert("Invalid time settings.");
  }
}


function openDoorPopup() {
  doorPopup.style.display = "block";
}


closeDoorPopupButton.onclick = function() {
  doorPopup.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == doorPopup) {
    doorPopup.style.display = "none";
  }
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
      alert("Wifi will turn on at " + wifiOnTimeInput.value + " and turn off at " + wifiOffTimeInput.value );
      wifiSendButton.disabled = false;
    }, remainingSeconds * 1000);
  
  wifiSendButton.disabled = false;
}


doorSaveButton.onclick = function() {
  const DoorOnTime = doorOnTime.value;
  const DoorOffTime = doorOffTime.value;
  
  if (doorToggleSwitch.checked) {
    alert("Lock is already on!");
    return;
   }
    else{
    const offTime = new Date();
    offTime.setHours(parseInt(DoorOffTime.split(":")[0]));
    offTime.setMinutes(parseInt(DoorOffTime.split(":")[1]));
    offTime.setSeconds(0);
    
    const now = new Date();
    const remainingSeconds = (offTime.getTime() - now.getTime()) / 1000;
    
    setTimeout(function() {
      doorToggleSwitch.checked = false;
      doorSendButton.disabled = false;
    }, remainingSeconds * 1000); }
 
    // Set timer for turning on wifi
    const onTime = new Date();
    onTime.setHours(parseInt(doorOnTime));
    onTime.setMinutes(0);
    onTime.setSeconds(0);
    
    const now = new Date();
    const remainingSeconds = (onTime.getTime() - now.getTime()) / 1000;
    
    setTimeout(function() {
      alert("Door will be locked  at " + doorOnTime.value + " and be locked off at " + doorOffTime.value );
      doorSendButton.disabled = false;
    }, remainingSeconds * 1000);
  
  doorSendButton.disabled = false;
}


wifiSendButton.onclick = function() {
  // Send wifi status to server
  wifiPopup.style.display = "none";
  console.log("a");
  localStorage.setItem("wifiTime", wifiOffTimeInput.value + " - " + wifiOnTimeInput.value);
}

doorSendButton.onclick = function() {
  // Send wifi status to server
  doorPopup.style.display = "none";
  localStorage.setItem("doorTime", doorOnTime.value + " - " + doorOffTime.value);
}

deleteBtnLight.addEventListener('click', function() {
  this.closest('.card').remove();
});

deleteBtnWifi.addEventListener('click', function() {
  this.closest('.card').remove();
});

deleteDoor.addEventListener('click', function() {
  this.closest('.card').remove();
});

wifiToggleSwitch.addEventListener('change', function() {
  localStorage.setItem("wifiCheck", wifiToggleSwitch.checked);
  wifiSet.disabled = wifiToggleSwitch.checked;
});

doorToggleSwitch.addEventListener('change', function() {
  
  doorSet.disabled = doorToggleSwitch.checked;
});
lightSet.disabled = true;
lightSlider.addEventListener('change', function() {
  lightSet.disabled = !lightSlider.checked;
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
  localStorage.setItem("temperature",userInput);
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
  localStorage.setItem("humidity",userInput);
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
  localStorage.setItem("bright",userInput);
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
  localStorage.setItem("co2",userInput);
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



