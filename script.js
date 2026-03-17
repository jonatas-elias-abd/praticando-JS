/*
    Comentários em Blocos
*/

// Comentários em Blocos

// Variáveis - O que são?
/*
    "Caixinhas" que guardam informações
*/

/*
    Palavras chave para criar variáveis

        Const
            Quando o valor não pode mudar (+ seguro)

        Let
            Quando o valor pode mudar (+ utilizado)

        Var
            Forma antiga de declarar variáveis (evitar usar)
*/ 

const idade = 30; // "Caixinha" idade recebe o valor de 30.

let nome = "Késsia"; // tudo que não for número, recebe aspas

var cidade = "São Caetano do Sul";



//              IMPRIMIR VALORES
/*
    console.log(idade); // imprimir o valor 30
    console.log(nome); // imprimir o valor "Késsia"
    console.log(cidade); // imprimir o valor "São Caetano do Sul"
*/

// Alterando valores
/*
    console.log(nome); // antes de alterar o nome

    nome = "Lucas";
    console.log(nome); // depois de alterar o nome

    console.log(idade);

    idade = 25
    console.log(idade);


    let tamanho; // permite criar variável vazia
    const cor; // não permite criar variavel vazia
*/

/*
// Interpolação
console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade`);
console.log("Juntando nome " + nome + " com idade " + idade);
*/

/*
//tipos primos

// 1. String (textos em geral)
let mensagem = "Olá Mundo!";
console.log(typeof mensagem); // imprime o tipo do dado ()

// 2. Number (numero -> armazena números inteiros ou decimais)

let quantidade = 5          // número inteiro
let temperatura = 36.5      // número decimal (casa dps da vírgula)
console.log(typeof quantidade);

// 3. Booleab (verdadeiro ou falso)

let estachovendo = true
let temsol = false
console.log(typeof temsol);

// 4. Undefined -> Variável ainda não recebeu um valor
let pedido;
console.log(typeof pedido);

// 5. Null -> Intensionalmente sem valor (usado para representar ausência intencional de valor)
let endereco = null;

console.log(typeof endereco);
*/

// Conversão de Tipos

/*
// 1. Conversão Implícipa (automática)
console.log("5" + 3); // concatenação -> 53 (tipo string)
console.log("5" - 3); // 2 (tipo number)

// 2. Conversão Explicita (manual)
// Acontece usando funções

//  converter para número:
let numero = "42"; // string (texto)
console.log(typeof numero);

let numeroConvertido = Number(numero) //converteu para Number
console.log(typeof numeroConvertido);

// converter para String
let num = 100;
console.log(typeof num);

let texto = String(num); //convertendo o número para texto
console.log(typeof texto);

//converter booleano para numero
let trueConvertido = Number(true)
console.log(trueConvertido);

let falseConvertido = Number(false)
console.log(falseConvertido);
*/


// Operadores relacionais
// Servem para comparar valores

/*
    > maior que
    < menor que
    >= maior ou igual
    <= menor ou igual
    == igualdade (ignora o tipo)
    === igualdade (verifica o tipo)
    != Diferente (ignora o tipo)
    !== Diferente (verifica o tipo)
*/
/*
// Exemplos: 
console.log(10 > 5); // true (verdadeiro)
console.log(10 < 5); // false (falso)

// diferença entre == e ===
console.log(5 == "5");      // ignora o tipo (true)
console.log(5 === "5");     // verifica o tipo (false)
*/

// Operadores Matemáticos
// São usados para fazer cálculos - como soma, multiplicação, etc.

/*

    +   Soma
    -   Subtração
    *   Multiplicação
    /   Divisão
    %   Resto da Divisão
    **  Potência

*/

// Exemplos:
let a = 10;
let b = 5;

console.log(a + b);     // soma             -> 15
console.log(a - b);     // subtração        -> 5
console.log(a * b);     // multiplicação    -> 50
console.log(a / b);     // divisão          -> 2

// Exemplo
// Operador de Resto
console.log(10 % 3); // retornar o resto -> 1

// Operador de Potência
console.log(2 ** 3); // 2³ ou 2 elevado a 3 -> 2 * 2 * 2


