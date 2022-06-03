class Negociacao {

    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    obtemVolume() {
        return this.quantidade * this.valor;
    }

}

/*

Função dentro de uma classe = Método
Função fora de uma classe = Função

*/