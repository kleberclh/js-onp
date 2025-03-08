const vendas = [250, 800, 200, 752];

let total = 0;
vendas.map((valorVenda) => {
  total = total + valorVenda;
});

console.log(total);
