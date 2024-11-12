function calcular() {
    let nome = document.getElementById('nome-text').value;
    let alturaStr = document.getElementById('a-text').value;
    let pesoStr = document.getElementById('p-text').value;
  
    let altura = parseFloat(alturaStr);
    let peso = parseFloat(pesoStr);

    let massaCorporal = peso / (altura * altura);
    let imcFormatado = massaCorporal.toFixed(2);
    console.log("O IMC de " + nome + " é: " + imcFormatado);

}