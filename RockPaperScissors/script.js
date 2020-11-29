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

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor = document.getElementById("s");

//funcao do click do computador
function comp_click() {
    //vetor de opcoes do computador 
    const v_choises= ['r','p','s'];
    // o PC escolhe uma opcao random
   const pc_click =(Math.floor(Math.random()* 3));
    //seleciona um numero de 0a1 *3, ou seja de 0 a 3
    return v_choises[pc_click];
    console.log(pc_click);
     
}
// console.log(comp_click())
//ou seja na funcao com_click, com o vetor de opcoes de v_choises e o numero random pc_click, chamamos no return um numero randomico aplicado ao vetor, logo vai retornar uma opcao random de r,p,s.
comp_click();





//funcao do click do user
function game(user_click) {

    
}















// adicionar eventos de click de usuario 
// log para checar se o click foi lido pelo pc/
function main(){
rock_div.addEventListener('click', function(){
    // console.log("Hey you clicked in rock option!"); seo ouser clicou em rock ira chamar uma funcao game()
    game("r");

});


paper_div.addEventListener('click', function(){
    // console.log("Hey you clicked in paper option!");
    game("p");

});
scissor.addEventListener('click', function(){
    // console.log("Hey you clicked in scissor option!");
    game("s");

});}


main();

