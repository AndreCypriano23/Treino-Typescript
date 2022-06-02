import { Negociacao } from './models/negociacao.js';


const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);
console.log(negociacao.data);
console.log(negociacao.valor);
console.log('volume: ', negociacao.volume);



//nagociacao.quantidade = 10; Isso nao funciona, nao pode add nada ao getter
