const gerenciadorDeNotas = {
  notas: [
    {
      titulo: "Alguma tarefa",
      conteudo: "Descrição dessa tarefa",
    },
  ],

  adicionarNota: function (tituloNovaNota, conteudoNovaNota) {
    this.notas.push({ titulo: tituloNovaNota, conteudo: conteudoNovaNota });
  },

  buscarNota: function (titulo) {
    this.notas.find((nota) => nota.titulo.includes(titulo));
  },
  buscarNotas: function (titulo) {
    return this.notas.filter((nota) => nota.titulo.includes(titulo));
  },
};

gerenciadorDeNotas.adicionarNota("Estudar 4 vezes no dia", "Modulo 2");
gerenciadorDeNotas.adicionarNota("comprar novo teclado", "Modulo 2");

gerenciadorDeNotas.buscarNota("comprar novo teclado");

console.log(gerenciadorDeNotas.buscarNota("Estudar 4 vezes no dia"));

// console.log(gerenciadorDeNotas.notas);
