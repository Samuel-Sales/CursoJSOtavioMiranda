/*
    Samuel Sales tem 25 anos, pesa 68 kg
    tem 1.73 de altura e seu IMC eh de "NUMERACAO"
    Samuel Sales nasceu em 1999
 */

const nome = 'Samuel';
const sobrenome = 'Sales';
const idade = 25;
const peso = 68;
const altura = 1.73;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG, tem ${altura} de altura e seu IMC eh de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);