const btnMenuOpen = document.querySelector('.button-icon--open');
const btnMenuClose = document.querySelector('.button-icon--close');
const aside = document.querySelector('.aside');
const body = document.querySelector('.body');

btnMenuOpen.addEventListener('click', function (evt) {
    evt.stopPropagation();
    aside.classList.add('aside--open');
    body.style.cssText = `overflow-y: hidden;`
})

btnMenuClose.addEventListener('click', function (evt) {
    evt.stopPropagation();
    aside.classList.remove('aside--open');
    body.style.cssText = `overflow-y: auto;`
})

document.addEventListener('click', function (evt) {
    evt.stopPropagation();
    if (evt.target === aside) {
        aside.classList.remove('aside--open');
        body.style.cssText = `overflow-y: auto;`
    }
});