const userPoint = 0;
const compPoint = 0;
const userPoint_temp = document.getElementById('user-points');
// variaveldo DOM  que pega o elemento de pontuacao do HTML do USER
const compPoint_temp = document.getElementById('comp-points');
// variaveldo DOM  que pega o elemento de pontuacao do HTML do PC

//agora para manipular o placar pegamos e criamos uma nova variavel.

const scoreboard_placar = document.querySelector(".score-board");

const result_div = document.querySelector(".result ")

//agora par pegar cada opcao da brincadeira.rock,paper,scissor.

const rock_div = document.querySelector("r");
const paper_div = document.querySelector("p");
const scissor = document.querySelector("s");

//adicionar eventos de click de usuario 
//log para checar se o click foi lido pelo pc/
rock_div.addEventListener('click', function(){
    console.log("Hey you clicked in rock option!");
});