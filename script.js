/*
console.log("hello world")
console.info("info")
console.warn("warning")
console.error("Error")
console.table([
    {id: 1, tarefa: "estudar JS"},
{id: 2, tarefa: "praticar"}
])

console.group("grupo de logs")
console.log("log 1")
console.log("log 2")
console.groupEnd()

console.time("timer")
// ... algum processamento
console.timeEnd("timer")

// comentario de 1 linha 

/* comentario de varias linhas


var antigo = "valor da variavel"

console.log(antigo)

let variavelMutavel = "valor que pode ser mutavel"

const variavelImutavel = "valor que não pode ser alterado"

variavelMutavel = 1
console.log(variavelMutavel)

variavelImutavel = 1

console.log(variavelImutavel)
*/
//tipo de dados primitivo//
/*
let texto = "texto"
console.log(typeof texto)

let numero = 2
console.log(typeof numero)

let isCompleted = false
console.log(typeof isCompleted)

let semValor 
console.log(typeof semValor)

let nulo = null
console.log(typeof nulo)

let uniqueId = Symbol ("id")
console.log(typeof uniqueId)

let bigNumero = 9999999999999n
console.log(typeof bigNumero)
*/


//tipos complexos de dados//

// let tasks = [
//     {id: 1, tarefa:"estudar js"},
//     {id: 2, tarefa:"aprender" }
// ]
// console.log(tasks)
// console.log(tasks [0])
// console.log(tasks[0]["id"])

// let tarefa = { id: 1, tarefa: "esudar js"};

// console.log(tarefa);
// console.log(tarefa.id);
// console.log(tarefa.tarefa);

// let hoje = new Date ();
// console.log(hoje);

// let patter = /^[a-z]+$/i;
// console.log(patter);


// Criação de strings
// let titulo = "Aprender JavaScript";
// let descricao = 'Estudar manipulação de strings';

// console.log("Título:", titulo);
// console.log("Descrição:", descricao);

// console.log("Tamanha da varialvel titulo:", titulo.length)
// console.log("Tamanha da varialvel de descrição:", descricao.length)

// console.log("Primeiro caractere:", titulo[0])

// console.log("Primeiro caractere da descrição:", descricao[0])

// console.log("Primeiro caractere:", titulo[titulo.length -1])

// const palavra = "palavra"
//  console.log("Caractere na posição 3:", palavra.charAt(3))

// let titulo = "Aprender JavaScript";

// let categoria = "Estudo";

// let infoCompleta ="categoria: " + categoria + '-' + titulo;

// console.log(infoCompleta);

// let infoCompleta = `categoria: ${categoria} - ${titulo}`
// console.log(infoCompleta);

// let texto1 = "Posição de javascript"

// console.log(texto1.indexOf
//     ("javascript"));

// console.log(texto1.includes
//     ("javascript"));


// console.log(texto1.startsWith
//     ("Posição"));

// console.log(texto1.startsWith
//     ("javascript"));

// console.log(texto1.endsWith
//     ("javascript"));    

// Função que trunca uma string se ela for maior que um tamanho máximo
// function truncarDescricao(texto, maxLength = 30) {
//     if (texto.length <= maxLength) {
//       return texto;
//     }
//     return texto.substring(0, maxLength) + "...";
//   }
  
//   let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada para exibição.";
//   console.log("Descrição truncada:", truncarDescricao(descricaoLonga));
//   console.log("Descrição truncada (20 caracteres):", truncarDescricao(descricaoLonga, 20));

// let texto = "javascript,programação,web,frontend";

// console.log("Texto original:", texto);

// console.log("Texto slice:", texto.slice(0, 10));

// console.log("Texto substring:", texto.substring(0, 10));

// let arryTags = texto.split(",");

// console.table(arryTags);

// console.log(arryTags.join(","));

// const destacarTexto = (texto, termo) => {
//     if (!termo) return texto
//     const regex = new RegExp(termo, 'gi')

//     return texto.replace(regex, `**$&**`)
// };

// let busca = destacarTexto("javascript é uma linguagem incrivel. Amo javascript! javascript é demais", "javascript");

// console.log("Resultado com destaque:", busca);

// console.log("Math.PI", Math.PI);
// console.log("Math.E", Math.E);

// const raio = 5 

// const areaDoCirculo = Math.PI * Math.pow(raio, 2);
// console.log(`Àrea do circulo com raio ${raio} : ${areaDoCirculo}`);

// let numero = 9.7;

// console.log(Math.round(numero));

// console.log(Math.floor(numero));

// console.log(Math.ceil(numero));

// console.log(Math.trunc(numero));

// const numeroAleatorioEntre = (min, max) => {
//     return Math.floor(Math.random() * (max - min
//     +1)) + min
// };

// console.log(numeroAleatorioEntre(1, 100));

// console.log(Math.random());

// const hoje = new Date();

// console.log(hoje);

// console.log(new Date("2025-06-15T10:30:00"));
// console.log(new Date("2025-06-15"));

// const dataComponentes = new Date (2025, 5, 15, 10, 30, 0);

// console.log(dataComponentes);

// const formataçãoData = (data) => {
//     const dia = data.getdate().toString().padStart(2, '0');

//     const mes = (data.getmonth() +1).toString().padStart(2, '0');

//     const ano = data.getfullyear()

//     return `${dia}/${mes}/${ano}`
// }

// console.log(hoje.getDate())
// console.log(hoje.getMonth())
// console.log(hoje.getFullYear())

// console.log(hoje)

// // console.log(formataçãoData(hoje))

// const adicionarDias = (data, dias) => {
//     const novaData = new Date(data)
//     novaData. setDate(data.getdate() + dias)
//     return novaData
// }

// console.log(adicionarDias(hoje, 3))

// const hoje = new Date();

// const dataFinal = new Date("05-11-2025")

// const diferencaMs = dataFinal - hoje 

// console.log(diferencaMs);

// const diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));

// console.log("Difernça de dias:", diferencaDias);

