// Функция взята из интернета и доработана
// Источник - https://webkaa.ru/javascript/maska-nomera-telefona-js

  const eventCalllback = function (evt) {
      let el = evt.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = evt.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && evt.type === 'blur') {
          if (val.length < matrix.match(/([\_\d])/g).length) {
              evt.target.value = '';
              return;
          }
      }
      if (def.length >= val.length) val = def;
      evt.target.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
  }
  const phone_inputs = document.querySelectorAll('[data-mask-tel]');
  for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
          elem.addEventListener(ev, eventCalllback);
      }
  }

export default eventCalllback;
