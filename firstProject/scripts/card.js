function getCurrentSectionContainer() {
    const currentSection = location.hash.slice(1) || 'movies';
    const listId = `${currentSection}-list`;
    return document.getElementById(listId);
}

function createMenu(card) {
    const menu = document.createElement('div');
    menu.classList.add('card__menu');

    const menuButton = document.createElement('button');
    menuButton.classList.add('card__menu__button');
    menuButton.textContent = '⋮';
    card.append(menuButton);
    // поменяла:
    // menu.innerHTML = `
    //     <button class="card__menu__item delete">Delete</button>
    //     <button class="card__menu__item cross__out">Cross out</button>
    // `;
    // card.append(menu);
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('card__menu__item');
    deleteButton.textContent = 'Delete';

    const crossoutButton = document.createElement('button');
    crossoutButton.classList.add('card__menu__item');
    crossoutButton.textContent = 'Cross out';

    menu.append(deleteButton, crossoutButton);

    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('visible');
    });
    //добавила задержку
    document.addEventListener('click', (event) => {
        if (!card.contains(event.target)) {
            setTimeout(() => {
                menu.classList.remove('visible');
            }, 200);
        }
    });

    deleteButton.addEventListener('click', () => card.remove());
    crossoutButton.addEventListener('click', () => card.classList.toggle('cross__out'));

    return menu;
}

function createCardContent(titleText, descriptionText) {
    const constTitle = document.createElement('h3');
    constTitle.classList.add('const__text');
    constTitle.textContent = 'Title';

    const varTitle = document.createElement('div');
    varTitle.classList.add('variable__text');
    varTitle.textContent = titleText;

    const constDescription = document.createElement('h3');
    constDescription.classList.add('const__text');
    constDescription.textContent = 'Description';

    const varDescription = document.createElement('div');
    varDescription.classList.add('variable__text');
    varDescription.textContent = descriptionText;

    return [constTitle, varTitle, constDescription, varDescription];
}

function createCard(titleText, descriptionText) {
    const card = document.createElement('article');
    card.classList.add('card');

    const menu = createMenu(card);
    const content = createCardContent(titleText, descriptionText);

    card.append(menu, ...content);
    return card;
}


function addCard(titleText, descriptionText) {
    const container = getCurrentSectionContainer();
    const card = createCard(titleText, descriptionText);

    container.append(card);
}

// разбила на маленькие функции

//убрать глобальную
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
