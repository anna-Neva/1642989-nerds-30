var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.button-open');
var closePopupButton = popup.querySelector('.modal-close');

var sliders = document.querySelectorAll('.caption');
var sliderButtons = document.querySelectorAll('.slider-button');
console.log(sliders);

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal-show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal-show');
  }
});

var clearActiveButton = function() {
  sliderButtons.forEach(function(button) {
    if (button.classList.contains('slider-button-current')) {
      button.classList.remove('slider-button-current');
    }
  });
};

var clearActiveSliders = function() {
  sliders.forEach(function(slider) {
    if (slider.classList.contains('caption-current')) {
      slider.classList.remove('caption-current');
    }
  });
};

sliderButtons.forEach(function(button, idx) {
  button.addEventListener('click', function() {
    if (!button.classList.contains('slider-button-current')) {
      clearActiveButton();
      clearActiveSliders();
      button.classList.add('slider-button-current');
      sliders[idx].classList.add('caption-current');
    }
  })
});
