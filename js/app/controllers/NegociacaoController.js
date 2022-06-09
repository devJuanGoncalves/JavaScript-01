class NegociacaoController {
  #data;
  #quantidade;
  #valor;
  #listaNegociacoes;

  constructor() {
    let $ = document.querySelector.bind(document);

    this.#data = $('#data');
    this.#quantidade = $('#quantidade');
    this.#valor = $('#valor');
    this.#listaNegociacoes = new ListaNegociacoes();
  }

  adicionaNegociacao(event) {
    event.preventDefault();

    this.#listaNegociacoes.adiciona(this.#novaNegociacao());

    console.log(this.#listaNegociacoes.negociacoes);

    this.#limpaFormulario();
  }

  #novaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this.#data.value),
      this.#quantidade.value,
      this.#valor.value
    );
  }

  #limpaFormulario() {
    this.#data.value = '';
    this.#quantidade.value = 1;
    this.#valor.value = 0.0;

    this.#data.focus();
  }
}

/*

O controller é aquele que recebe as ações do usuário e que sabe interagir com o modelo. 
Como o modelo é independente da view, esta precisa ser renderizada para que reflita as 
alterações no modelo. Em suma, o controller é a ponte de ligação entre a view e o modelo.

*/
