// Quando clicamos no botão adicionar
function adicionarPaciente(event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obterPacienteDoForm(form);

    var pacienteTr = montarTr(paciente);

    if(!validarPaciente(paciente)) {
        console.log('Paciente inválido');
        return;
    }

    // Adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr);

    form.reset();
}

// Extraindo informações do paciente do form
function obterPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

// Cria a tr, add class e coloca td como filho
function montarTr (paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

// Cria o td do paciente e adiciona a class dos td
function montarTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validarPaciente(paciente) {
    if(validarPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', adicionarPaciente);