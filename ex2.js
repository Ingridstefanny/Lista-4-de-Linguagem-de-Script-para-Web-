const funcionarios = [
    { nome:"Lia", setor:"TI" },
    { nome:"Rui", setor:"RH" },
    { nome:"Ana", setor:"TI" },
    { nome:"Caio", setor:"Vendas" }
];

const nomesTI = funcionarios.filter(n => n.setor === "TI").map((n) => n.nome);

console.log(nomesTI);
console.log(funcionarios.length);