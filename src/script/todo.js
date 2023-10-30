const TODO = document.querySelector(".todolist")
const TODO_FORM = document.querySelector(".todoForm")

function makeAToDo(WhatTODo) {
    const LI = document.createElement("li")

    LI.innerHTML = `
    <input type="checkbox" name="" id="">
	<p>${WhatTODo}</p>`

    LI.querySelector("input").addEventListener("change", function () {
        if (LI.querySelector("input").checked == true) LI.style.textDecoration = "line-through"
        else LI.style.textDecoration = "none"
    })
        
    LI.querySelector("input")

    TODO.append(LI)
}

TODO_FORM.addEventListener("submit", function (event){
    event.preventDefault()
    makeAToDo(TODO_FORM.text.value)
    TODO_FORM.text.value = ""
})