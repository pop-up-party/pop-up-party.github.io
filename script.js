const revealed = document.querySelectorAll('[data-reveal]');
const adStorm = document.querySelector('.ad-storm');
const noSignal = document.querySelector('.no-signal');
const blackout = document.querySelector('.blackout');
const playAdStorm = () => {
  adStorm.classList.remove('active');
  void adStorm.offsetWidth;
  adStorm.classList.add('active');
};
const playTransition = (element, className) => {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'lineup') {
        playAdStorm();
        setTimeout(() => entry.target.classList.add('shown'), 580);
      } else if (entry.target.id === 'tickets') {
        playTransition(noSignal, 'active');
        setTimeout(() => entry.target.classList.add('shown'), 820);
      } else if (entry.target.id === 'location') {
        playTransition(blackout, 'active');
        setTimeout(() => entry.target.classList.add('shown'), 2000);
      } else {
        entry.target.classList.add('shown');
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.55 });
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
