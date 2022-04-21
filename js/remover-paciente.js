var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
    pacientes[i].addEventListener('dblclick', clicarNoElemento);
}

function clicarNoElemento() {
    this.remove();
}