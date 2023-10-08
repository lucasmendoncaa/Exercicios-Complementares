

function calcularDesconto() {
    var captarNome = parseFloat(document.getElementById('valorproduto').value);
    var captarQuantidade = parseFloat(document.getElementById('quantidadeproduto').value);
    var captarDesconto = parseFloat(document.getElementById('descontoproduto').value);

    var calcularResultado = document.getElementById('resultado');

    var calcularValorEQuantidade = (captarNome * captarQuantidade);
    calcularResultado.innerText = "O valor do produto fica em: " + (calcularValorEQuantidade - [calcularValorEQuantidade * (captarDesconto / 100)]).toFixed(2);
}