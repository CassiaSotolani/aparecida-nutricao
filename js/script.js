var titulo = document.querySelector('.titulo');
titulo.textContent = "Cassia Sotolani - Nutrição";

var paciente = document.querySelector('#primeiro-paciente');
var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;
var imcPrimeiroPaciente = peso / (altura * altura);

var imc = document.querySelector('.info-imc');
imc.textContent = imcPrimeiroPaciente;

console.log(tdPeso);
console.log(tdAltura);
console.log(imcPrimeiroPaciente);