const revealed = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('shown');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealed.forEach((item) => observer.observe(item));

const popups = [...document.querySelectorAll('.popup')];
const revealPopup = (id) => document.getElementById(id)?.classList.add('visible');
setTimeout(() => revealPopup('popup-sale'), 7500);
let scrollPopupShown = false;
addEventListener('scroll', () => {
  if (!scrollPopupShown && scrollY > innerHeight * 0.7) {
    scrollPopupShown = true;
    setTimeout(() => revealPopup('popup-noise'), 900);
  }
}, { passive: true });
popups.forEach((popup) => popup.querySelector('.popup-close').addEventListener('click', () => popup.remove()));
document.querySelectorAll('.popup-link').forEach((link) => link.addEventListener('click', () => link.closest('.popup')?.remove()));
