// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- {...} <-
// pessoa = { nome: 'Ana' } 

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABCa'
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)