const textMobile = document.querySelector('[data-text-mobile]');
const textDesktop = document.querySelector('[data-text-desktop]');
const detailedButton = document.querySelector('[data-detailed-button]');

textMobile.classList.remove('about-company__text--nojs-inline');
textDesktop.classList.remove('about-company__text--nojs');
detailedButton.classList.remove('btn--nojs');

const hiddenText = detailedButton.addEventListener('click', () => {
  if (textDesktop.classList.contains('about-company__text--hidden')) {
    textDesktop.classList.remove('about-company__text--hidden');
    textDesktop.classList.add('about-company__text--visible');
    detailedButton.innerHTML = 'Свернуть';

    textMobile.classList.remove('about-company__text--hidden-inline');
    textMobile.classList.add('about-company__text--visible-inline');

  } else {
    textDesktop.classList.add('about-company__text--hidden');
    textDesktop.classList.remove('about-company__text--visible');
    detailedButton.innerHTML = 'Подробнее';
    textMobile.classList.add('about-company__text--hidden-inline');
    textMobile.classList.remove('about-company__text--visible-inline');
  }
});

export default hiddenText;
