const listarAprovados = (lista, mediaMinima = 7) => {
    return lista.filter(n => n.media >= mediaMinima).map(n => n.nome.toUpperCase());
}

const alunos = [
    { nome:"ana", media:8.5 },
    { nome:"bruno", media:6 },
    { nome:"carla", media:7.5 },
    { nome:"davi", media:9 },
];

console.log(listarAprovados(alunos));
console.log(listarAprovados(alunos, 8));