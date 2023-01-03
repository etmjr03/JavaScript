// String
console.log("Bem-vindo(a)!")
console.log('"Bem-vindo(a)!"')
console.log("'Bem-vindo(a)!'")
console.log("Bem-vindo(a)!'''")

// interpolação
console.log(`
Resultado ${1 + 1}
`)

// Number
/*
    33 - inteiro
    33.5 - reais / float
    NaN - not a number
    Infinity - infinito
*/
console.log(12.5 + 33)
console.log(33 / "aaa")
console.log(33 === Infinity)

// Boolean

/*
    true - verdadeiro
    ou
    false - falso
*/

// Undefined vs Null

/* 
    Undefined - indefinido
    Null - objeto não possui nada dentro e diferente de indefinido
*/

console.log(undefined)
console.log(null)
console.log(null === undefined)

// Object

/*
    Objeto tem propriedades e propriedades tem atributos
    também tem funcionalidades e métodos.

    {
        propriedade: "valor"
    }
*/

console.log({
    name: "Juninho",
    idade: 23,
    jogar: function() {
        console.log("está jogando!")
    }
})

// Array ou Vetores

    console.log([
        "Frango",
        "Ovo",
        "Tapioca",
        "Arroz",
])

// Todos os tipos de dados

/*
    De acordo com o ECMAScript standard temos 9 tipos de dados:

    # Data types
        * Primitive / Primitive value
        * Structural
        * Structural Primitive

    # Primitivos
        * String
        * Number
        * Boolean
        * undefined
        * Symbol
        * BigInt

    # Estrutural
        * Array
        * Map
        * Set
        * Date
        * ...
    
    # Function

    # Primitivo Estrutural / Structural Root Primitive
        * null 

*/