export abstract class View<T>{

    protected elemento: HTMLElement;//protected: os filhos conseguem enxergar, só eu o pai tem acesso a esse elemento, mas minhas filhas podem tocar, todo mundo que herdar de mim
    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean){
        this.elemento = document.querySelector(seletor);
        if(escapar){
            this.escapar = escapar;
        }

    }

    public update(model: T): void{

        let template = this.template(model);//coloquei de const para let para poder trocar a variável
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');//para ngm tentar mandar cósigo script, remove toda a tag script
        }  
        this.elemento.innerHTML  = template;
        
    } 

    protected abstract template(model: T): string;

}