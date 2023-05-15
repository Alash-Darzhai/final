const btnMenuOpen = document.querySelector('.button-icon--open');
const btnMenuClose = document.querySelector('.button-icon--close');
const aside = document.querySelector('.aside');


btnMenuOpen.addEventListener('click', function (evt) {
    evt.stopPropagation();
    aside.classList.add('aside--open');
})

btnMenuClose.addEventListener('click', function (evt) {
    evt.stopPropagation();
    aside.classList.remove('aside--open');
})

document.addEventListener('click', function (evt) {
    evt.stopPropagation();
    if (evt.target === aside) {
        aside.classList.remove('aside--open');
    }
});