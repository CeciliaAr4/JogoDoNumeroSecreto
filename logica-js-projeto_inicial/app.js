alert('Boas vindas ao jogo do número secreto'); 
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let chute; 
let tentativas = 1; 

//enquanto o chute não for igual ao n. s.  
while(chute != numeroSecreto){
    chute = prompt(`Esccolha um número entre 1 e ${numeroMaximo}`);
    //se chute for igual ao número secreto
    if ( chute == numeroSecreto ){
        
    } else{
        if (chute > numeroSecreto ){
            alert(`O numero secreto é menor que  ${chute}`);
        } else {
            alert(`O numero secreto é maior que  ${chute}`);
        }
        //Para atribuir +1 usamos 
        tentativas++;
    }
    }

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai Você descobriu o número secreto ${numeroSecreto} com ${tentativas}  ${palavraTentativa} `);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }



