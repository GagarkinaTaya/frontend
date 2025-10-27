// // Получаем из localStorage список элементов для указанной секции section
// function getItemsFromLocalStorage(section) {
//     const list = JSON.parse(localStorage.getItem(section));
//     return list ?? [];
// }

// // Добавляем в localStorage в указанную секцию элемент item
// function addItemToLocalStorage(section, item) {
//     let list = getFromLocalStorage(section);
//     list.push(item);
//     localStorage.setItem(section, JSON.stringify(list));

//     console.log("Сохранено:", list);
// }

// function getNewIdFromLocalStorage(section) {
//     const list = getFromLocalStorage(section);
//     if (list.length === 0) {
//         return 1;
//     }
//     const maxId = Math.max(...list.map(item => item.id));
//     return maxId + 1;
// }
