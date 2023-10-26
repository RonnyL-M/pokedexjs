//creation des main div
const div = document.createElement("div");
div.setAttribute("id","main")

//test ajout element
const tag = document.createElement("p");
const text1 = document.createTextNode("aujourd'hui je crée mon pokedex en js");
tag.appendChild(text1)
div.appendChild(tag);
document.body.appendChild(div)




