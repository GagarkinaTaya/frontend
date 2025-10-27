// import { addCard } from './card.js';

const addCardBtn = document.getElementById('add-card-btn');
const modal = document.getElementById('add-modal');

addCardBtn.addEventListener('click', () => {
    modal.showModal();
});

const cancelButton = document.querySelector('.modal__cancel');
const closeButton = document.querySelector('.modal__close_btn');
cancelButton.addEventListener('click', () => {
    modal.close();
});
closeButton.addEventListener('click', () => {
    modal.close();
});

const form = document.querySelector('.modal__form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleText = document.querySelector('.modal__in__title').value;
    const descriptionText = document.querySelector('.modal__in__description').value;

    if (!titleText || !descriptionText) return;

    addCard(titleText, descriptionText);

    form.reset();
    modal.close();
});


// const addButton = document.querySelector('.modal__add');

// addButton.addEventListener('click', () => {
//     modal.close();
// });
