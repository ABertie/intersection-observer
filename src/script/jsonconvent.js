export default (async function() {
    const json = {
        "name": "Brian",
        "age": 2561,
        "hair_color": false
    }

    // localStorage.setItem("fnus", JSON.stringify(json))
    // JSON.stringify
    // Saver object on localStorage

    // console.log(JSON.parse(localStorage.getItem("fnus")));
    // JSON.parse
    // Makes the string to a object again

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/1/")
    let data = await response.json()

    localStorage.setItem("bulbasaur", JSON.stringify(data))
    console.log(JSON.parse(localStorage.getItem("bulbasaur")))
})()