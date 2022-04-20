var titulo = document.querySelector('.titulo');
titulo.textContent = "Cassia Sotolani - Nutrição";

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector('.info-imc');

    var pesoEhValido = validarPeso(peso);
    var alturaEhValida = validarAltura(altura);

    if(!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        pacientes[i].classList.add('paciente-invalido');
    }

    if(!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        pacientes[i].classList.add('paciente-invalido');
    }

    if(alturaEhValida && pesoEhValido) {
        var imc = calcularImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calcularImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validarPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validarAltura(altura) {
    if(altura >= 0 && altura < 3.0) {
        return true;
    } else {
        return false;
    }
}