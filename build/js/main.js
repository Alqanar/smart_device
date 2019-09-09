'use strict';

var buttonConacts = document.querySelector('.main-header__button');
var popup = document.querySelector('.popup');
var popupClose = popup.querySelector('.popup__close');
var overlay = document.querySelector('.overlay');
var nameInut = popup.querySelector('#user-name');
var popupForm = popup.querySelector('form');
var telInput = popup.querySelector('#tel');
var questionTextarea = popup.querySelector('#question');

var ESC_CODE = 27;

var closePopup = function () {
  popup.classList.remove('popup--show');
  overlay.classList.remove('overlay--show');
  popup.classList.remove('popup--error');
};

buttonConacts.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup--show');
  overlay.classList.add('overlay--show');
  nameInut.focus();
});

popupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
});


window.addEventListener('keydown', function (event) {
  if (event.keyCode === ESC_CODE) {
    event.preventDefault();
    if (popup.classList.contains('popup--show')) {
      closePopup();
    }
  }
});

popupForm.addEventListener('submit', function (event) {
  if (!nameInut.value || !telInput.value || !questionTextarea.value) {
    event.preventDefault();
    popup.style.animationDuration = '0s';
    popup.classList.remove('popup--error');
    setTimeout(function () {
      popup.style.animationDuration = '0.6s';
      popup.classList.add('popup--error');
    }, 50);
  }
});

function ellipsizeTextBox(selector) {
  var el = document.querySelector(selector);
  var wordArray = el.innerHTML.split(' ');
  while (el.scrollHeight > el.offsetHeight) {
    wordArray.pop();
    el.innerHTML = wordArray.join(' ') + '..';
  }
}
setTimeout(function () {
  ellipsizeTextBox('.about-company__wrapper-text');
}, 50);

