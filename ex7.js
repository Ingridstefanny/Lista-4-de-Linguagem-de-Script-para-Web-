const gerarUsuario = (nomeCompleto) => {
    return nomeCompleto.trim().toLowerCase().split(" ").join(".");
}

console.log(gerarUsuario(" Maria Clara Souza "));
console.log(gerarUsuario("JOAO LIMA"));