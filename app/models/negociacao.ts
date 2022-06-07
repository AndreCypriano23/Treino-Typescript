export class Negociacao{

    constructor(
        private readonly _data: Date,
        public readonly quantidade: number, 
        public readonly valor: number)
    {}
    // Se explicitar private ou public no construtor da minha classe, isso indica pro TS
    //que por debaixo dos panos ele cria uma propriedade da minha classe que tenha o mesmo nome do meu parametro do construtor

    get volume(): number{
        return this.quantidade * this.valor;
    }

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g; //Expressão regular
        const date = new Date(dateString.replace(exp, ','));//procura todo mundo que tem - e substitui por ,
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);

    }

}