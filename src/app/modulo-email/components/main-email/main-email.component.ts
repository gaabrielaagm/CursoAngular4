import { Component } from '@angular/core';

@Component({
    selector: 'main-email',
    template: `
        <div class="panel panel-default">
            <h1>{{title}}</h1>
            <mostrar-email></mostrar-email>
            <guardar-email></guardar-email>
        </div>
    `
})
export class MainEmailComponent{
    title = 'Modulo de email';

    ngOnInit(){
        console.log('Componente principal del modulo cargado');
    }
}