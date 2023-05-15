const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
    const btnModalCallOpens = document.querySelectorAll(btnOpen);
    const modalCall = document.querySelector(modal);
    const body = document.querySelector('.body');

    modalCall.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity ${time}ms ease-in-out;
        `
    const closeModal = evt => {
        evt.preventDefault();

        const target = evt.target;
        if (target === modalCall ||
            (btnClose && target.closest(btnClose)) ||
            evt.code === 'Escape') {
            modalCall.style.opacity = 0;
            body.style.cssText = `overflow-y: auto;`

            setTimeout(() => {
                modalCall.style.visibility = 'hidden';
            }, time);

            window.removeEventListener('keydown', closeModal);
        }
    }

    const openModal = (evt) => {
        evt.preventDefault();

        modalCall.style.visibility = 'visible';
        modalCall.style.opacity = 1;
        body.style.cssText = `overflow-y: hidden;`
        window.addEventListener('keydown', closeModal)
    };

    btnModalCallOpens.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalCall.addEventListener('click', closeModal);
}

modalController({
    modal: '.modal-feedback',
    btnOpen: '.button-icon--feedback',
    btnClose: '.button-icon--close-modal-feedback',
})

modalController({
    modal: '.modal-call',
    btnOpen: '.button-icon--call',
    btnClose: '.button-icon--close-modal-call',
})