
function rando_num(max_number) {
    return Math.round(Math.random() * max_number);
}
// fazer interacao do botao pelo DOM pegar o botao e o campo de resposta
let btn = document.querySelector('button')
let balltalked = document.querySelector('#balltalked')


//agora queremos adicionar um evento de click do usuario.
btn.addEventListener("click", function(){
    //gerar um numero aleatorio 
    //criar um numero da resposta
    let msg = rando_num(3);
    // alert(numero); mostra o numero sorteado
    //transformar o numero sorteado em texto,ciar a variavel vazia aonde entra a string
    let msgtext= "";

    if(msg==0){
        msgtext = " My reply is no.";
    }
    else if (msg== 1 ){
        msgtext = " Signs point to yes.";
    }
    else if (msg== 2){
        msgtext = "Yes ";
    }
    else if (msg ==3){
        msgtext = "Don’t count on it.";
    }
    balltalked.innerText = msgtext;
    //mostrar a resposta no campo dedicado.

});