function exibeSpinner(){
    let divAnimacao = document.createElement("div");
    divAnimacao.classList.add("loader");
    let botaoAcessarLogin = document.getElementById("botaoAcessarLogin");
    botaoAcessarLogin.innerText = "";
    botaoAcessarLogin.appendChild(divAnimacao); 

}

function ocultaSpinner(){
    setTimeout(() => {
        let divAnimacao = document.querySelector(".loader");
        let botaoAcessarLogin = document.getElementById("botaoAcessarLogin");
        botaoAcessarLogin.removeChild(divAnimacao);
        botaoAcessarLogin.innerText = "Acessar";
    }, 3000);

}