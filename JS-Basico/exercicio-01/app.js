// Imprima no console a seguinte frase: Meu nome é "NOME". Estou aprendendo JavaScript às "HORA" da manhã

const nome = 'Samuel';
const hora = new Date().getHours();
const minutos = new Date().getMinutes();

console.log(`Meu nome é ${nome}. Estou aprendendo JavaScript às ${hora}:${minutos}`);