const pessoas = {
  nome: "Kleber",
  idade: 26,
  interesses: ["FULL STACK", "FRONT END"],
  conjuge: {
    nome: "Lari",
    idade: 26,
  },
  getNome: function () {
    return this.nome;
  },
  getIdade: function () {
    return this.idade;
  },
  getNomeEIdade: function () {
    return `Meu nome é: ${this.getNome()} e minha idade é: ${this.idade}`;
  },
};

console.log(pessoas.getNomeEIdade());
