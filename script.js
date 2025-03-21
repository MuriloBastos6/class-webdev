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

let tasks = [
    {id: 1, tarefa:"estudar js"},
    {id: 2, tarefa:"aprender" }
]
console.log(tasks)
console.log(tasks [0])
console.log(tasks[0]["id"])

let tarefa = { id: 1, tarefa: "esudar js"};

console.log(tarefa);
console.log(tarefa.id);
console.log(tarefa.tarefa);

let hoje = new Date ();
console.log(hoje);

let patter = /^[a-z]+$/i;
console.log(patter);











