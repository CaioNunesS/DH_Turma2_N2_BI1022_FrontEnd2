/* @@@ EXIBIÇÃO E CAPTURA DOS DADOS 
- Alert()
- Confirm()
- Prompt()
*/

console.log("Aula 2");

alert("Bem-vindos a aula 2");

let escolhaUsuario = confirm("Deseja realmente sair?");
console.log(escolhaUsuario);

if (escolhaUsuario) { //Caso verdadeiro
    alert("Saiu da sessão");
} else { //caso falso
    alert("...continua na sessão");
}

let valorRecebido = prompt("Informe um número inteiro: ");
console.log(valorRecebido);

/* @@@ CONVERSÃO DE DADOS EM JS */
/* Calculando o valor digitado pelo usuário */
let valorA = 10;
let valorConvertido = parseInt(valorRecebido);
//let valorConvertido = Number(valorRecebido); //Outra maneira de fazer
let resultado = valorA + valorConvertido;
alert(resultado);


/* @@@ FUNÇÕES MATEMÁTICAS EM JS */

/* Algoritmo que gera números aleatorios entre um intervalo definido */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroAleatorio = parseInt(getRandomIntInclusive(1, 5));
console.log(numeroAleatorio);