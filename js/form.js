function adicionarPaciente(event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    // Extraindo informações do paciente do form
    var paciente = obterPacienteDoForm(form);

    // Cria a tr e a td do paciente
    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularImc(peso, altura);
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // Adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr);

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

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', adicionarPaciente);