// Nao podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Nao pode comecar o nome de uma constante com um numero
// Nao podem conter espacos ou tracos
// Utilizamos camelCase
// Case-sensitive
// Nao pode modificar o valor de uma constante
// NAO UTILIZE VAR, UTILIZE CONST

// Como declarar e usar um constante
const nome = 'Samuel';
console.log(nome);

// Nao posso mudar a constante
const name = 'Samuel';
// name = 'Tois';

const primeiroNumero = 5;
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);