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
            const {types} = data;
            //gestion types
            if(Object.keys(types).length ===1){
                type1.innerText="";
                type2.innerText="";
                type2.className="none";

                type1.innerText=types[0].type.name.toUpperCase()
                type1.className = types[0].type.name;
            }
            else if(Object.keys(types).length ===2){
                type1.innerText="";
                type2.innerText="";
                
                type1.innerText=types[0].type.name.toUpperCase()
                type1.className = types[0].type.name

                type2.innerText=types[1].type.name.toUpperCase()
                type2.className = types[1].type.name
            }
            //

            //gestion images et données
            console.log(data.name);
            imgpkmn.src = other["official-artwork"].front_default;
            nmbpkmn.innerHTML = "N° " + data.id;
            namepkmn.innerText = "Name : " + data.name.toUpperCase();
            heightpkm.innerHTML = "Height : " + (data.height /10) + " m" 
            weightpkmn.innerText = "Weight : " + (data.weight /10) + " Kg";
            infopkmn.style.visibility = "visible"


        })

}

//global const & var
const btns = [];
const btn = document.getElementsByClassName("pokebtn");
let offset = 0;

//header
const header = document.createElement("header");
document.body.appendChild(header)
const title = document.createElement("h1")
title.innerText = "MyPokeDex.Js"
header.appendChild(title)


//creation des main div
const div = document.createElement("div");
div.setAttribute("id", "main");

// //test ajout element
// const tag = document.createElement("p");
// const text1 = document.createTextNode("aujourd'hui je crée mon pokedex en js");
// tag.appendChild(text1)
// div.appendChild(tag);
document.body.appendChild(div)

//input de recherche
const searchbar_div = document.createElement("div");
searchbar_div.setAttribute("id", "searchbar_div");
const search_input = () => {
    const input = document.createElement("input");
    input.type = "text"
    input.placeholder = "Enter your Pokemon:";
    input.id = "search_input"
    searchbar_div.appendChild(input);

}
const submit_btn = () => {
    const btn = document.createElement("button");
    btn.textContent = "Go !";
    btn.id = "submit_btn";
    btn.name = "submit_btn";
    btn.addEventListener('click', () => {
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
listpkmn.setAttribute("id", "listpkmn");
div.appendChild(listpkmn);
firstCall();


//function btn
createBtn = (name) => {
    const button = document.createElement("button");
    button.classList.add("pokebtn");
    button.name = name;
    button.value = name;
    button.textContent = name.toUpperCase();
    btns.push(button);
    return button;

}

//paginate
const divpaginate = document.createElement("div");
divpaginate.setAttribute("id", "paginate");
const btnprevious = document.createElement("button");
btnprevious.name = "previous";
btnprevious.textContent = "PREVIOUS"
btnprevious.setAttribute("id", "previous")
const btnnext = document.createElement("button");
btnnext.name = "next";
btnnext.textContent = "NEXT";
btnnext.setAttribute("id", "next");
div.appendChild(divpaginate);
divpaginate.appendChild(btnprevious);
divpaginate.appendChild(btnnext);

btnnext.addEventListener("click", () => {
    offset += 20;
    if(offset>1300){
        offset = 1300
    }
    firstCall(offset);

})

btnprevious.addEventListener("click", () => {
    offset -= 20;
    if(offset<0){
        offset = 0
    }

    firstCall(offset);

})

//div info pkmn
const infopkmn = document.createElement("div");
infopkmn.setAttribute("id", "infopkmn");
const txtpkmn = document.createElement("div");
txtpkmn.setAttribute("id", "txtpkmn");
const imgpkmn = document.createElement("img");
const nmbpkmn = document.createElement("p");
const namepkmn = document.createElement("p");
const heightpkm = document.createElement("p");
const weightpkmn = document.createElement("p");
const typesdiv = document.createElement("div");
typesdiv.setAttribute("id","types");
const type1 = document.createElement("p");
const type2 = document.createElement("p");

div.appendChild(infopkmn);
infopkmn.appendChild(imgpkmn);
txtpkmn.appendChild(nmbpkmn);
txtpkmn.appendChild(namepkmn);
txtpkmn.appendChild(heightpkm)
txtpkmn.appendChild(weightpkmn);
typesdiv.appendChild(type1);
typesdiv.appendChild(type2);
txtpkmn.appendChild(typesdiv);

infopkmn.appendChild(txtpkmn);
infopkmn.style.visibility = "hidden";




