import { Component } from '@angular/core';

//Incluir jQuery
declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html',
})
export class PlantillasComponent{
    public titulo;
    public administrador;
    public datos_del_hijo;
    public titulo_escondido;

    //Datos para componente hijo
    public dato_externo = "GM";
    public identity = {
        id:1,
        web: 'gm.com',
        tematica: 'Desarrollo web'
    }

    constructor(){
        this.titulo = "Plantilas NgTemplate en Angular";
        this.administrador = false;
        this.datos_del_hijo = null;
        this.titulo_escondido = true;
    }

    cambiar(value){
        this.administrador = value;
    }

    recibirDatos(event){
        //event al final tiene/trae un objeto
        console.log(event);
        this.datos_del_hijo = event;
    }

    //Incluir jQuery en un método
    toggleTitle(){
        console.log('Le has dado click al botón');
        $('.title').slideToggle();
        this.titulo_escondido = false;
    }

    cambiarAdmin(){
        this.administrador = !this.administrador;
    }
}
