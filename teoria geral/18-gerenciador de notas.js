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
};

gerenciadorDeNotas.adicionarNota("Estudar 4 vezes no dia", "Modulo 2");

console.log(gerenciadorDeNotas.notas);
