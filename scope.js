/*
    # Scope
        * Escopo determina a visibilidade de alguma variável no JS

    # Block statement

    o bloco também criará um novo escopo, chamamos de 'block-scoped'
*/

//Block statement - hoisting é quando o js cria uma variavel por debaixo dos prrrrrrrrranos e elevando

// **var é global

// var x = "sim";

console.log("existe x antes do bloco?", x);

{
    var x = "sim";
}

console.log("existe x antes do bloco?", x);

// ** const e let - são locais e só funcionam no escopo onde foi criada

// let

let y = "sim";

{
    let y = "sim";
    console.log("existe x antes do bloco?", y);  
}

    console.log("existe x antes do bloco?", y);

{
    const y = "não";

    {
        const y = "sim";
        console.log("existe x antes do bloco?", y); 
    }
}
