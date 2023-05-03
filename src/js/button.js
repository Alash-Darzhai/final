const btnShowMoreBrand = document.querySelector('.button-show-more--brand');
const sliderBrands = document.querySelector('.brand__list');

btnShowMoreBrand.addEventListener('click', function () {
  if (btnShowMoreBrand.textContent != 'Скрыть') {
    btnShowMoreBrand.textContent = 'Скрыть';
  } else {
    btnShowMoreBrand.textContent = 'Показать всё'
    // через тернарный оператор
  }
  sliderBrands.classList.toggle('brand__list--big-height')
  btnShowMoreBrand.classList.toggle('button-show-rotate')
  // выше можно все сделать все в одном свойсте
})
