import Storage from "./Storage.js";


const lists = document.querySelector("[data-lists]")
let todoArr = Storage.getStorage()


class UI {
    static displayData() {
        let displayData = todoArr.map((item) => {
            return `
            <div class="todo">
            <p>${item.todo}</p>
            <span class="remove" data-id=${item.id}>🗑️</span>
            </div>
            `;
        });

        lists.innerHTML = (displayData).join(" ");
    }

    static clearInput() {
        input.value = "";
    }

    static removeTodo() {
        lists.addEventListener("click", (e) => {
            if (e.target.classList.contains("remove")) {
                e.target.parentElement.remove();
            }
            let btnId = e.target.dataset.id;

            UI.removeArrayTodo(btnId);
        });
    }

    static removeArrayTodo(id) {
        todoArr = todoArr.filter((item) => item.id !== +id);
        Storage.addToStorage(todoArr);
    }
}

export default UI;
