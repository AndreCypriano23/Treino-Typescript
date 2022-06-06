import { View } from "./view.js";

export class MensagemView extends View<string>{


    template(model: string): string{ //Está sobrescrevendo o método template do pai
        return `
            <p class="alert alert-info">${model}</p>

        `
    }


}