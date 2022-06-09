class NegociacaoController {
  #data;
  #quantidade;
  #valor;
  #listaNegociacoes;
  #negociacoesView;
  #mensagem;
  #mensagemView;

  constructor() {
    let $ = document.querySelector.bind(document);

    this.#data = $('#data');
    this.#quantidade = $('#quantidade');
    this.#valor = $('#valor');
    this.#listaNegociacoes = new ListaNegociacoes();
    
    this.#negociacoesView = new NegociacoesView($('#negociacoesView'));
    this.#negociacoesView.update(this.#listaNegociacoes);
    this.#mensagem = new Mensagem();
    this.#mensagemView = new MensagemView($('#mensagemView'));
  }

  adicionaNegociacao(event) {
    event.preventDefault();

    this.#listaNegociacoes.adiciona(this.#novaNegociacao());
    this.#mensagem.texto = 'Negociação cadastrada com sucesso';
    this.#mensagemView.update(this.#mensagem);
    this.#negociacoesView.update(this.#listaNegociacoes);   
    this.#limpaFormulario();
    console.log(this.#listaNegociacoes.negociacoes);
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
