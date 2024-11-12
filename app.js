function calcular() {
    let nome = document.getElementById('nome-text').value;
    let alturaStr = document.getElementById('a-text').value;
    let pesoStr = document.getElementById('p-text').value;
  
    let altura = parseFloat(alturaStr);
    let peso = parseFloat(pesoStr);

    let massaCorporal = peso / (altura * altura);
    let imcFormatado = massaCorporal.toFixed(2);
    
    if (massaCorporal <= 18.5) {
        alert('Você está a baixo do indice');
    } else if (massaCorporal > 18.5) {
        alert('Você está a no peso adequado do indice')
    }

}