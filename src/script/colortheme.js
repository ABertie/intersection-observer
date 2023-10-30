const BUTTON = document.querySelector(".colortheme")
const BODY = document.querySelector("body")

if (localStorage.getItem("colortheme") === "dark") {
    BODY.classList.remove("light")
    BODY.classList.add("dark")
}

BUTTON.addEventListener("click", function() {
    if (BODY.classList.value === "light") {
        BODY.classList.remove("light")
        BODY.classList.add("dark")
    }
    else if (BODY.classList.value === "dark") {
        BODY.classList.remove("dark")
        BODY.classList.add("light")
    }

    localStorage.setItem("colortheme", BODY.classList.value)
})