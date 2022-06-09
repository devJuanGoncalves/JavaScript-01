class NegociacoesView {

    #element;

    constructor(element) {
        this.#element = element;
    }

    #template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map(n => {
                        console.log(n)
                        return `
                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>                                              
                        `;

                    }).join('')}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `;
    }

    update(model) {        
        this.#element.innerHTML = this.#template(model);
    }

}