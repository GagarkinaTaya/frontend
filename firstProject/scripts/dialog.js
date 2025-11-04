// import { addCard } from './card.js';
//обработки ошибок добавить
try {
    const addCardBtn = document.getElementById('add-card-btn');
    const modal = document.getElementById('add-modal');
    const cancelButton = document.querySelector('.modal__cancel');
    const closeButton = document.querySelector('.modal__close_btn');
    const form = document.querySelector('.modal__form');

    if (!addCardBtn || !modal || !cancelButton || !closeButton || !form) {
        throw new Error('Error!!!');
    }

    addCardBtn.addEventListener('click', () => {
        modal.showModal();
    });

    cancelButton.addEventListener('click', () => {
        modal.close();
    });
    closeButton.addEventListener('click', () => {
        modal.close();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        try {
            const titleText = document.querySelector('.modal__in__title')?.value.trim();
            const descriptionText = document.querySelector('.modal__in__description')?.value.trim();

            if (!titleText || !descriptionText) return;

            if (typeof addCard !== 'function') {
                throw new Error('Errorrr');
            }

            addCard(titleText, descriptionText);

            form.reset();
            modal.close();
        } catch (error) {
            console.error('Error:', error);
        }
    });
} catch (error) {
    console.error('Error:', error);
}



// const addButton = document.querySelector('.modal__add');

// addButton.addEventListener('click', () => {
//     modal.close();
// });
