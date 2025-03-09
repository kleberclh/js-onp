const pessoas = [
  {
    nome: "Kleber",
    idade: 26,
    religiao: "catolico",
    interesses: ["FULL STACK", "FRONT END"],
    conjuge: {
      nome: "Lari",
      idade: 26,
    },
  },
  {
    nome: "Lari",
    idade: 26,
    religiao: "catolico",
    interesses: ["ADM", "PET"],
    conjuge: {
      nome: "Kleber",
      idade: 26,
    },
  },
];

// FIND
function pesquisar() {
  const nome = document.getElementById("inputs").value;
  console.log(
    pessoas.find((item) => {
      if (nome === "") {
        console.log("Precisa ser informado algum dado");
        return;
      }
      return item.idade === nome;
    })
  );
}

// FIND - vai retornar o primeiro item do array pesquisado ou informado

//FILTER

// console.log(pessoas.filter((item) => item.idade === 26));

//FILTER - VAI CRIAR UM ARRAY E RETORNAR TODOS OS ITENS QUE SATISFAÇAM A CONDIÇÃO

// MAP - vai mapear o array pegar item a item e criar um array e retornar de acordo com uma função
const resultado = pessoas.map((item, index) => {
  const nomeAnterior = item.nome;
  if (nomeAnterior === "Kleber") {
    item.nome = nomeAnterior.toUpperCase();
  }
  return item;
});

console.log(resultado);
