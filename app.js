Limpar();

function calcular() {
    let nome = document.getElementById('nome-text').value;
    let alturaStr = document.getElementById('a-text').value;
    let pesoStr = document.getElementById('p-text').value;
    let text = document.getElementById('text');

    

    let altura = parseFloat(alturaStr);
    let peso = parseFloat(pesoStr);

    if (isNaN(altura) || peso <= 0) {
        alert("Por favor, insira valores numéricos válidos para altura e peso.")
        return
      }

    let massaCorporal = peso / (altura * altura);
    let imcFormatado = massaCorporal.toFixed(2);
    
    if ( massaCorporal >= 30) {
        text.innerHTML = ` ${nome} O seu imc é ${imcFormatado} é está no Obesidade 1 `
        
    } else if ( massaCorporal >= 25 || massaCorporal >= 29.9 ) {
         text.innerHTML = ` ${nome} O seu imc é ${imcFormatado} é está sobrepesso`

    }else if (massaCorporal >= 18.6) {
            text.innerHTML = ` ${nome} O seu imc é ${imcFormatado} é está no peso normal`
     
    } else {
         text.innerHTML = `${nome} O seu imc é ${imcFormatado} é está abaixo`
    }

}

function Limpar() {
    document.getElementById('nome-text').value = '';
    document.getElementById('a-text').value = '';
    document.getElementById("p-text").value = '';
    document.getElementById('text').innerHTML = "Calculando...";
  
  }