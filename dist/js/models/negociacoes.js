export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes; //aqui é só leitura, entao nao vai dar para mudar, alterar ou deletar, é apenas leitura, e nesse caso faz todo sentido
    }
}
