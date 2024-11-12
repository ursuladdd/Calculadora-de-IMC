function calcular() {
    let nome = document.getElementById('nome-text').value;
    let alturaStr = document.getElementById('a-text').value;
    let pesoStr = document.getElementById('p-text').value;
    let text = document.getElementById('text');

    let altura = parseFloat(alturaStr);
    let peso = parseFloat(pesoStr);

    let massaCorporal = peso / (altura * altura);
    let imcFormatado = massaCorporal.toFixed(2);
    
    if (massaCorporal <= 18.5) {
        text.innerHTML = `O seu imc é ${imcFormatado} é está abaixo`

    } else if (massaCorporal > 18.5) {
        text.innerHTML = `O seu imc é ${imcFormatado} é está no peso adequado`
    }

}