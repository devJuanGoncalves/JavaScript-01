class Negociacao {

    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = new Date(data.getTime());
        this.#quantidade = quantidade;
        this.#valor = valor;        
    }

    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    }

    get volume() {
        return this.quantidade * this.valor;
    }

    get negociacao() {
        return {
            data: this.#data,
            quantidade: this.#quantidade,
            valor: this.#valor
        }
    }

}

/*

Função dentro de uma classe = Método
Função fora de uma classe = Função

-----------

Desde o ES2019 já é possível utilizar atributos privados no javascript.

-----------

O padrão MVC permite que alterações de layout na view não acarretem alterações no modelo.

*/