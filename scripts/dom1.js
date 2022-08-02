/*
1. Crie uma página HTML simples contendo uma div identificada com
um id e um botão, depois crie um arquivo javascript com uma
função addConteudo() que deve ser vinculado ao onclick do botão.
Ao clicar no botão adicionar na div o texto “Olá Mundo”
*/
let teste = document.getElementById("teste");
function addConteudo(){

    if (teste.textContent === "Botão") {
        teste.textContent = "Olá mundão!";
        teste.value = "Olá mundão!"
    } else {
        teste.textContent = "Botão";
        teste.value = "Botão"
    }
}
