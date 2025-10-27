async function loadItems(section) {
    //console.log("START loadItems(); section = " + section);
    const fileName = section.toLowerCase() + ".json";
    const response = await fetch("/data/" + fileName);
    const result = await response.json();
    //console.log("FINISH loadItems(); result:");
    //console.log(result);
    return result;
}

//async function addItem(section, item) {
//console.log("START addItem(); section = " + section + "; item:", item);
// не знаю как реализовать. как-нибудь доделать.
//console.log("FINISH addItem(); saved locally:", localData);
//}
