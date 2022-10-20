// @@@ CICLOS (Percorrendo, fazendo iterações em dados)

// FOR IN

//Exportar o script

function estudandoArrays() {

let usuario = {
    nome: "Marcos M",
    idade: 25,
    endereco: {
        rua: "Rua tal",
        numero: 879,
        bairro: "centro"
    }
}

//alert(usuario.idade);

for (let prop in usuario) {
    console.log(usuario[prop]);
}

//Criando novo array -> Nomes de alunos

let arrayAlunos = ["Werlon", "Mauricio", "Pedro"];

arrayAlunos.push("Vanessa", "Lucas");

for (let i = 0; i < arrayAlunos.length; i++) {
    console.log(arrayAlunos[i]);
}

//For of
for (let aluno of arrayAlunos) {
    console.log(aluno);
}

console.log("\n");

/* function exibeNomeUsuario(nomeRecebido) {
    console.log(nomeRecebido);
} */

let novoArray = arrayAlunos.map(aluno => {
    return aluno.toUpperCase();
    }
);

console.log(novoArray);

}

function nomeUsuario() {
    console.log("Olá usuário");
};

/* Exportando as funções que serão lidas por outro script */
export {estudandoArrays, nomeUsuario};