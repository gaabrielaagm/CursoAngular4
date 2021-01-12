import { Component } from '@angular/core';

@Component({
    selector: 'padre-component',
    templateUrl: './padre.component.html'
})
export class PadreComponent{
    public title: string;
    public datos_del_hijo;
    //Datos para componente hijo
    public dato_externo = "GM";
    public identity = {
        id:1,
        web: 'gm.com',
        tematica: 'Desarrollo web'
    }

    constructor(){
        this.title = 'Componente padre';
    }

    recibirDatos(event){
        //event al final tiene/trae un objeto
        console.log(event);
        this.datos_del_hijo = event;
    }
}