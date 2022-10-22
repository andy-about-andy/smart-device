const button = document.querySelector('[data-scroll-button]');
const feedbackForm = document.querySelector('[data-scroll-form]');

function setScrollIntoView() {
  feedbackForm.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}

const scroll = () => {
  button.addEventListener('click', setScrollIntoView);
}
export default scroll;
