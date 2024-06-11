alert('Bem-vindo ao jogo secreto');
let numeroSecreto = parseInt(math.random() *10 + 1);
console.log (numeroSecreto);
let chute;
let tentavas =1;

// enqunato o chute não for igual ao n.s 
while(chute != numeroSecreto) {
    chute = prompt ('escolha um número entre 1 e 10');
// se chute for igual o número secreto
    if (chute ==numeroSecreto){
        break;
    } else{
        if (chute > numeroSecreto){
            alert(`o número secreto é menor que o ${chute}`);
        }else{
            alert (`o número secreto é maior que o ${chute}`);
        }
    //tentativas = tentativas + 1;
        tentativas++;
    }
}

if (tentativas >1){
    alert (`isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert (`isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}