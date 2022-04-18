var titulo = document.querySelector('.titulo');
titulo.textContent = "Cassia Sotolani - Nutrição";

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector('.info-imc');

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
    }

    if(altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
    }

    if(alturaEhValida && pesoEhValido) {
        var imcPrimeiroPaciente = (peso / (altura * altura));
        tdImc.textContent = imcPrimeiroPaciente.toFixed(2);
    }
}

