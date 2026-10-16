const aplicarOperacao = (a, b, operacao) => {
    return operacao(a, b);
}

const soma = (x, y) => x + y;
const multiplicacao = (x, y) => x * y;
const subtracao = (x, y) => x - y;

console.log(aplicarOperacao(8, 2, soma));
console.log(aplicarOperacao(8, 2, multiplicacao));
console.log(aplicarOperacao(8, 2, subtracao));