const contentSections = document.querySelectorAll('.section');

function cardExists(container, id) {
  for (const card of container.children) {
    if (card.dataset.id === String(id)) {
      return true;
    }
  }
  return false;
}

async function showSection(currentHash) {
  // console.log("START showSection()");
  contentSections.forEach(currentSection => {
    currentSection.style.display = 'none'
    if (currentSection.id === currentHash.slice(1))
      currentSection.style.display = 'block'
  })
  const section = currentHash.slice(1);
  const listId = `${section}-list`;
  const container = document.getElementById(listId);
  const cards = await loadItems(section);
  //console.log("showSection(); section = " + section + "; cards: ");
  //console.log(cards);
  cards?.forEach((cardData) => {

    const card = document.createElement('article');
    // Как чистить от предыдущей отрисовки? Или как находить элементы по Id?
    // card.classList.remove();
    if (!cardExists(container, cardData.id)) {
      card.classList.add('card');
      card.dataset.id = cardData.id;

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
      varTitle.textContent = cardData.title;
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
      varDescription.textContent = cardData.description;
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
  })
}

function setActiveSection(currentHash) {
  links.forEach(currentLink => {
    currentLink.classList.remove('active_section')
    if (currentLink.hash === currentHash)
      currentLink.classList.add('active_section')
  })
}
