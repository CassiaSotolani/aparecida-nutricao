// Quando clicamos no botão adicionar
function adicionarPaciente(event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obterPacienteDoForm(form);

    var pacienteTr = montarTr(paciente);

    var erros = validarPaciente(paciente);

    if(erros.length > 0) {
        exibirMensagemDeErro(erros);
        return;
    }

    // Adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = '';
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
    var erros = [];
    if(paciente.nome.length == 0) {
        erros.push('O nome do paciente não pode ser vazio!');
    }

    if(!validarPeso(paciente.peso)) {
        erros.push('Peso é inválido!');
    }

    if(!validarAltura(paciente.altura)) {
        erros.push('Altura é inválida!');
    }

    if(paciente.gordura.length == 0) {
        erros.push('A gordura do paciente não pode ser vazia!');
    }

    if(paciente.peso.length == 0) {
        erros.push('O peso não pode ser vazio!');
    }

    if(paciente.altura.length == 0) {
        erros.push('A altura não pode ser vazia!');
    }

    return erros;
}

function exibirMensagemDeErro(erros) {
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';

    for(var i = 0; i < erros.length; i++) {
        var li = document.createElement('li');
        li.textContent = erros[i];
        ul.appendChild(li);
    }
}

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', adicionarPaciente);