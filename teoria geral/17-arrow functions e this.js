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
  getNomeEIdade: () => {
    function getNome() {
      return "Alguma coisa";
    }
    function getIdade() {
      return 26;
    }
    return `Meu nome é: ${getNome()} e minha idade é: ${getIdade}`;
  },
};

console.log(pessoas.getNomeEIdade());

// function () {} = herda o escopo em que foi definida

// () => {} = não herda o escopo em que foi definida ela tem seu prorpio escopo