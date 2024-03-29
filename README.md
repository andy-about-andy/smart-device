# Smart Device
Компания по производству печатных плат

---

## [Гайд по работе со сборкой](/GUIDE.md) 📕

### Общие технические требования

* Стандарты вёрстки: HTML5, CSS3, прогрессивное улучшение.
* Сетка: определена в макете.
* Раскладка блоков на странице: флексы и гриды.
* Свёрстана только главаная страница.
* Адаптивность сетки: мобильная, планшетная и десктопная версии. **Desktop First**. <br>
На всех промежуточных разрешениях используется резиновая вёрстка.
* Брейкопойнты:
  - мобильная версия — 320px - 767px;
  - планшетная версия — 768px - 1023px;
  - десктопная версия — от 1024px и выше.
* Адаптивность графики: ретинизация, векторные изображения.
* Используемая методология: БЭМ.
* Используемый препроцессор: Sass (SCSS).
* Используемый инструмент автоматизации: Gulp.
* Кроссбраузерность: Chrome, Firefox, Safari.
* Используемый шрифт: PT Mono, Roboto Condensed.
* Шапка на Desktop сделана фиксированной при скролле.
* По кнопке `Заказать звонок` открывается модальное окно с формой.
* Форма имеет валидацию.
* В поле телефон маска формата `+7(___) ___-__-__`.
* При открытии модального окна фокус cтановится на поле `Имя`.
* JavaScript минимальная реализация:
  - модальное окно;
  - маска для поля телефон;
  - по кнопке `Подробнее` разворачивается полный текст блока и название кнопки меняется на `Свернуть`.
* Плавный скрол до соответствующего блока.
* В мобильной версии в подвале оживлён Аккордеон.
