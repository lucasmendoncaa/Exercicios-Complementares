
//Função criada para ao clicar no botão, retorne a média dos números digitados
function calcularMedia() {

    //Cada uma dessas variáveis está recebendo o valor digitado em números apenas
    var captarNumero1 = parseFloat(document.getElementById('numero1').value);
    var captarNumero2 = parseFloat(document.getElementById('numero2').value);
    var captarNumero3 = parseFloat(document.getElementById('numero3').value);
    var captarNumero4 = parseFloat(document.getElementById('numero4').value);
    var calcular;

    //Pegamos cada valor real e dividimos para realizar a média
    calcular = (captarNumero1 + captarNumero2 + captarNumero3 + captarNumero4) / 4;

    //Declarando para a variável resultado o caminho do ID resultado
    var resultado = document.getElementById('resultado');

    //Variável resultado recebendo uma alteração correspondente à variável calcular
    resultado.innerText = "A média é: " + calcular;
}