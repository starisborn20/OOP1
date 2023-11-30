import Storage from "/jsmodules/Storage.js"
import Todo from "./jsmodules/Todo.js"
import UI from "./jsmodules/UI.js"


const form = document.querySelector("[data-form]")
const input = document.querySelector("[data-input]")

let todoArr = Storage.getStorage()

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let id = Math.random() * 1000000
    const todo = new Todo(id, input.value)
    todoArr=  [...todoArr, todo]
    console.log(todoArr)
    UI.displayData()
    UI.clearInput()

    Storage.addToStorage(todoArr)
})

window.addEventListener("DOMContentLoaded", () => {
    UI.displayData()
    UI.removeTodo()
})