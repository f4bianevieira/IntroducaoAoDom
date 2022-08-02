/*
4. Crie uma página que tenha o título "Contador de Cliques". Na
página deve ter 2 botões, um deles deve estar escrito INCREMENTAR
e o outro deve estar escrito ZERAR CONTADOR, logo abaixo dos
botões deve ter um parágrafo contendo a seguinte frase "O
contador está com 0 cliques".

Conforme o usuário vai clicando no botão Incrementar deve ser
incrementado uma variável no javascript e ir atualizando a página
conforme o número de cliques.

Ao clicar no botão Zerar contador o parágrafo deve sumir da tela.
Ao clicar no botão de Incrementar novamente o parágrafo deve
aparecer com a mensagem "O contador está com 1 cliques" e ir
atualizando conforme o usuário for clicando para incrementar.
*/
let start = 0;

document.getElementById("counting").innerText = start;

function increment(){
    start = start +1;
    document.getElementById("counting").innerText = start;
}

function decrement() {
    start = start - 1;
    document.getElementById("counting").innerText = start;
}