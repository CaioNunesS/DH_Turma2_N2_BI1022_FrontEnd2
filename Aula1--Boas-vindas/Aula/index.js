/* Criando um objeto literal em JS */
let usuario = {
    nome: "Marcos M",
    idade: 25
}
/* Exibindo a informação no console do navegador */
console.log("O usuário é o : " + usuario.nome + " e tem " + usuario.idade + " anos.")

console.log(document.body.children);

/* Declarando um array de elementos */
let array = [
    "Elton",
    4,
    false,
    "Igor"
];

/* Exibindo a informação do array no console do navegador */
console.log(array[3]);

/* Percorrendo o array de elementos */
for (let i = 0 ; i < array.length ; i++) {
    console.log(array[i]);
}