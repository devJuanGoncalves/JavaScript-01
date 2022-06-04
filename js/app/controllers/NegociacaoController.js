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
            new Date(...this.#data.value
                    .split('-')
                    .map(function(item, indice) {
                        return item - indice % 2;
                    })
                ),
            this.#quantidade.value,
            this.#valor.value
        );

        console.log(negociacao);
    }

}