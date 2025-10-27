function addCard(titleText, descriptionText) {
    const currentSection = location.hash.slice(1) || 'movies';

    const listId = `${currentSection}-list`;
    const container = document.getElementById(listId);

    const card = document.createElement('article');
    card.classList.add('card');

    const menuButton = document.createElement('button');
    menuButton.classList.add('card__menu__button');
    menuButton.textContent = '⋮';
    card.append(menuButton);

    const menu = document.createElement('div');
    menu.classList.add('card__menu');
    menu.innerHTML = `
        <button class="card__menu__item delete">Delete</button>
        <button class="card__menu__item cross__out">Cross out</button>
    `;
    card.append(menu);

    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('visible');
    });

    document.addEventListener('click', (event) => {
        if (!card.contains(event.target)) {
            menu.classList.remove('visible');
        }
    });

    const constTitle = document.createElement('h3');
    constTitle.classList.add('const__text');
    constTitle.textContent = 'Title';
    card.append(constTitle);

    const varTitle = document.createElement('div');
    varTitle.classList.add('variable__text');
    varTitle.textContent = titleText;
    card.append(varTitle);
    // const titleInput = document.querySelector('.modal__in__title');
    // const titleText = titleInput.value;
    // title.textContent = titleText;
    // card.append(title);

    const constDescription = document.createElement('h3');
    constDescription.classList.add('const__text');
    constDescription.textContent = 'Description';
    card.append(constDescription);

    const varDescription = document.createElement('div');
    varDescription.classList.add('variable__text');
    varDescription.textContent = descriptionText;
    card.append(varDescription);
    // const descriptionInput = document.querySelector('.modal__in__description');
    // const descriptionText = descriptionInput.value;
    // description.textContent = descriptionText;
    // card.append(description);

    menu.querySelector('.delete').addEventListener('click', () => {
        card.remove();
    });

    menu.querySelector('.cross__out').addEventListener('click', () => {
        card.classList.toggle('cross__out');
    });

    container.append(card);
}

window.addCard = addCard;

// const defaultCards = [
//     { title: 'пупупу', description: 'рррррррр' },
//     { title: 'бубубу', description: 'уууууууууу' },
//     { title: 'тутуту', description: 'ммм' }
// ];

// function renderDefaultCards() {
//     defaultCards.forEach(card => {
//         addCard(card.title, card.description);
//     });
// }
