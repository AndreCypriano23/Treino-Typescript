import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.DOMINGO = 0;
        this.SABADO = 6;
        //Vou no DOM e pego esses elementos e atribuo a essas propriedades do construtor da minha classe
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociacoes em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        //const negociacoes = this.negociacoes.lista();
        //console.log(negociacoes);
        this.limparFormulario();
        this.atualizaView();
    }
    ehDiaUtil(date) {
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
    }
    criaNegociacao() {
        const exp = /-/g; //Expressão regular
        const date = new Date(this.inputData.value.replace(exp, ',')); //procura todo mundo que tem - e substitui por ,
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        // 0 - 6 Dias da semana vao de 0 a 6, sendo 0 domingo e 6 sábado
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}
