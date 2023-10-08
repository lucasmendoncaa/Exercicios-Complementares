

function carregarImagem() {
    var imagem = document.getElementById('imagem');
    var frase = document.getElementById('resultado');
    var n1 = parseFloat(document.getElementById('nota1').value);
    var n2 = parseFloat(document.getElementById('nota2').value);

    var media = (n1 + n2) / 2;


    if (media >= 6) {
        //imagem.src = altera o valor que estava na tag img src
        imagem.src = "/exe03/imagens/aprovado.png";
        frase.innerText = "Aprovado";
        frase.innerText = "Sua média é " + media + ", você foi Aprovado!";
        return true;
    }else {
        imagem.src = "/exe03/imagens/reprovado.jfif";
        frase.innerText = "Sua média é " + media + ", você foi Reprovado!";
        return false;
    }
}