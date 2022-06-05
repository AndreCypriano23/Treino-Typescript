export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    // Se explicitar private ou public no construtor da minha classe, isso indica pro TS
    //que por debaixo dos panos ele cria uma propriedade da minha classe que tenha o mesmo nome do meu parametro do construtor
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
