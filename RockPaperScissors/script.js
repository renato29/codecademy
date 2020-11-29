let userPoint = 0;
let compPoint = 0;
const userPoint_temp = document.getElementById('user-points');// variaveldo DOM  que pega o elemento de pontuacao do HTML do USER
const compPoint_temp = document.getElementById('comp-points'); // variaveldo DOM  que pega o elemento de pontuacao do HTML do PC

//agora para manipular o placar pegamos e criamos uma nova variavel.
const scoreboard_placar = document.querySelector(".score-board");

const result_p = document.querySelector(".result > p")
//agora par pegar cada opcao da brincadeira.rock,paper,scissor.

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor = document.getElementById("s");

//funcao do click do computador
function comp_click() {
    //vetor de opcoes do computador 
    const v_choises = ['r', 'p', 's'];
    // o PC escolhe uma opcao random
    const pc_click = (Math.floor(Math.random() * 3));
    //seleciona um numero de 0a1 *3, ou seja de 0 a 3
    return v_choises[pc_click];

}
// console.log(comp_click())
//ou seja na funcao com_click, com o vetor de opcoes de v_choises e o numero random pc_click, chamamos no return um numero randomico aplicado ao vetor, logo vai retornar uma opcao random de r,p,s.
comp_click();


//primeiro vamos converter o vetor de R,S,P para palavras, para no fim se mostrado no resultado.

function letterToWords(letra) {
    if (letra === 'r') return "Rock";
    if (letra === 'p') return "Paper";
    return "Scissors";
}

function win(userChoise,pcChoise) {
    const userChoise_div = document.getElementById(userChoise)
    userPoint++;
    userPoint_temp.innerHTML = userPoint; //atualiza o ponto e escreve no placar o ponto que ganhou. 
    compPoint_temp.innerHTML = compPoint;//mantem a pontuacao do PC igual.
    result_p.innerHTML = `=]  ${letterToWords(userChoise)} (U)  beats  ${letterToWords(pcChoise)}(PC) YOU WIN =]`;
    //na linha acima imprimimos o resultado ja com as letras trocadas por palavras, repare que chamei a funcao dentro da veriavel que mudara o dom pelo innerHTML.
    //adicionar luz na selecao de escolha com vitoria
    userChoise_div.classList.add('green-glow');

    setTimeout(() => userChoise_div.classList.remove('green-glow') ,800);
    }


function lose(userChoise,pcChoise) {
    const userChoise_div = document.getElementById(userChoise)
    compPoint++;
    compPoint_temp.innerHTML = compPoint;//imprime o ponto ganho do PC
    userPoint_temp.innerHTML = userPoint; //imprime o ponto igual do user
    result_p.innerHTML = `+___+  ${letterToWords(pcChoise)} (U) beats ${letterToWords(userChoise)} (PC) YOU LOSE +___+`;
    userChoise_div.classList.add('red-glow');

    setTimeout(()=> userChoise_div.classList.remove('red-glow') ,800)};



function draw(userChoise,pcChoise) {
    const userChoise_div = document.getElementById(userChoise)
    result_p.innerHTML = `===DRAW=== ${letterToWords(pcChoise)} (U) VERSUS ${letterToWords(userChoise)} (PC) ===DRAW===`;

    userChoise_div.classList.add('yellow-glow');

    setTimeout(()=> userChoise_div.classList.remove('yellow-glow') ,800);
}


//funcao do click do user
function game(user_click) {
    const pcbet = comp_click();
    switch (user_click + pcbet) {
        //aqui vemos os casos que o user ganha 
        case "rs":
        case "pr":
        case "sp":
            win(user_click,pcbet);
        break;
        //agora o caso do computador ganhar
        case "rp":
        case "ps":
        case "sp":
            lose(user_click,pcbet)
            break;
        //caso de empate
        default:
        case "rr":
        case "pp":
        case "ss":
            draw(user_click,pcbet)
            break;
    }


    //  console.log(" user escolher => "+ user_click);
    //  console.log("pc escolhe  =>" + pcbet);
    //testando para ver a mecanica de escolha do user e escolha do pc (random)
}

// adicionar eventos de click de usuario 
// log para checar se o click foi lido pelo pc/
function main() {
    rock_div.addEventListener('click', ()=>game("r"));
        // console.log("Hey you clicked in rock option!"); seo ouser clicou em rock ira chamar uma funcao game()

    paper_div.addEventListener('click', ()=> game("p"));
        // console.log("Hey you clicked in paper option!");

    scissor.addEventListener('click',  ()=>game("s"));
        // console.log("Hey you clicked in scissor option!");
    
}

main();

