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
    static criaDe(dateString, quantidadeString, valorString) {
        const exp = /-/g; //Expressão regular
        const date = new Date(dateString.replace(exp, ',')); //procura todo mundo que tem - e substitui por ,
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
