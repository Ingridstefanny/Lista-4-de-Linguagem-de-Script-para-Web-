const criarMultiplicador = (fator) => {
    return (x) => x * fator; 
}

const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(dobrar(5));
console.log(triplicar(5));
console.log(dobrar(10));