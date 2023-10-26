const btns = [];
//creation des main div
const div = document.createElement("div");
div.setAttribute("id", "main")

//test ajout element
const tag = document.createElement("p");
const text1 = document.createTextNode("aujourd'hui je crée mon pokedex en js");
tag.appendChild(text1)
div.appendChild(tag);
document.body.appendChild(div)

//liste des pkmn
const listpkmn = document.createElement("div");
div.setAttribute("id", "listpkmn");
div.appendChild(listpkmn);


//function btn
createBtn = (name) => {
    const button = document.createElement("button");
    button.classList.add("pokebtn");
    button.name = name;
    button.value = name;
    button.textContent = name;
    btns.push(button);
    return button;

}

//appel api 
fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then(response => response.json())
    .then(data => {
        const { results } = data;
        results.forEach(element => {
            const pokemon = document.createElement("p");
            const pokename = document.createTextNode(element.name);
            //pokemon.appendChild(pokename);
            listpkmn.appendChild(createBtn(element.name));

        }

        );
        Array.from(btn).forEach((el) => {
        })
        
        btns.forEach((el)=>{
            console.log("ping")
            el.addEventListener("click",()=>{
                console.log(el.name);
            })
        })
    })
    .catch(error => console.error('Erreur: ', error));



const btn = document.getElementsByClassName("pokebtn");




//paginate
let offset = 0;
const divpaginate = document.createElement("div");
div.setAttribute("id", "paginate");
const btnprevious = document.createElement("button");
btnprevious.name = "previous";
btnprevious.textContent = "previous"
btnprevious.setAttribute("id", "previous")
const btnnext = document.createElement("button");
btnnext.name = "next";
btnnext.textContent = "next";
btnnext.setAttribute("id", "next");
divpaginate.appendChild(btnprevious);
divpaginate.appendChild(btnnext);
div.appendChild(divpaginate);

btnnext.addEventListener("click",()=>{
    offset+=20;
    console.log(offset);
})

btnprevious.addEventListener("click",()=>{
    offset-=20;
    console.log(offset);
})


