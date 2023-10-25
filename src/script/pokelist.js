// import { observer } from "./observer";
export default (async function Init(offset = 0) {
    const UL = document.querySelector(".list")
    
    let limit = 40 // export 
    let fetchObserver = new IntersectionObserver(callback, {rootMargin: "0px", threshold: 1});
    let imageObserver = new IntersectionObserver(imageCallback, {rootMargin: "0px", threshold: 1});
    
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    let data = await response.json()

    console.log(data);

    data.results.forEach(function(pokemon, index) {
        const LI = document.createElement("li")
        
        const P = document.createElement("p")
        P.innerHTML = pokemon.name
        const IMG = document.createElement("img")

        const ID = pokemon.url.split("/")[6]

        IMG.dataset.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID}.png`
        imageObserver.observe(IMG)

        LI.append(P)
        LI.append(IMG)
        UL.append(LI)

        if (index === data.results.length - 1) {
            fetchObserver.observe(LI)
        }
    })

    function callback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return //guard clause
            if (entry.intersectionRatio >= 1) {
                fetchObserver.unobserve(entry.target)
                console.log(entry);
                Init(offset + limit)
            }
        });
    }

    function imageCallback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return //guard clause
            if (entry.intersectionRatio >= 0.1) {
                imageObserver.unobserve(entry.target)
                entry.target.src = entry.target.dataset.src
            }
        });
    }

})()