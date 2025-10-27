const links = document.querySelectorAll('ul a');

setActiveSection(location.hash || '#movies');
showSection(location.hash || '#movies');

links.forEach(currentLink => {
    currentLink.addEventListener("click", (event) => {
        setActiveSection(currentLink.hash)
        showSection(currentLink.hash)
    });
});

