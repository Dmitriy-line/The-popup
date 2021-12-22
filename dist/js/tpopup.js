"use strict";

function modal(btn, popup) {
  var closePopup = document.querySelectorAll('.tpopup-close');
  btn = btn;
  popup = popup;
  btn.addEventListener('click', function () {
    popup.classList.add('open');
    document.body.style.overflow = "hidden";
  });
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