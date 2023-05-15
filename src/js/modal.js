const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
    const btnModalCallOpens = document.querySelectorAll(btnOpen);
    const modalCall = document.querySelector(modal);

    modalCall.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity ${time}ms ease-in-out;
        `

    const closeModal = evt => {
        evt.stopPropagation();

        const target = evt.target;
        if (target === modalCall ||
            (btnClose && target.closest(btnClose)) ||
            evt.code === 'Escape') {
            modalCall.style.opacity = 0;

            setTimeout(() => {
                modalCall.style.visibility = 'hidden';
            }, time);

            window.removeEventListener('keydown', closeModal);
        }
    }

    const openModal = (evt) => {
        evt.stopPropagation();
        modalCall.style.visibility = 'visible';
        modalCall.style.opacity = 1;
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