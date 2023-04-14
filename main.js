function openPopup() {
    var popup = document.querySelector(".popup");
    popup.style.display = "block";
  }

  function closePopup() {
    var popup = document.querySelector(".popup");
    popup.style.display = "none";
  }

  var closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", closePopup);