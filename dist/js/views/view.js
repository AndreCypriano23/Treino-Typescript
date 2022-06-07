export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model); //coloquei de const para let para poder trocar a variável
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, ''); //para ngm tentar mandar cósigo script, remove toda a tag script
        }
        this.elemento.innerHTML = template;
    }
}
