const vendas = [250, 800, 200, 752];

const total = vendas.reduce((acumulador, valorVenda) => {
  return acumulador + valorVenda;
});

// let total = 0;
// vendas.map((valorVenda) => {
//   total = total + valorVenda;
// });

console.log(total);
