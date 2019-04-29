/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const array = ['Celular', 'Notebook', 'Teclado', 'Mouse', 'Monitor'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArray(array[2]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newArray(arr, index){
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const anotherArray = [true, 2, 'Hello', {nome: 'Alexandre'}, ['1', '3']];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(newArray(anotherArray, 0));
console.log(newArray(anotherArray, 1));
console.log(newArray(anotherArray, 2));
console.log(newArray(anotherArray, 3));
console.log(newArray(anotherArray, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function mybooks(book){
    const bookNames = {
        'O Rei de Amarelo': {
            quantidadePáginas: 253,
            autor: 'Robert W. Chambers',
            editora: 'Intrínseca'
        },
        'Contos De Dostoievski': {
            quantidadePáginas: 263,
            autor: 'Dostoievski',
            editora: 'Cultrix'
        },
        'Hollywood': {
            quantidadePáginas: 235,
            autor: 'Charles Bukowski',
            editora: 'L&PM editores'
        }
    };
    return !book ? bookNames : bookNames[book];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(mybooks());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let theBook = 'O Rei de Amarelo';
console.log('O livro ' + theBook + ' tem ' + mybooks(theBook).quantidadePáginas + ' páginas.');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
theBook = 'Hollywood';
console.log('O autor do livro ' + theBook + ' é ' + mybooks(theBook).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
theBook = 'Contos De Dostoievski';
console.log('O livro ' + theBook + ' foi publicado pela editora ' + mybooks(theBook).editora + '.');