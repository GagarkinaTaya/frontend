async function loadItems(section) {
    const fileName = section.toLowerCase() + ".json";
    try {
        const response = await fetch("/data/" + fileName);
        if (!response.ok) {
            throw new Error(`Errorrr! Status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// нет обработки ошибок нет валидации ответа
//async function addItem(section, item) {
//console.log("START addItem(); section = " + section + "; item:", item);
// не знаю как реализовать. как-нибудь доделать.
//console.log("FINISH addItem(); saved locally:", localData);
//}

//console.log("START loadItems(); section = " + section);
//console.log("FINISH loadItems(); result:");
//console.log(result);