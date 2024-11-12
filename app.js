function calcular() {
    let nome = document.getElementById('nome-text').value;
    let altura = document.getElementById('a-text').value;
    let alturaFloat = parseFloat(altura.value.replace(',', '.'));
    let peso = parseFloat(document.getElementById('"p-tex').value);

    alert(nome);
    alert(altura);
    alert(alturaFloat);
    alert(peso);
}