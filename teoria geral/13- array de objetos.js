const pessoa = {
  nome: "Kleber",
  idade: 26,
  interesses: ["FULL STACK", "FRONT END"],
  conjuge: {
    nome: "Lari",
    idade: 26,
  },
};

const pessoas = [
  {
    nome: "Kleber",
    idade: 26,
    interesses: ["FULL STACK", "FRONT END"],
    conjuge: {
      nome: "Lari",
      idade: 26,
    },
  },
  {
    nome: "Lari",
    idade: 26,
    interesses: ["ADM", "PET"],
    conjuge: {
      nome: "Kleber",
      idade: 26,
    },
  },
];

console.log(pessoas); 
//para acessar o objeto precisa informa em [] o indice, 0 para kleber e 1 para lari
