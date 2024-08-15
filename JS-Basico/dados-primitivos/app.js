// String, number, undefined, null, boolean, symbol

const nome = 'Samuel'; // String
const numero = 10; // Number
const numero2 = 10.45; // Number
let nomeAluno; // undefined -> nao aponta para local nenhum na memoria
const sobrenome = null; //Nulo -> nao aponta para local nenhum na memoria
const boolean = true; // true or false

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);
