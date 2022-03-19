const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay')
const moreButtons = document.querySelectorAll('.more');

const setModalVisibility = (visible) => {
    if (visible) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

overlay.addEventListener('click', () => setModalVisibility(false));

moreButtons.forEach(button => {
    button.addEventListener('click', () => setModalVisibility(true));
});

modalCloseButton.addEventListener('click', () => setModalVisibility(false));
