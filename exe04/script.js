

function enviarFormulario() {
    var captarNome = document.getElementById('nome').value;
    var captarSexo = document.getElementById('sexo').value;
    var result = document.getElementById('result');
    var captarAnoNascimento = document.getElementById('anonascimento').value;
    var recusaNascimento = document.getElementById('recusaanonascimento');
    var captarMarca = document.getElementById('marca').value;
    var captarModelo = document.getElementById('modelo').value;
    var captarAnoFabricacao = parseInt(document.getElementById('anofabricacao').value);
    var recusaFabricacao = document.getElementById('recusaanofabricacao');
    var captarValor = parseFloat(document.getElementById('valorveiculo').value);
    var captarPorcentagemBonus = parseFloat(document.getElementById('porcentagembonus').value);





    //limitando o ano de nascimento
    if (captarAnoNascimento < 1901 || captarAnoNascimento > 2001) {
        recusaNascimento.innerText = "Ano de nascimento inválido";
    } else{
        if (captarAnoFabricacao > 0) {
            result = document.getElementById('result').innerText = "Seu nome é " + captarNome + ", sexo " + captarSexo[0] + " nasceu no ano de " + captarAnoNascimento + ".\n" + 
            "Seu veículo da marca " + captarMarca + " do modelo " + captarModelo + " ano de fabricação " + captarAnoFabricacao + " no valor de R$: " + captarValor.toFixed(2) + ". Seu bônus é de " + captarPorcentagemBonus + ".";
        }else{
            recusaFabricacao.innerText = "Ano de fabricação inválido";
        }
        
    }

    

}