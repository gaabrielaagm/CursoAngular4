import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent{
    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;

    constructor(private _peticionesService: PeticionesService){
        this.coche = new Coche("","","");
        this.coches = [
            new Coche("Mustang","120","Rojo"),
            new Coche("Tsuro", "80", "Blanco")
        ];
    }

    ngOnInit(){
        console.log(this._peticionesService.getPrueba());
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                console.log(result);
                if(!this.articulos){
                    console.log("Error en el servidor");
                }
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }

    onSubmit(){
        this.coches.push(new Coche(this.coche.nombre, this.coche.caballaje, this.coche.color));
        //this.coche = new Coche("","","");
        //console.log(this.coche);
    }
}