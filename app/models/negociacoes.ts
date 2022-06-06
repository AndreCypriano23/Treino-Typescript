import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

     public adiciona(negociacao: Negociacao){
      
        this.negociacoes.push(negociacao);
     }

     public lista(): readonly Negociacao[] { 
        return this.negociacoes;  //aqui é só leitura, entao nao vai dar para mudar, alterar ou deletar, é apenas leitura, e nesse caso faz todo sentido
     }

}
