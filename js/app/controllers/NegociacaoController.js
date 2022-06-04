class NegociacaoController {
  #data;
  #quantidade;
  #valor;

  constructor() {
    let $ = document.querySelector.bind(document);

    this.#data = $('#data');
    this.#quantidade = $('#quantidade');
    this.#valor = $('#valor');
  }

  adicionaNegociacao(event) {
    event.preventDefault();

    let negociacao = new Negociacao(
      new Date(
        ...this.#data.value
          .split('-')
          .map((item, indice) => item - (indice % 2))
      ),
      this.#quantidade.value,
      this.#valor.value
    );

    console.log(negociacao);
  }
}

/*

O controller é aquele que recebe as ações do usuário e que sabe interagir com o modelo. 
Como o modelo é independente da view, esta precisa ser renderizada para que reflita as 
alterações no modelo. Em suma, o controller é a ponte de ligação entre a view e o modelo.

*/