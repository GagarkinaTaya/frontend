const form = document.getElementById("todo-form");
const input = document.querySelector(".todo__search");
const list = document.getElementById("todo-list");

let apiTodos = [];
async function loadTodos() {
  const response = await fetch('https://dummyjson.com/todos')
    .then(res => res.json())
  apiTodos = response
}

async function drawTodos() {
  await loadTodos();
  apiTodos.todos.forEach((item) => {
    const li = document.createElement("li");
    li.className = "todo__item";
    li.id = item.id;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo__checkbox";

    const span = document.createElement("span");
    span.textContent = item.todo;

    li.append(checkbox, span);
    list.append(li);

    input.value = "";

    checkbox.addEventListener("change", () => {
      li.classList.toggle("done", checkbox.checked);
    });
  })
}

drawTodos();
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
