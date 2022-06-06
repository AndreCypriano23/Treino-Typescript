export abstract class View<T>{

    protected elemento: HTMLElement;//protected: os filhos conseguem enxergar, só eu o pai tem acesso a esse elemento, mas minhas filhas podem tocar, todo mundo que herdar de mim

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    public update(model: T): void{

        const template = this.template(model);  
        this.elemento.innerHTML  = template;

    } 

    protected abstract template(model: T): string;

}