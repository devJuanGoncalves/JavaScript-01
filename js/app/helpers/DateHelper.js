class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada.');
    }

    static textoParaData(texto) {
        return new Date(...texto.split('-').map((item, indice) => item - (indice % 2)));
    }

    static dataParaTexto(data) {
        if (!/^\d{4}-\d{2}-{2}$/.test(texto)) { throw new Error('Deve estar no formato yyyy-mm-dd'); }

        return  `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

}