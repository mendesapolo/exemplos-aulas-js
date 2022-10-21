let pessoa = {
    nome: 'Kami-sama',
    idade: 23,
    andar: () => {
        console.log('Andando...')
    },
    incrementarIdade: () => {
        pessoa.idade++
    }
}

function Pessoa(nome = 'Anything', idade = 12) {
    this.nome = nome
    this.idade = idade
    this.andar = () => {
        console.log('andar2...')
    }
    this.incrementarIdade = () => {
        this.idade++
    }
}

let pessoa2 = new Pessoa('Mauricio', 23)
let pessoa4 = new Pessoa()
let p3 = pessoa

console.log(pessoa.nome)
console.log(pessoa.idade)
pessoa.andar() 

p3.nome = 'Armando'
console.log('PEssos 3: ' + p3.idade)
console.log(pessoa.nome);

console.log(pessoa2.nome)
pessoa2.incrementarIdade()
console.log(pessoa2.idade)
pessoa2.andar()


console.log(pessoa4)

const obj = new Object({ nome: 'sameone', idade: 12 })

obj.nome = "Naruto Uzumaki"
console.log(obj)
console.log(pessoa2.idade)