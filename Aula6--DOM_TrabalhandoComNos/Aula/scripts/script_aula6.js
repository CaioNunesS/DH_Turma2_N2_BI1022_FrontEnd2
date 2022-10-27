//##### INTERAÇÃO COM A LISTA DE FELINOS

//Elemento pai (parentElement)
let containerFelinos = document.getElementById("containerFelinos");
console.log(containerFelinos);

//Capturando os filhos com base no elemento pai
let listaFelinos2 = containerFelinos.children;


let listaFelinos = document.querySelectorAll(".item");
console.log(listaFelinos);


//Remoção de um ou mais elementos da lista
containerFelinos.removeChild(listaFelinos[1]);
containerFelinos.firstElementChild.remove();
containerFelinos.lastElementChild.remove();

//Inserindo um novo card na list de elementos

let div = document.createElement("div");
div.classList.add("item");

//div.innerText = "Aula 6, trabalhando com nós"
let textoDiv = document.createTextNode("Aula 6, trabalhando com nós");
div.appendChild(textoDiv);

let novoFelino = {
    img: "https://nerdbreak.com.br/wp-content/uploads/2017/07/o-rei-le%C3%A3o-002.jpg",
    titulo: "O Scar",
    descricao: "Dolore ullamco commodo commodo ipsum tempor. Quis sit magna elit minim et dolor voluptate nostrud aute. Aliquip pariatur in adipisicing duis do."
}

div.innerHTML = `
      <img src="${novoFelino.img}">
      <h2>${novoFelino.titulo}</h2>
      <p>${novoFelino.descricao}</p>

`
containerFelinos.appendChild(div) //Insere sempre no final

//Esquerda: Novo recurso - Direita: Elemento HTML que ferá a comparação
containerFelinos.insertBefore(div, containerFelinos.children[3] );