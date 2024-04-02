let listaDeNumerosSorteados = []
let numLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número Secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}
exibirMensagemInicial()

verificarChute = () => {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `voce descobriu numero secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero é menor')
        } else {
            exibirTextoNaTela('p', 'num é maior')
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1)
    let quantidadeElement = listaDeNumerosSorteados.length;

    if(quantidadeElement == numLimite) {
        listaDeNumerosSorteados = []
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

limparCampo = () => {
    chute = document.querySelector('input');
    chute.value = '';
}

reiniciarJogo = () => {
    exibirMensagemInicial()
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
