let recebido ='{"produto":"Monitor", "preco": 900, "estoque": 4}';

let recebidoObjeto = JSON.parse(recebido);
recebidoObjeto.preco = recebidoObjeto.preco * 0.9;
recebidoObjeto.estoque--;

console.log(typeof(recebidoObjeto));
let texto= JSON.stringify(recebidoObjeto);

console.log(typeof(texto));
console.log(texto);
