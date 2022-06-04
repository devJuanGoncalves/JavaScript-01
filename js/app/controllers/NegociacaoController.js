class NegociacaoController {

    adicionaNegociacao(event) {
        event.preventDefault();

        let $ = document.querySelector.bind(document);

        let negociacao = {
            data: $('#data'),
            quantidade: $('#quantidade'),
            valor: $('valor')
        }

        console.log(negociacao.data.value);
    }

}