let quantidadeFormulario = document.getElementById('quantidadeFormulario');
let botaoPesquisar = document.getElementById('botaoPesquisar');
let exibeResultado = document.getElementById('exibeResultado');

botaoPesquisar.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (quantidadeFormulario.value != "") {

        fetch(`https://dog.ceo/api/breeds/image/random/${quantidadeFormulario.value}`)
            .then(function (resultado) {
                return resultado.json();
            })
            .then(resultado => {
                renderizaImgsCachorros(resultado);
            })
            .catch(erro => {
                console.log(erro);
            });
    } else {
        alert("Você deve informar o número de imagens que deseja buscar")
    }
});

function renderizaImgsCachorros(listaCachorros) {
    for (let cachorroUrlImg of listaCachorros.message) {
        let img = document.createElement("img");
        img.src = cachorroUrlImg;
        exibeResultado.appendChild(img);
    }
}

function atualizaPagina() {
    window.location.reload();
}