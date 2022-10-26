//@@@@@@ [1] - Modelos de texto  - Template Strings

let usuario = "Marcos";
function boasvindas() {
    return "Boas-vindas Marcos";
}
alert(`Bem vindo usuário ${usuario}`);
alert(`O resultado da soma é:  ${boasvindas()}`);


//@@@@@@ [2] - Modificando elementos com o DOM
let h1 = document.querySelector("h1");
h1.innerHTML = "<h3>Aula 5</h3>";
console.log(h1.innerText);
console.log(h1.innerHTML);


//@@@@@@ [3] - Modificando estilos 
h1.style.color = "#0FFF23";
h1.style.textAlign = "center"


//@@@@@@ [4] Modificando a classe dos elementos
h1.classList.add("novoh1");
let valid = h1.classList.contains("novoh1");
console.log(h1);
