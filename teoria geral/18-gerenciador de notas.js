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
    if (this.notas.find((nota) => nota.titulo === titulo)) {
      return titulo;
    } else {
      return "Nenhum conteudo encontrado";
    }
  },
};

gerenciadorDeNotas.adicionarNota("Estudar 4 vezes no dia", "Modulo 2");
gerenciadorDeNotas.adicionarNota("comprar novo teclado", "Modulo 2");

gerenciadorDeNotas.buscarNota("comprar novo teclado");

console.log(gerenciadorDeNotas.buscarNota("Estudar 4 vezes no dia"));

// console.log(gerenciadorDeNotas.notas);
