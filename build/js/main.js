'use strict';

var buttonConacts = document.querySelector('.main-header__button');
var popup = document.querySelector('.popup');
var popupClose = popup.querySelector('.popup__close');
var overlay = document.querySelector('.overlay');
var nameInut = popup.querySelector('#user-name');
var popupForm = popup.querySelector('form');
var telInput = popup.querySelector('#tel-popup');
var questionTextarea = popup.querySelector('#question-popup');
var body = document.querySelector('body');

var footer = document.querySelector('.main-footer');
var menuContainer = footer.querySelector('.main-footer__menu');
var menuTitle = menuContainer.querySelector('h3');
var contactsContainer = footer.querySelector('.main-footer__office');
var contactsTitle = contactsContainer.querySelector('.main-footer__office h3');

var ESC_CODE = 27;

var closePopup = function () {
  popup.classList.remove('popup--show');
  overlay.classList.remove('overlay--show');
  popup.classList.remove('popup--error');
  body.style.overflow = 'auto';
  body.style.height = 'initial';
};

buttonConacts.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('popup--show');
  overlay.classList.add('overlay--show');
  body.style.overflow = 'hidden';
  body.style.height = '211.7vw';
  nameInut.focus();
});

popupClose.addEventListener('click', function (event) {
  event.preventDefault();
  closePopup();
});

overlay.addEventListener('click', function (event) {
  event.preventDefault();
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


var toggleClass = function (title, container, className) {
  title.addEventListener('click', function (event) {
    event.preventDefault();
    container.classList.toggle(className);
  });
};

toggleClass(menuTitle, menuContainer, 'main-footer__menu--open');
toggleClass(contactsTitle, contactsContainer, 'main-footer__office--open');
