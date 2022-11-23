/* Aula 16 - Introdução ao assincronimso e Promises */
/* Nesta aula estamos apenas "Simulando" requisições assincronas ao utilizar as promises */

let valdiacao = true;

let usuario = {
    nome: "Lucas Santos",
    cidade: "Betim"
}

let usuarioJson = JSON.stringify(usuario);

let erro = {
    status: 500,
    mensagem: "A promise falhou"
}

let erroJson = JSON.stringify(erro);


function executaAlgo() {
    console.log("Executou outra ação...");
}


let promise = new Promise(function (resolve, reject) {

    setTimeout(() => {
        if (valdiacao) {
            resolve(usuarioJson);
        } else {
            reject(erroJson);
        }
    }, 1000);
});

promise.then(
    function (resposta) {
        console.log("Primeiro then()");
        console.log(resposta);
        return JSON.parse(resposta);
    }
).then(
    function (resposta) {
        console.log("Segundo then()");
        console.log(resposta);
    }
)
    .catch(
        function (erro) {
            console.log(erro);
        }
    );

executaAlgo();