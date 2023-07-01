/* 
Luiz otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 de altura e seu imc é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
imc = peso / (altura * altura)
let anoNascimento;
anoNascimento = 2023 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu imc é de ${imc}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)
