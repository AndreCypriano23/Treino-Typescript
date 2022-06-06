import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{

    //Referencia para o input da Data e do Valor
    private inputData: HTMLInputElement;//olhe no HTML, ele é input do type date
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private readonly DOMINGO = 0;
    private readonly SABADO = 6;
   


    constructor(){
        //Vou no DOM e pego esses elementos e atribuo a essas propriedades do construtor da minha classe
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    } 

    public adiciona(): void{
        const negociacao = this.criaNegociacao();

        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociacoes em dias úteis são aceitas');
            return ;
        }

        this.negociacoes.adiciona(negociacao);
        //const negociacoes = this.negociacoes.lista();
        //console.log(negociacoes);
        this.limparFormulario();
        this.atualizaView();
       
    }

    private ehDiaUtil(date: Date){
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;  
    }

    private criaNegociacao(): Negociacao {
        const exp = /-/g; //Expressão regular
        const date = new Date(this.inputData.value.replace(exp, ','));//procura todo mundo que tem - e substitui por ,
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    private limparFormulario(): void {

        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();

    }


    private atualizaView(): void{

         // 0 - 6 Dias da semana vao de 0 a 6, sendo 0 domingo e 6 sábado
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');

    }



}