export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // Se explicitar private ou public no construtor da minha classe, isso indica pro TS
    //que por debaixo dos panos ele cria uma propriedade da minha classe que tenha o mesmo nome do meu parametro do construtor
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
