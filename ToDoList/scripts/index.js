const form = document.getElementById("todo-form");
const input = document.querySelector(".todo__search");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.className = "todo__item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo__checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    li.append(checkbox, span);
    list.append(li);

    input.value = "";

    checkbox.addEventListener("change", () => {
      li.classList.toggle("done", checkbox.checked);
    });
    
});
