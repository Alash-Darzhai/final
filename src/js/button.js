const btnShowMoreRead = document.querySelector('.button-show-more--read');
const mainText = document.querySelector('.main__text');

btnShowMoreRead.addEventListener('click', function (evt) {
  evt.stopPropagation();
  if (btnShowMoreRead.textContent != 'Скрыть') {
    btnShowMoreRead.textContent = 'Скрыть';
  } else {
    btnShowMoreRead.textContent = 'Показать всё'
  }
  mainText.classList.toggle('main__text--big-height')
  btnShowMoreRead.classList.toggle('button-show-rotate')
})


const btnShowMoreBrand = document.querySelector('.button-show-more--brand');
const sliderBrands = document.querySelector('.brand__list');

btnShowMoreBrand.addEventListener('click', function (evt) {
  evt.stopPropagation();
  if (btnShowMoreBrand.textContent != 'Скрыть') {
    btnShowMoreBrand.textContent = 'Скрыть';
  } else {
    btnShowMoreBrand.textContent = 'Показать всё'
  }
  sliderBrands.classList.toggle('brand__list--big-height')
  btnShowMoreBrand.classList.toggle('button-show-rotate')
})


const btnShowMoreTechnique = document.querySelector('.button-show-more--technique');
const sliderTechnique = document.querySelector('.technique__list');

btnShowMoreTechnique.addEventListener('click', function (evt) {
  evt.stopPropagation();
  if (btnShowMoreTechnique.textContent != 'Скрыть') {
    btnShowMoreTechnique.textContent = 'Скрыть';
  } else {
    btnShowMoreTechnique.textContent = 'Показать всё'
  }
  sliderTechnique.classList.toggle('technique__list--big-height')
  btnShowMoreTechnique.classList.toggle('button-show-rotate')
})