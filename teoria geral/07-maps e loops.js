const valorDolar = 5.35;
const valorEuro = 6.2;

const loteTransferenciaEmReal = [
  100000, 20000, 5000, 770000, 550, 700000, 50000, 500, 4000,
];

const loteTransferenciasConvertidasEmDolar = loteTransferenciaEmReal.map(
  (valor) => {
    return valor / valorDolar;
  }
);
const loteTransferenciasConvertidasEmEuro = loteTransferenciaEmReal.map(
  (valor) => {
    return valor / valorEuro;
  }
);
console.log("Valor em Dolar: " + loteTransferenciasConvertidasEmDolar);
console.log("Valor em Euro: " + loteTransferenciasConvertidasEmEuro);
