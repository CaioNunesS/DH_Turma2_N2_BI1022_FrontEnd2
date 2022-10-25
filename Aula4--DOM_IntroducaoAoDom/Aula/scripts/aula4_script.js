/* NESTA AULA, FAREMOS APENAS A CAPTURA DAS INFORMAÇÕES DO HTML (SEM MODIFICAR OU ADICIONAR E REMOVER ELEMENTOS) 
-> Nas proximas aulas, faremos a alteração de alguns elementos e de suas propriedades*/

console.log(document);

console.log(document.body.children[1].children[1].children[0].children[0].childNodes[0].data)

let li1 = document.getElementById("item1");
console.log(li1.innerText);

let li2 = document.querySelector("item2");
console.log(li2.innerText);

let divs = document.querySelectorAll(".conteudo");
console.log(divs);

let articles = document.querySelectorAll("article");

let elemento;
for (let article of articles) {

    console.log(article);
    if (article.id == "card1") {
        elemento = article;
    }
}

console.log(elemento.innerText);

let article = document.querySelector("#card1 h2");
console.log(article);