function modal(btn, popup) {
  const closePopup = document.querySelectorAll('.the-popup-close');
  btn = btn;
  popup = popup;

  btn.addEventListener('click', () => {
    popup.classList.add('open');
    document.body.style.overflow = "hidden";
  })

  closePopup.forEach(item => {
    item.addEventListener('click', closeModal);
  })

  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      closeModal()
    }
  })

  function closeModal() {
    popup.classList.remove('open');
    document.body.style.overflow = "";
  }

}

