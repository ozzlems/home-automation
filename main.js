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




saveButton.onclick = function() {
  const minTemp = parseInt(document.getElementById("min").value);
  const maxTemp = parseInt(document.getElementById("max").value);
  if (isNaN(minTemp) || isNaN(maxTemp)) {
    alert("Please enter valid numbers for both min and max temperature!");
    return;
  }
  sendButton.disabled = false;
};
humiditySaveButton.onclick = function() {
  let userInput = parseInt(humidityInput.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for humidity!");
    return;
  }
  humiditySendButton.disabled = false;
};
co2SaveButton.onclick = function() {
  let userInput = parseInt(co2Input.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for humidity!");
    return;
  }
  co2SendButton.disabled = false;
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
humiditySendButton.onclick = function() {
  let userInput = parseInt(humidityInput.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for humidity!");
    return;
  }
  humiditySendButton.disabled = true;
  alert("User input: " + userInput);
};
co2SendButton.onclick = function() {
  let userInput = parseInt(co2Input.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for humidity!");
    return;
  }
  co2SendButton.disabled = true;
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

closeButton.addEventListener("click", closePopup);

window.onload = function() {
  document.getElementById("popup").style.display = "none";
}

humiditySetButton.addEventListener("click", function() {
  humidityPopup.style.display = "block";
});
co2SetButton.addEventListener("click", function() {
  co2Popup.style.display = "block";
});

closeHumidityPopupButton.addEventListener("click", function() {
  humidityPopup.style.display = "none";
});

closeco2PopupButton.addEventListener("click", function() {
  co2Popup.style.display = "none";
});

humiditySaveButton.addEventListener("click", function() {
  event.preventDefault();
 
});
co2SaveButton.addEventListener("click", function() {
  event.preventDefault();
 
});

humidityInput.addEventListener("input", function() {
  if (humidityInput.value !== "" || humidityInput.value < 0) {
    humiditySendButton.disabled = false;
  } else {
    humiditySendButton.disabled = true;
  }
});
co2.addEventListener("input", function() {
  if (co2Input.value !== "" || co2Input.value < 0) {
    co2SendButton.disabled = false;
  } else {
   co2SendButton.disabled = true;
  }
});

function openHumidityPopup() {
  
  humidityPopup.style.display = "block";
}

function openCo2Popup(){
  co2Popup.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == humidityPopup) {
    humidityPopup.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == co2Popup) {
    co2Popup.style.display = "none";
  }
}