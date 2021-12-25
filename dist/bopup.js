/**
 * Create PopUp
 * @param {Array|HTMLElement} btn button to show
 * @param {HTMLElement} popup PopUp node
 */
export default function bopup(btn, popup) {
  const closePopup = popup.querySelectorAll('.bopup-close-button');

  if (btn.length > 1) {
    btn.forEach(item => {
      item.addEventListener('click', () => {
        popup.classList.add('open');
        document.body.style.overflow = "hidden";
      })
    })
  } else {
    btn.addEventListener('click', () => {
      popup.classList.add('open');
      document.body.style.overflow = "hidden";
    })
  }

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


