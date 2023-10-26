//creation des main div
const div = document.createElement("div");
div.setAttribute("id", "main")

//test ajout element
const tag = document.createElement("p");
const text1 = document.createTextNode("aujourd'hui je crée mon pokedex en js");
tag.appendChild(text1)
div.appendChild(tag);
document.body.appendChild(div)

createBtn = () =>{}

fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then(response => response.json())
    .then(data => {
        const {results}=data ;
        results.forEach(element => { 
            const pokemon = document.createElement("p");
            const pokename = document.createTextNode(element.name);
            pokemon.appendChild(pokename);
            div.appendChild(pokemon);
            
        });
    })
    .catch(error => console.error('Erreur: ',error ))


