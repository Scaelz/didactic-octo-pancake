const accordion = document.querySelector('.feature-list')
const accordionButtons = accordion.querySelectorAll('.feature__link');

accordionButtons.forEach( button => {
    button.addEventListener('click', () => {
        accordionButtons.forEach(btn => {
            btn.classList.add('feature__link_active');
            btn.nextElementSibling.classList.add('hidden');
        })
        button.classList.toggle('feature__link_active');
        button.nextElementSibling.classList.toggle('hidden');
    })
})