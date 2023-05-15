const btnShowMoreRead = document.querySelector('.button-show-more--read');
const mainText = document.querySelector('.main__text');
const btnShowMoreBrand = document.querySelector('.button-show-more--brand');
const sliderBrands = document.querySelector('.brand__list');
const btnShowMoreTechnique = document.querySelector('.button-show-more--technique');
const sliderTechnique = document.querySelector('.technique__list');
const btnShowMore = [btnShowMoreRead, btnShowMoreBrand, btnShowMoreTechnique];
const btnHeight = [mainText, sliderBrands, sliderTechnique];
const cssHeight = ['main__text--big-height', 'brand__list--big-height', 'technique__list--big-height']

btnShowMore.forEach((el, index) => {
  el.addEventListener('click', function (evt) {
    if (el.textContent != 'Скрыть') {
      el.textContent = 'Скрыть';
    } else {
      el.textContent = 'Показать всё'
    }
    btnHeight[index].classList.toggle(cssHeight[index]);
    el.classList.toggle('button-show-rotate');
  })
})