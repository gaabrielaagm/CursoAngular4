import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';
import { fadeIn } from '../animations-components/animations';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [RopaService], //mediante inyector de dependencias va a generar las instancias de esos objetos 
    animations: [fadeIn]
})
export class HomeComponent{
    public titulo = "Página principal";

    //Servicios
    public listado_ropa: Array<string>;
    public prenda_a_guardar:string;

    //Pipes
    public fecha;
    public nombre;


    //Creamos una instancia en la clase a través del constructor
    //se recomienda poner los servicios con guion bajo _service
    constructor(
        private _ropaService: RopaService
    ){
        this.fecha = new Date(2018,7,17);
        this.nombre = "Gabriela GUERRERO medina";
    }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
        //console.log(this._ropaService.prueba("Tennis Nike"));
    }

    guardarPrenda(){
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }

    eliminarPrenda(index:number){
        this._ropaService.deleteRopa(index);
    }
}