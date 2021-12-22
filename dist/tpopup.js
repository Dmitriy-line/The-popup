"use strict";

function Modal(btn, popup) {
  var closePopup = document.querySelectorAll('.tpopup-close');
  this.btn = btn;
  this.popup = popup;

  if (btn.length > 1) {
    btn.forEach(function (item) {
      item.addEventListener('click', function () {
        popup.classList.add('open');
        document.body.style.overflow = "hidden";
      });
    });
  } else {
    btn.addEventListener('click', function () {
      popup.classList.add('open');
      document.body.style.overflow = "hidden";
    });
  }

  closePopup.forEach(function (item) {
    item.addEventListener('click', closeModal);
  });
  window.addEventListener('click', function (event) {
    if (event.target === popup) {
      closeModal();
    }
  });

  function closeModal() {
    popup.classList.remove('open');
    document.body.style.overflow = "";
  }
}