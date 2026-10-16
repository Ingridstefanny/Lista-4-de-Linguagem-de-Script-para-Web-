const alunos = [
    {nome:"Ana",media:8.5},
    {nome:"Bruno",media:6},
    {nome:"Carla",media:9},
    {nome:"Davi",media:5.5}
];

let encontrar = alunos.find(function(aluno){
    return aluno.media < 7;
});

let verificar = alunos.some(function(aluno){
    return aluno.media >= 9;
});

let verificarTodos = alunos.every(function(aluno){
    return aluno.media >= 7;
});

console.log(encontrar.nome);
console.log(verificar);
console.log(verificarTodos);