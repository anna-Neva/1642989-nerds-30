var popup = document.querySelector(".modal");
var openPopupButton = document.querySelector(".button-open");
var closePopupButton = popup.querySelector(".modal-close");

var sliders = document.querySelectorAll(".caption");
var sliderButtons = document.querySelectorAll(".slider-button");
console.log(sliders);

const form = popup.querySelector(".login-form");
const email = popup.querySelector("#contact-email");
const userName = popup.querySelector("#contact-name");
const letter = popup.querySelector("#contact-letter");

let isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("user-name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

openPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storageName) {
      userName.value = storageName;
      if (storageEmail) {
        email.value = storageEmail;
        letter.focus();
      } else {
        email.focus();
      }
    } else {
      userName.focus();
      if (storageEmail) {
        email.value = storageEmail;
      }
    }
});

closePopupButton.addEventListener("click", function () {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  email.value = "";
  userName.value = "";
  letter.value = "";
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("modal-show");
    loginPopup.classList.remove("modal-error");
    email.value = "";
    userName.value = "";
    letter.value = "";
  }
});

var clearActiveButton = function() {
  sliderButtons.forEach(function(button) {
    if (button.classList.contains("slider-button-current")) {
      button.classList.remove("slider-button-current");
    }
  });
};

var clearActiveSliders = function() {
  sliders.forEach(function(slider) {
    if (slider.classList.contains("caption-current")) {
      slider.classList.remove("caption-current");
    }
  });
};

sliderButtons.forEach(function(button, idx) {
  button.addEventListener("click", function() {
    if (!button.classList.contains("slider-button-current")) {
      clearActiveButton();
      clearActiveSliders();
      button.classList.add("slider-button-current");
      sliders[idx].classList.add("caption-current");
    }
  })
});

form.addEventListener("submit", function (evt) {
if (!userName.value || !email.value || !letter.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
   popup.offsetWidth = popup.offsetWidth;
   popup.classList.add("modal-error");
   }
    else if (isStorageSupport) {
    localStorage.setItem("user-name", userName.value);
    localStorage.setItem("email", email.value);
  }
});
