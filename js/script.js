//function appel api
const firstCall = (offset) => {

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
        .then(response => response.json())
        .then(data => {
            const { results } = data;

            listpkmn.innerHTML = "";
            results.forEach(element => {
            
                //pokemon.appendChild(pokename);
                listpkmn.appendChild(createBtn(element.name));

            }

            );
            // Array.from(btn).forEach((el) => {
            // })

            btns.forEach((el) => {
                el.addEventListener("click", () => {
                    console.log(el.name);
                    secondCall(el.name);

                })
            })
        })
        .catch(error => console.error('Erreur: ', error));

}

const secondCall = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            const { sprites } = data;
            const { other } = sprites;
            console.log(data.weight);
            console.log(data.name);
            imgpkmn.src = other["official-artwork"].front_default
            namepkmn.innerText = "Name : "+ data.name.toUpperCase()
            weightpkmn.innerText= "Weight : " + (data.weight * 0.1) +" Kg"
        })

}

//global const & var
const btns = [];
const btn = document.getElementsByClassName("pokebtn");
let offset = 0;


//creation des main div
const div = document.createElement("div");
div.setAttribute("id", "main")

// //test ajout element
// const tag = document.createElement("p");
// const text1 = document.createTextNode("aujourd'hui je crée mon pokedex en js");
// tag.appendChild(text1)
// div.appendChild(tag);
document.body.appendChild(div)

//input de recherche
const searchbar_div = document.createElement("div");
const search_input = () =>{
    const input = document.createElement("input");
    input.type = "text"
    input.placeholder = "Enter your Pokemon:";
    input.id = "search_input"
    searchbar_div.appendChild(input);

}
const submit_btn = () => {
    const btn = document.createElement("button");
    btn.textContent = "Search";
    btn.id= "submit_btn";
    btn.name = "submit_btn";
    btn.addEventListener('click',()=>{
        const name = document.getElementById("search_input");
        
        secondCall(name.value);
    })
    searchbar_div.appendChild(btn);

}
search_input();
submit_btn();
div.appendChild(searchbar_div);



//liste des pkmn
const listpkmn = document.createElement("div");
div.setAttribute("id", "listpkmn");
div.appendChild(listpkmn);
firstCall();


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

//paginate
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
div.appendChild(divpaginate);
divpaginate.appendChild(btnprevious);
divpaginate.appendChild(btnnext);

btnnext.addEventListener("click", () => {
    offset += 20;
    firstCall(offset);
    console.log(offset);
})

btnprevious.addEventListener("click", () => {
    offset -= 20;
    firstCall(offset);
    console.log(offset);
})

//div info pkmn
const infopkmn = document.createElement("div")
const imgpkmn = document.createElement("img")
const namepkmn = document.createElement("p")
const weightpkmn = document.createElement("p")
const type1 = document.createElement("p")
const type2 = document.createElement("p")

div.appendChild(infopkmn);
infopkmn.appendChild(imgpkmn);
infopkmn.appendChild(namepkmn);
infopkmn.appendChild(weightpkmn);
infopkmn.appendChild(type1);
infopkmn.appendChild(type2);




