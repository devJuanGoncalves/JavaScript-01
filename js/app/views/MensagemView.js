class MensagemView {

    #element;

    constructor(element) {
        this.#element = element;
    }

    #template(model) {
        return `<p class="alert alert-info">${model.texto}</p>`;
    }

    update(model) {
        this.#element.innerHTML = this.#template(model);
    }

}