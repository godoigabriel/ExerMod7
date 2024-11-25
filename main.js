function validarFormulario() {
    let campoA = document.getElementById('campoA').value;
    let campoB = document.getElementById('campoB').value;
    
    if (isNaN(campoA) || isNaN(campoB)) {
        alert('Por favor, insira números válidos em ambos os campos.');
        return false;
    }
    
    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);
    
    if (campoB > campoA) {
        alert('Formulário válido! Número B é maior que número A.');
        return true;
    } else {
        alert('Formulário inválido! O número B deve ser maior que o número A.');
        return false;
    }
}
